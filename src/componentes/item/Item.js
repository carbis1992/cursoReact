import React from "react";
import { ItemCount } from "../itemCount/ItemCount";
import './Item.css'; 

export const Item = ({img, nomb, precio, onAdd}) => {

    return(
        <>
            <div className="productoCard">
                    <img alt="foto" src={img} className="imagenProducto" />
                    <p>{nomb}</p>
                    <p>${precio}</p>
                    <button className="btnDetallesProd">Detalles producto</button>
                    <ItemCount stock={10} initial={1} funcion={onAdd}></ItemCount>
                </div>
        </>
    )
}