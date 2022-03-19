import React from 'react';
import NavBar from './componentes/NavBar';
import { CartWidget } from './componentes/CartWidget';
import { ItemListContainer } from './componentes/ItemListContainer';

const App = () => {

  const name = "Carla";
  const lastname = "Bisagni";
  const links = ["Cocina", "Baño", "Living", "Habitacion"];
  const arrObjetos = [{nomb: "vela1", precio: "200"},{nomb: "vela2", precio: "300"},{nomb: "vela3", precio: "400"}]

  return (
    <>
      <NavBar listaLiks={links}>
        <CartWidget />
      </NavBar>  
      <ItemListContainer nombre={name} apellido={lastname} productos={arrObjetos}></ItemListContainer>
    </>
  );
};

export default App;