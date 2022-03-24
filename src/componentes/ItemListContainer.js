import React from 'react';
import './ItemListContainer.css'

export const ItemListContainer = ({nombre, apellido, productos}) => {
    return(
        <>
            <h1 className='saludo'>Bienvenido {nombre} {apellido}</h1>
            <p className='bienvenidaParrafo'>Espero que te gusten nuestros productos!</p>
            <div className='contenedor'>
                {productos.map((elemento, index)=>{ 
                        return (
                            <div key={index} className='productoCard'>
                                <p>{elemento.nomb} </p>
                                <p>${elemento.precio}</p>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}