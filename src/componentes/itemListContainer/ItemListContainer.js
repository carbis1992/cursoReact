import React from 'react';
import './ItemListContainer.css';
import { ItemList } from '../itemList/ItemList';

const productosIniciales = [
    {id: 1, img: 'https://magandadeko.com.ar/1451-home_default/candelabro-de-hierro-dorado-con-asa-medidas-14-x-12-cm-19-x-14-cm-y-22-x-14-cm.jpg', nomb: "Fanal bronce", precio: "3500"},
    {id: 2, img: 'https://magandadeko.com.ar/2651-home_default/fanal-de-metal-negro-y-cobre-chico.jpg',nomb: "Fanal hierro negro", precio: "3000"},
    {id: 3, img: 'https://magandadeko.com.ar/2895-large_default/fanal-de-metal-dorado-medidas-15-x-10-cm.jpg', nomb: "Fanal hierro", precio: "3200"},
    {id: 4, img: 'https://magandadeko.com.ar/1742-large_default/bandeja-hoja-de-madera-de-color-negro.jpg', nomb: "Bandeja hoja", precio: "2300"},
    {id: 5, img: 'https://magandadeko.com.ar/2309-home_default/bandeja-pluma-de-madera-de-color-negro.jpg', nomb: "Bandeja pluma", precio: "2500"},
    {id: 6, img: 'https://magandadeko.com.ar/1836-home_default/bandejas-decorativas-hojas-de-madera-set-x-3-pcs-de-color-negro.jpg', nomb: "Bandeja hoja madera", precio: "2900"},
    {id: 7, img: 'https://magandadeko.com.ar/1547-home_default/canasto-de-tejido-redondo-set-x-3pcs-medidas-20x8cm-23x9cm-26x10cm.jpg', nomb: "Canasto tejido", precio: "2900"},
    {id: 8, img: 'https://magandadeko.com.ar/2502-large_default/canastos-de-ratan-y-tejido-negro-set-x-3.jpg', nomb: "Canasto con negro", precio: "3300"},
    {id: 9, img: 'https://magandadeko.com.ar/1853-home_default/canasto-con-tapas-chico-redondo-set-x-2pcs-medidas-17x11cm-14x13cm.jpg', nomb: "Canasto con manija", precio: "2600"}
];

const promesa = new Promise((res, rej) => {
    setTimeout(()=>{
        res(productosIniciales);
    },2000)
});
    
    export const ItemListContainer = ({nombre, apellido}) => {

    return(
        <>
            <h1 className='saludo'>Bienvenido {nombre} {apellido}</h1>
            <p className='bienvenidaParrafo'>Espero que te gusten nuestros productos!</p>
            <ItemList arrPorducts={promesa}></ItemList> 
        </>
    )
}