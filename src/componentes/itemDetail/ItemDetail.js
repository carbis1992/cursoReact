import React, { useState, useContext, useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { yellow } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import './ItemDetail.css';
import { ItemCount } from "../itemCount/ItemCount";
import { contexto } from "../../CartContext/CartContext";
import { NavLink } from 'react-router-dom';

export const ItemDetail = ({productoJson}) => {    
    const {addItem, isInCart, getTotalCarrito, getCantidadProducts} = useContext(contexto);
    const [finalizarCompra, setFinalizarCompra] = useState(true);
    
    const onAdd = (contador) => {
        addItem(productoJson,contador);
        setFinalizarCompra(false);
        isInCart(productoJson.id);
        getTotalCarrito(Number(productoJson.precio), contador);
        getCantidadProducts();
    }

    return(
        <>
                <div className="contenedorDescripcion" id={productoJson.id}>
                    <img alt="foto" src={productoJson.img} className="fotoDescrp" />
                    <div className="descrip">
                        <div className='nuevoProd'>
                            <p className='tituloNewProd'>Nuevo producto</p>
                            <NewReleasesIcon sx={{ color: teal[200], fontSize: 20 }}></NewReleasesIcon>
                        </div>
                        <h1 className='tituloProducto'>{productoJson.nomb}</h1>
                        <div>
                            <p className='recomendado'>Recomendado</p>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} /> 
                            <StarHalfIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                        </div>
                        <h3 className='precioProd'>${productoJson.precio}.-</h3>
                        <h4 className='detallesTitu'>Detalles</h4>
                        <div className='detailsProd'>
                            <h4>Stock disponible:</h4>
                            <p className='descr'>{productoJson.stock}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Material:</h4>
                            <p className='descr'>{productoJson.material}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Colores:</h4>
                            <p className='descr'>{productoJson.colores}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Resistencia:</h4>
                            <p className='descr'>{productoJson.resistencia}</p>
                        </div>
                    </div>
                </div>
                {
                    finalizarCompra ?
                    <ItemCount stock={productoJson.stock} initial={1} nombre={productoJson.nomb} precio={productoJson.precio} id={productoJson.id} onAdd={onAdd}/> 
                    :
                    <>
                        <NavLink to={'/cart'}>
                                <button className='btnCarrito btnFinalizarCompra' >Ir al carrito</button>
                        </NavLink>
                        <NavLink to={'/'}>
                            <button className='btnCarrito btnFinalizarCompra'>Seguir comprando</button>
                        </NavLink>
                    </>
                }                  
        </>
    )
}