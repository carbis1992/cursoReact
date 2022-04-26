import React, {useContext, useEffect, useState} from "react";
import { contexto } from "../../CartContext/CartContext";
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import { db } from '../../firebase/firebase';
import {addDoc, collection, serverTimestamp, updateDoc, doc} from "firebase/firestore";
import { FormularioCompra } from "../formularioCompra/FormularioCompra";

export const Cart = () => {
    const {cart, removeItem, clear, total} = useContext(contexto);
    const [carritoVacio, setCarritoVacio] = useState(false);
    const [finalizar, setFinalizar] = useState(false);
    const ventaCollection = collection(db, "ventas");
    const [IdVenta, setIdVenta] = useState('');
    const [compradorDatos, setCompradorDatos] = useState({});
    const [cantStock, setCantStock] = useState(0);

    useEffect(()=>{
        if(cart.length > 0){
            setCarritoVacio(true);
        }

    },[cart]);
    
    const datosComprador = (comprador) => {
        setCompradorDatos({...comprador});
        console.log(compradorDatos)
    }

    const finalizarCompra = () => {
        addDoc(ventaCollection, {
            compradorDatos,
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
        // foreach de cart, consultar las cantidades de productos comprados 
        // y desp actualizar el stock con update

        cart.forEach((product)=>{
            // setCantStock(product.stock);
            const orderDoc = doc(db, "productos", "id");
            const stockActual = product.stock - product.quantity;
            console.log(stockActual)
            updateDoc(orderDoc, {stockActual});
        })
        
        setFinalizar(true);
        clear();
    }
    
    const deleteElement = (id) =>{
        removeItem(id);
    }

    const vaciarCarrito = () => {
        clear();
        setCarritoVacio(false);
    }
    
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
            {
                carritoVacio ? 
                <>    
                    <div>
                        {productoCarrito}
                    </div>
                    <p>TOTAL: {total}</p>
                    <button className="btnCarrito vaciarCarritoBtn" onClick={vaciarCarrito}>Vaciar Carrito</button>
                    <button className='btnCarrito finalizarBtn' onClick={finalizarCompra}>Finalizar Comprar</button>
                </> 
                    :
                    <h1>No hay productos en el carrito</h1>
            } 
            {
                finalizar &&
                    <FormularioCompra datosComprador={datosComprador}></FormularioCompra>
            }
                <NavLink to={'/'}>
                    <button className='btnCarrito'>Volver al inicio</button>
                </NavLink>
        </div>
    )
}