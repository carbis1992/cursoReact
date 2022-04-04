import React, { useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { Loading } from "../loading/Loading";
import { NavLink, useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    
    const [productoDetalle, setProductoDetalle] = useState([]);
    const [loading, setLoading] = useState(true);        
    const [error, setError] = useState(false);

    const { id } = useParams();

    const getItems = async () => {
        try{
            const response = await fetch('https://mocki.io/v1/1f58066e-21b2-4690-9ae9-3d3f5ff7f487');
            const data = await response.json();            
            data.filter( (a) =>{ return a.id = id });
            setProductoDetalle(data);
        }
        catch{
            setError(true);
        }
        finally{
            setLoading(false);
        }
    }
    
    useEffect(() => {
        getItems();
        setLoading(!loading);
    }, [id]);

    return (
        <>
            <div className="container">
                { loading ?
                    <Loading />
                    : 
                    error ? 
                    <h1>Lo sentimos, hubo un error</h1>
                    :
                    productoDetalle.map((productoJson) =>{
                        return (
                            <NavLink to={productoJson.id}>
                            <ItemDetail {...productoJson} key={productoJson.id}></ItemDetail>
                            </NavLink>
                        );
                    })
                }
            </div>
        </>
        )
}