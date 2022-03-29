import React from 'react';
import NavBar from './componentes/navBar/NavBar';
import { CartWidget } from './componentes/cartWidget/CartWidget';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/itemDetailContainer/ItemDetailContainer';

const App = () => {

  const name = "Carla";
  const lastname = "Bisagni";
  const links = ["Cocina", "Jardin", "Living", "Habitacion"];

  return (
    <>
      <NavBar listaLiks={links}>
        <CartWidget />
      </NavBar>  
      <ItemListContainer nombre={name} apellido={lastname}></ItemListContainer> 
      <ItemDetailContainer></ItemDetailContainer>
    </>
  );
};

export default App;