import React, { useState } from 'react';
import { Cart } from '../cart/Cart'

export const ComponenteDeEventos = () => {

    const [producto, setProducto] = useState('');
    const [productos, setProductos] = useState([]);

    const manejarClick = () => {
        // e.stopPropagation();
        // e.preventDefault();
        // console.dir(e.target)
        setProductos([...productos, producto])
        // console.log(productos)

    }

    const manejarChange = (evento) => {
        // evento.preventDefault();
        // console.log(e.target.value)
        setProducto(evento.target.value);

    }

    // const manejarDiv = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     console.log('hola, click padre')
    // }

    const prevenirDefault = (event) => {
        event.preventDefault();
        // console.log('prevenido');
    }
    return (
        <>
            <div>
                <input type="text" onChange={manejarChange} />
                <button onClick={manejarClick}>Click (Agregar carrito)</button>
                <a target="_blank" rel='noreferrer' href='https://google.com' onClick={prevenirDefault}>ir a google</a>
            </div>
            {/* <Cart productos={productos} /> */}
        </>
    )
}


