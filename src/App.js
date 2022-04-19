import React from 'react';
import NavBar from './componentes/navBar/NavBar';
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './componentes/cart/Cart';
import { Error } from './componentes/error/Error';
import CustomProvider from './CartContext/CartContext';
// import { ComponenteDeEventos } from './componentes/componenteEventos/ComponenteDeEventos';


const App = () => {

  const name = "Carla";
  const lastname = "Bisagni";
  const links = [
    {name: "Cocina", route: "categoria/cocina", id: 1},
    {name: "Jardin", route: "categoria/jardin", id: 2},
    {name: "Living", route: "categoria/living", id: 3},
    {name: "Habitacion", route: "categoria/habitacion", id: 4}
];

  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar listaLiks={links} />  
        <Routes>
          <Route path="/" element={<ItemListContainer nombre={name} apellido={lastname}/>}/>
          <Route path="/categoria/:name" element={<ItemListContainer nombre={name} apellido={lastname}/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />}/>
        </Routes>     
        </CustomProvider>
    </BrowserRouter>
  );
};

export default App;