import React from "react";
import './Item.css'; 

export const Item = ({img, nomb, precio}) => {

    return(
        <div>
            <img alt="foto" src={img} className="imagenProducto" />
            <p>{nomb}</p>
            <p>${precio}</p>
            <button className="btnDetallesProd">Detalles producto</button>
        </div>
    )
}