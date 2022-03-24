import React, { useState, useEffect } from 'react';
import './ItemCont.css';

export const ItemCont = ({stock, initial, funcion}) => {

    // const [mensaje, setMensaje] = useState('');
    // const [usario, setUsuario] = useState({});
    
    // const [usarios, setUsuarios] = useState([]);
    // const agregarObjeto = () =>{
    //     setUsuarios([...usarios,{name:'pepe'}]);
    //     }

    
    const [setup, setSetup] = useState(false);
    
    const [contador, setContador] = useState(initial);  


    useEffect(() => {
        console.log("Se ejecuto el useEffect");
        setTimeout(() => {
            setSetup(setup + 1)
        }, 2000);
    }, [contador]);

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

        <h1>{setup}</h1>
        </>
    )
}