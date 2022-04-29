import React, { useState } from 'react';
import '../formularioCompra/FormularioCompra.css';
import { db } from '../../firebase/firebase';
import {addDoc, collection} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Usuario = () => {
    
    const registroUsuario = collection(db, "usuarios");
    const [logueado, setLogueado] = useState(true);

    const [form, setForm] = useState({
        name: '',
        apellido: '',
        email: ''
    })

    const getUsuarioData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const finalizarLogin = () => {
        const { name, apellido, email } = form
        addDoc(registroUsuario, {
            name,
            apellido,
            email
        });
        notify();
        setTimeout(() => {
            setLogueado(false);
        }, 2700);
    }

    const disabled = !(
        form.email.length &&
        form.name.length &&
        form.apellido.length 
    )

    const notify = () => toast.success('Te logueaste con exito!', {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <>
        {
        logueado ?
            <div className='formulario'>
                <h1>Datos usuario: </h1>
                <form className='formularioCompra'>
                    <label  htmlFor="name" className='labelForm'>Nombre:</label>
                    <input placeholder="Juan" name="name" value={form.name} onChange={getUsuarioData} type="text"/>
                    <label  htmlFor="apellido" className='labelForm'>Apellido:</label>
                    <input placeholder="Perez" name="apellido" value={form.apellido} onChange={getUsuarioData} type="text"/>
                    <label htmlFor="email" className='labelForm'>Email:</label>
                    <input placeholder="Email" name="email" value={form.email} onChange={getUsuarioData} type="email"/>
                </form>
                <button type="submit" className='btnCarrito btnPagar' disabled={disabled} onClick={finalizarLogin}>Login</button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2500}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
            :
            <div className='btnFormHome'>
                <NavLink to={'/homedecoBisagni'}>
                    <button className='btnCarrito'>Volver a la home</button>
                </NavLink>
            </div>            
        }
                </>
    )
}

export default Usuario;