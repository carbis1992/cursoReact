import React, { useState } from 'react';
import NavBar from './componentes/navBar/NavBar';
import { CartWidget } from './componentes/cartWidget/CartWidget';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';
import { ItemCont } from './componentes/itemCont/ItemCont';

const App = () => {

  const name = "Carla";
  const lastname = "Bisagni";
  const links = ["Cocina", "Baño", "Living", "Habitacion"];
  const arrObjetos = [{nomb: "vela1", precio: "200"},{nomb: "vela2", precio: "300"},{nomb: "vela3", precio: "400"}];

  const onAdd = (cont) => {    
    alert('compraste ' + cont + ' productos');
  }
  
  const [show, setShow] = useState(false);

  const toglear = () => {
    setShow(!show);
  }

  return (
    <>
      <NavBar listaLiks={links}>
        <CartWidget />
      </NavBar>  
      <ItemListContainer nombre={name} apellido={lastname} productos={arrObjetos}></ItemListContainer>
      <ItemCont stock={10} initial={1} funcion={onAdd}></ItemCont>
      {
        show ? <h1>es true</h1> : <h1>es falso</h1>
      }
      <button onClick={toglear}>togle</button>
    </>
  );
};

export default App;