import React, { useEffect, useState } from "react";
import { ItemDetail } from "../itemDetail/ItemDetail";
import { Loading } from "../loading/Loading";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase'
import {getDoc, collection, doc} from 'firebase/firestore';

export const ItemDetailContainer = () => {
    
    const [productoDetalle, setProductoDetalle] = useState([]);
    const [loading, setLoading] = useState(true);        
    const [error, setError] = useState(false);

    const { id } = useParams();

    
    useEffect(() => {
        const productsCollection = collection(db, "productos");
        const refDoc = doc(productsCollection,id);
        getDoc(refDoc)
        .then((result) => {
            const produ = {
                id, 
                ...result.data()
            }
            setProductoDetalle(produ);
            setLoading(!loading);
        })
        .catch(()=>{
            setError(true);
        })
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
                    <ItemDetail productoDetalle={productoDetalle} />
                }
            </div>
        </>
        )
}