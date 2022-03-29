import React, {useEffect, useState} from "react";
import { Item } from '../item/Item';

export const ItemList = ({arrPorducts}) => {
    
    const inicial = [];
    const [productos, setProductos] = useState(inicial);
    const [show, setShow] = useState(false);
    
    useEffect(() => {        
        arrPorducts.then((prod) => {            
            setProductos(prod);
            setShow(!show);
        })
        .catch(() => {
            console.log('Error')
        });
    }, []);

    
    const onAdd = (cont) => {    
        alert('compraste ' + cont + ' productos');
        }

    return(
        <>
        <div className="contenedor">
            {
                show ? productos.map((elemento, index)=>{
                    return(
                        <Item {...elemento} onAdd={onAdd} key={index}></Item>
                    );
                })
                : <p>Espere...</p>
            }
        </div>
        </>
    )
}