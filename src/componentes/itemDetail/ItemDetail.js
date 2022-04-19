import React, { useState, useContext } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { yellow } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import './ItemDetail.css';
import { ItemCount } from "../itemCount/ItemCount";
import { contexto } from "../../CartContext/CartContext";
import { NavLink } from 'react-router-dom';

export const ItemDetail = ({productoDetalle}) => {    
    const {addItem, isInCart, getTotalCarrito, getCantidadProducts} = useContext(contexto);
    const [finalizarCompra, setFinalizarCompra] = useState(true);
    
    const onAdd = (contador) => {
        addItem(productoDetalle,contador);
        setFinalizarCompra(false);
        isInCart(productoDetalle.id);
        getTotalCarrito(productoDetalle.precio, contador);
        getCantidadProducts();
    }

    return(
        <>
                <div className="contenedorDescripcion">
                    <img alt="foto" src={productoDetalle.img} className="fotoDescrp" />
                    <div className="descrip">
                        <div className='nuevoProd'>
                            <p className='tituloNewProd'>Nuevo producto</p>
                            <NewReleasesIcon sx={{ color: teal[200], fontSize: 20 }}></NewReleasesIcon>
                        </div>
                        <h1 className='tituloProducto'>{productoDetalle.nomb}</h1>
                        <div>
                            <p className='recomendado'>Recomendado</p>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} /> 
                            <StarHalfIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                        </div>
                        <h3 className='precioProd'>${productoDetalle.precio}.-</h3>
                        <h4 className='detallesTitu'>Detalles</h4>
                        <div className='detailsProd'>
                            <h4>Stock disponible:</h4>
                            <p className='descr'>{productoDetalle.stock}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Material:</h4>
                            <p className='descr'>{productoDetalle.material}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Colores:</h4>
                            <p className='descr'>{productoDetalle.colores}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Resistencia:</h4>
                            <p className='descr'>{productoDetalle.resistencia}</p>
                        </div>
                    </div>
                </div>
                {
                    finalizarCompra ?
                    <ItemCount stock={productoDetalle.stock} initial={1} nombre={productoDetalle.nomb} precio={productoDetalle.precio} id={productoDetalle.id} onAdd={onAdd}/> 
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