import React, {useContext, useEffect, useState} from "react";
import { contexto } from "../../CartContext/CartContext";
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";

export const Cart = () => {
    const {cart, removeItem, clear, total} = useContext(contexto);
    const [carritoVacio, setCarritoVacio] = useState(false);
    
    useEffect(()=>{
        if(cart.length > 0){
            setCarritoVacio(true);
        }
    }, [cart]);
    
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