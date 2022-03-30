import React, { useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { Loading } from "../loading/Loading";

let respuesta = [];
fetch('https://mocki.io/v1/05124854-c760-4f5e-b76c-a1284b6d941e')
    .then((response) => response.json())
    .then((json) => {
        respuesta = json         
    });

export const ItemDetailContainer = () => {
    
    const [productoDetalle, setProductoDetalle] = useState([]);
    const [loading, setLoading] = useState(false);    
    
    useEffect(() => {
        setTimeout(() => {
            setProductoDetalle(respuesta)
            setLoading(!loading)
        }, 2000);
    }, []);

    return (
        <>
            <div className="container">
                { loading ?
                    productoDetalle.map((productoJson, index) =>{
                        return (
                            <ItemDetail {...productoJson} key={index}></ItemDetail>
                        );
                    }) 
                    : 
                    <Loading></Loading>
                }
            </div>
        </>
    )
}