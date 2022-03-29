import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { yellow } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import './ItemDetail.css';

export const ItemDetail = ({img, nomb, precio, id, material, colores, resistencia, stock}) => {

    return(
        <>
            { 
            (id === 1) &&
                <div className="contenedorDescripcion">
                    <img alt="foto" src={img} className="fotoDescrp" />
                    <div className="descrip">
                        <div className='nuevoProd'>
                            <p className='tituloNewProd'>Nuevo producto</p>
                            <NewReleasesIcon sx={{ color: teal[200], fontSize: 20 }}></NewReleasesIcon>
                        </div>
                        <h1 className='tituloProducto'>{nomb}</h1>
                        <div>
                            <p className='recomendado'>Recomendado</p>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} ></StarIcon>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }}></StarIcon>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }}></StarIcon>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }}></StarIcon> 
                            <StarHalfIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }}></StarHalfIcon>
                        </div>
                        <h3 className='precioProd'>${precio}.-</h3>
                        <h4 className='detallesTitu'>Detalles</h4>
                        <div className='detailsProd'>
                            <h4>Stock disponible:</h4>
                            <p className='descr'>{stock}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Material:</h4>
                            <p className='descr'>{material}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Colores:</h4>
                            <p className='descr'>{colores}</p>
                        </div>
                        <div className='detailsProd'>
                            <h4>Resistencia:</h4>
                            <p className='descr'>{resistencia}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}