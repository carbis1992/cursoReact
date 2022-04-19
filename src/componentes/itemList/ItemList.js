import React from "react";
import { Item } from '../item/Item';
import { NavLink } from "react-router-dom";

export const ItemList = ({productos}) => {

    return(
        <>
        <div className="contenedor">
            {
                productos.map((elemento, index)=>{
                    return(
                        <NavLink to={'/producto/'+elemento.id} key={index} className="productoCard">
                            <Item {...elemento} />
                        </NavLink>
                    );
                })
                
            }
        </div>
        </>
    )
}