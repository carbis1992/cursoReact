import React, {useContext, useEffect, useState} from "react";
import { contexto } from "../../CartContext/CartContext";
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { db } from '../../firebase/firebase';
import {addDoc, collection, serverTimestamp, updateDoc, doc, increment} from "firebase/firestore";
import Formulario from "../formularioCompra/Formulario";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {

    const {cart, removeItem, clear, total} = useContext(contexto);
    const ventaCollection = collection(db, "ventas");
    const [idVenta, setIdVenta] = useState('');
    const [carritoVacio, setCarritoVacio] = useState(false);
    const [noHayProductosEnElCarrito, setNoHayProductosEnElCarrito] = useState(true);
    const [finalizar, setFinalizar] = useState(false);

    useEffect(()=>{
        if(cart.length > 0){
            setCarritoVacio(true);
            setNoHayProductosEnElCarrito(false);
        }
    },[cart]);
    
    const handleFinalize = () =>{
        setFinalizar(true);
        setCarritoVacio(false);
        setNoHayProductosEnElCarrito(false);
    }
    
    const finalizarCompra = (comprador) => {
        addDoc(ventaCollection, {
            comprador,
            items: cart,
            date: serverTimestamp(),
            total: total
        })
        .then((res)=>{
            setIdVenta(res.id);
        })
        .catch(()=>{
            console.log('error');
        })
        cart.forEach((product)=>{
            const orderDoc = doc(db, "productos", product.id);
            updateDoc(orderDoc, {stock: increment(-product.quantity)});
        })
        notify();
        clear();
    }
    
    const deleteElement = (id) =>{
        removeItem(id);
    }

    const vaciarCarrito = () => {
        clear();
        setCarritoVacio(false);
        setNoHayProductosEnElCarrito(true);
    }

    const notify = () => toast.success('ID venta: ' + idVenta, {
        position: "bottom-right",
        autoClose: 3500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const productoCarrito = cart.map((item)=>{
        return(
            <li className="listaCarrito" key={item.id}>
                <img src={item.img} alt='foto-producto' className='img-carrito' />
                <p>{item.nomb}</p>
                <p>{item.precio}</p>
                <p>{item.quantity}</p>
                <DeleteIcon className='btnDeleteProduct' onClick={(()=>deleteElement(item.id))} />
            </li>
        )
    })
    
    return(
        <div className="cartContainer">                 
            {    carritoVacio && 
                <>
                    <div>
                        {productoCarrito}
                    </div>
                    <p>TOTAL: {total}</p>
                    <button className="btnCarrito vaciarCarritoBtn" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button className='btnCarrito finalizarBtn' onClick={handleFinalize}>Finalizar Compra</button>
                    <NavLink to={'/homedecoBisagni'}>
                        <button className='btnCarrito'>Volver al inicio</button>
                    </NavLink>
                </> 
            }
            {
                noHayProductosEnElCarrito &&
                <>
                    <h1>No hay productos en el carrito</h1>
                    <NavLink to={'/homedecoBisagni'}>
                        <button className='btnCarrito'>Volver al inicio</button>
                    </NavLink>
                </>
            }
            {
                    finalizar && 
                <>    
                    <Formulario finalizarCompra={finalizarCompra}/>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={3500}
                        hideProgressBar
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    <NavLink to={'/homedecoBisagni'}>
                        <button className='btnCarrito volverForm'>Volver al inicio</button>
                    </NavLink>
                </> 
            }                
        </div>
    )
}