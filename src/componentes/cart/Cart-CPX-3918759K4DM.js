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
    const ventaCollection = collection(db, "ventas");
    const [IdVenta, setIdVenta] = useState('');

    // esto viene de firebase
    const comprador = {
        nombre: "juan",
        apellido: "perex",
        email: "carla@hotmail.com"
    }

    
    
    useEffect(()=>{
        if(cart.length > 0){
            setCarritoVacio(true);
        }
    },[cart]);

    const finalizarCompra = () => {
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
        // foreach de cart, consultar las cantidades de productos comprados 
        // y desp actualizar el stock con update

        // const orderDoc = doc(db, "productos", "id");
        // updateDoc(orderDoc, {stock: 48});

        // 48 esta hardcodeado pero iria el stock menos la cantidad comprada 
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
                    <NavLink to={'/finalizarCompra'}>
                        {/* <FormularioCompra /> */}
                    <button className='btnCarrito finalizarBtn' onClick={finalizarCompra}>Finalizar Comprar</button>
                    </NavLink>
                </> 
                :
                    <h1>No hay productos en el carrito</h1>
            } 
                    <NavLink to={'/'}>
                        <button className='btnCarrito'>Volver al inicio</button>
                    </NavLink>
        </div>
    )
}