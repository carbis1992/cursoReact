import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { yellow } from '@mui/material/colors';
import { teal } from '@mui/material/colors';
import './ItemDetail.css';
import { ItemCount } from "../itemCount/ItemCount";
import { ComponenteDeEventos } from '../componenteEventos/ComponenteDeEventos';


export const ItemDetail = ({img, nomb, precio, material, id, colores, resistencia, stock}) => {    
    const inicio = 1;

    const [cantidadProductos, setCantidadProductos] = useState(inicio);
    const [productoCarrito, setProductoCarrito] = useState({});
    const [productosCarrito, setProductosCarrito] = useState([]);


    const onAdd = (contador) => {

            setCantidadProductos(contador);
    
            console.log('Agregaste ' + cantidadProductos + ' del producto ' + id)
    
            setProductoCarrito({img, nomb, precio, id, cantidadProductos});
            console.log(productoCarrito)


        return(cantidadProductos)
    }
    
    const listaCarrito = () => {
        
        setProductosCarrito([...productosCarrito,productoCarrito])
        console.log(productosCarrito)
    }

    return(
        <>
                <div className="contenedorDescripcion" id={id}>
                    <img alt="foto" src={img} className="fotoDescrp" />
                    <div className="descrip">
                        <div className='nuevoProd'>
                            <p className='tituloNewProd'>Nuevo producto</p>
                            <NewReleasesIcon sx={{ color: teal[200], fontSize: 20 }}></NewReleasesIcon>
                        </div>
                        <h1 className='tituloProducto'>{nomb}</h1>
                        <div>
                            <p className='recomendado'>Recomendado</p>
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
                            <StarIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} /> 
                            <StarHalfIcon className='iconoStar' sx={{ color: yellow[500], fontSize: 20 }} />
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
                <ComponenteDeEventos></ComponenteDeEventos>
                <ItemCount stock={stock} initial={1} nombre={nomb} precio={precio} id={id} onAdd={onAdd}/> 
                {/* item count tiene q guardar la compra (el state) */}
                <button className='btnCarrito' onClick={listaCarrito}>Finalizar compra</button>
        </>
    )
}