import React from "react";
import './Item.css'; 

export const Item = ({producto}) => {
    return(
        <>
            <div className="contenedor">
                {producto}
            </div>
        </>
    )
}