import React from "react";
import { Item } from '../item/Item';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ItemList = ({arrPorducts}) => {
    
    const onAdd = (cont) => {    
        alert('compraste ' + cont + ' productos');
        }
        const { id } = useParams();

        console.log(arrPorducts);
    return(
        <>
        <div className="contenedor">
            {
                arrPorducts.map((elemento, index)=>{
                    return(
                        <NavLink to={'/producto/:id'} key={index} className="productoCard">
                            <Item {...elemento} onAdd={onAdd} />
                        </NavLink>
                    );
                })
                
            }
        </div>
        </>
    )
}