import React, {useContext} from "react";
import { contexto } from "../../CartContext/CartContext";
import './Cart.css';
import DeleteIcon from '@mui/icons-material/Delete';

export const Cart = () => {
    const {cart, removeItem, clear, cantProductos} = useContext(contexto);

    const deleteElement = (id) =>{
        removeItem(id);
    }

    const vaciarCarrito = () => {
        clear();
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
            <p>Cant productos: {cantProductos}</p>
            <div>
                {productoCarrito}
            </div>
            <button className="btnCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}