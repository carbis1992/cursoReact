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

    const element = productos.map((elemento, index) => {
        return(
                <div className="productoCard" key={index}>
                    <img alt="foto" src={elemento.img} className="imagenProducto" />
                    <p>{elemento.nomb}</p>
                    <p>${elemento.precio}</p>
                    <button className="btnDetallesProd">Detalles</button>
                </div>
        );
    });

    return(
        <>{
            show ? <Item producto={element}></Item>
            : <p>Espere...</p>
            }
        </>
    )
}