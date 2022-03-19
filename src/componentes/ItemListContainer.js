import React from 'react';
import './ItemListContainer.css'

export const ItemListContainer = ({nombre, apellido, productos}) => {
    return(
        <>
            <h1 className='saludo'>Bienvenido {nombre} {apellido}</h1>
            <p className='bienvenidaParrafo'>Espero que te gusten nuestros productos!</p>
            {productos.map((elemento, index)=>{ 
                    return <>
                        <div className='productoCard'>
                            <p key={index}>{elemento.nomb} </p>
                            <p key={index}>${elemento.precio}</p>
                        </div>
                    </>
                })}
        </>
    )
}