import React from 'react';
import NavBar from './componentes/NavBar';
import { CartWidget } from './componentes/CartWidget';
import { ItemListContainer } from './componentes/ItemListContainer';
import { ItemCont } from './componentes/ItemCont';

const App = () => {

  const name = "Carla";
  const lastname = "Bisagni";
  const links = ["Cocina", "Baño", "Living", "Habitacion"];
  const arrObjetos = [{nomb: "vela1", precio: "200"},{nomb: "vela2", precio: "300"},{nomb: "vela3", precio: "400"}]

  const onAdd = (cont) => {    
    alert('compraste ' + cont + ' productos');
  }
  return (
    <>
      <NavBar listaLiks={links}>
        <CartWidget />
      </NavBar>  
      <ItemListContainer nombre={name} apellido={lastname} productos={arrObjetos}></ItemListContainer>
      <ItemCont stock={10} initial={1} funcion={onAdd}></ItemCont>
    </>
  );
};

export default App;