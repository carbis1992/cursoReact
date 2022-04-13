import React, {useContext} from 'react';
import './CartWidget.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { contexto } from "../../CartContext/CartContext";

export const CartWidget = () => {
    const {counter} = useContext(contexto);
    return(
        <div className='carritoCant'>
            <ShoppingCartIcon className='iconoCarrito' />
            <p className='cantCarrito'>{counter}</p>
        </div>
    )
}



