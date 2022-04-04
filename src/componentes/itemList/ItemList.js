import React from "react";
import { Item } from '../item/Item';
import { NavLink } from "react-router-dom";

export const ItemList = ({arrPorducts}) => {
    
    const onAdd = (cont) => {    
        alert('compraste ' + cont + ' productos');
        }

    return(
        <>
        <div className="contenedor">
            {
                arrPorducts.map((elemento, index)=>{
                    return(
                        <NavLink to={'/producto/'+elemento.id} key={index} className="productoCard">
                            <Item {...elemento} onAdd={onAdd} />
                        </NavLink>
                    );
                })
                
            }
        </div>
        </>
    )
}