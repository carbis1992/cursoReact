import React, { useState } from 'react';
import './FormularioCompra.css';

const Formulario = ({ finalizarCompra }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: '', 
        numeroTarjeta: '',
        fechaVec: '',
        codSeg: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finalizePurchase = () => {
        const { name, email, phone, numeroTarjeta, fechaVec, codSeg } = form
        finalizarCompra({ name, email, phone, numeroTarjeta, fechaVec, codSeg });
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation &&
        form.numeroTarjeta.length > 0 &&
        form.fechaVec.length > 0 &&
        form.codSeg.length > 0
    )

    return (
        <div className='formulario'>
            <h1>Ultimo pasos: </h1>
            <form className='formularioCompra'>
                <label  htmlFor="name" className='labelForm'>Nombre:</label>
                <input placeholder="Juan" name="name" value={form.name} onChange={getContactData} type="text"/>
                <label  htmlFor="lastName" className='labelForm'>Nombre:</label>
                <input placeholder="Perez" name="lastName" value={form.apellido} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='labelForm'>Email:</label>
                <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                <label htmlFor="phone" className='labelForm'>Telefono:</label>
                <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='labelForm'>Email:</label>
                <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
                <label htmlFor="numeroTarjeta" className='labelForm'>Numero de tarjeta:</label>
                <input placeholder="XXXX-XXXX-XXXX-XXXX" name="numeroTarjeta" value={form.numeroTarjeta} onChange={getContactData} type="text"/>
                <label htmlFor="fechaVec" className='labelForm'>Fecha de vencimiento:</label>
                <input placeholder="01/01" name="fechaVec" value={form.fechaVec} onChange={getContactData} type="text"/>
                <label htmlFor="codSeg" className='labelForm'>Fecha de vencimiento:</label>
                <input placeholder="XXX" name="codSeg" value={form.codSeg} onChange={getContactData} type="text"/>
            </form>
            <button type="submit" className='btnCarrito btnPagar' disabled={disabled} onClick={finalizePurchase}>Pagar</button>
        </div>
    )
}

export default Formulario;