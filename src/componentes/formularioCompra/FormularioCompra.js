import React, {useState} from "react";
import './FormularioCompra.css';
// import { Cart } from "../cart/Cart";

export const FormularioCompra = ({datosComprador}) => {

  const [comprador, setComprador] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });
  
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    datosComprador(comprador);
    return comprador
  }
  
  const handleChange = (evt) => {
    const { target } = evt;
    const { name, value } = target;
    
    const newComprador = {
      ...comprador,
      [name]: value,
    };
    
    setComprador(newComprador);
  }
  
  // const datos = () => {
  //   }

  return (
    <>
      <div className='formulario'>
      <h1>Ultimo pasos: </h1>
        <form onSubmit={handleSubmit} className='formularioCompra'>
          <label htmlFor="email" className='labelForm'>Nombre:</label>
          <input
            id="nombre"
            name="nombre"
            type="nombre"
            placeholder='Juan'
            value={comprador.nombre}
            onChange={handleChange}
          />
          <label htmlFor="apellido" className='labelForm'>Apellido:</label>
          <input
            id="apellido"
            name="apellido"
            type="apellido"
            placeholder='Perez'
            value={comprador.apellido}
            onChange={handleChange}
          />
          <label htmlFor="email" className='labelForm'>Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder='ejemplo@gmail.com'
            value={comprador.email}
            onChange={handleChange}
          />
          <button className='btnCarrito btnPagar' type="submit">Pagar</button>
        </form>
      </div>
    </>
  );
}

