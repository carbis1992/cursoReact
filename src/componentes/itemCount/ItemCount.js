import React, { useState } from 'react';
import './ItemCount.css';

export const ItemCount = ({stock, initial, funcion}) => {
    
    const [contador, setContador] = useState(initial);   

    const sumador = () =>{
        if(contador < stock){
            setContador(contador + 1);
        } else{
            alert('No hay mas stock');
        }
    };

    const restador = () => {
        if(contador > initial){
            setContador(contador - 1);
        } 
    };

    const reset = () => {
        setContador(initial);
    }
    const funcionCreadaEnPadre = () => {
        funcion(contador);
    }

    return(        
        <>
        <div className='calculadoraContainer'>
            <p className='productoCarrito'>Producto</p>
            <div className='sumaRestaProd'>
                <button className='btnCarrito sumRes' onClick={restador}>-</button>
                <p>{contador}</p>
                <button className='btnCarrito sumRes' onClick={sumador}>+</button>
            </div>
            <div className='btnComprarResetear'>
                <button className='btnCarrito btnCompraReset' onClick={reset}>Reset</button>
                <button className='btnCarrito btnCompraReset' onClick={funcionCreadaEnPadre}>Comprar</button>
            </div>
        </div>
        </>
    )
}