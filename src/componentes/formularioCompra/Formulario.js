import React, { useState } from 'react';
import './FormularioCompra.css';
import { NavLink } from "react-router-dom";

const Formulario = ({ finalizarCompra }) => {
    
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        emailConfirmation: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finalizePurchase = () => {
        const { name, email, phone } = form
        finalizarCompra({ name, email, phone });
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.emailConfirmation.length &&
        form.phone.length > 0 &&
        form.email === form.emailConfirmation
    )

    return (
        <div className='formulario'>
            <h1>Ultimo pasos: </h1>
            <form className='formularioCompra'>
                <label  htmlFor="name" className='labelForm'>Nombre:</label>
                <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='labelForm'>Email:</label>
                <input placeholder="Email" name="email" value={form.email} onChange={getContactData} type="email"/>
                <label htmlFor="phone" className='labelForm'>Telefono:</label>
                <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text"/>
                <label htmlFor="email" className='labelForm'>Email:</label>
                <input placeholder="Confirma Email" name="emailConfirmation" value={form.emailConfirmation} onChange={getContactData} type="email"/>
            </form>
            <button type="submit" className='btnCarrito btnPagar' disabled={disabled} onClick={finalizePurchase}>Finalizar</button>
        </div>
    )
}

export default Formulario;