import React from 'react';
import logo from '../imagenes/logo.jpg';
import './NavBar.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return(
        <>
            <nav className='menuNav'>
                <a href='./app.js'><img className='logo' src={logo} alt='logo' /></a> 
                <ul className='listaLinks'>
                    <li className='linkMenu'><a href='#'>Cocina</a></li>
                    <li className='linkMenu'><a href='#'>Baño</a></li>
                    <li className='linkMenu'><a href='#'>Living</a></li>
                    <li className='linkMenu'><a href='#'>Habitacion</a></li>
                </ul>
                <button className='btnLogin'>Login</button>
                <ShoppingCartIcon className='iconoCarrito' />
            </nav>
        </>        
    );
};

export default NavBar;