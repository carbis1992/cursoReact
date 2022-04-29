import React from 'react';
import logo from '../imagenes/logo.jpg';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import { CartWidget } from '../cartWidget/CartWidget';

const NavBar = ({listaLiks}) => {
    return(
        <>
            <nav className='menuNav'>
                <NavLink to={'/homedecoBisagni'}><img className='logo' src={logo} alt='logo' /></NavLink> 
                {listaLiks.map((element)=>{
                    return <NavLink key={element.id} to={element.route}>{element.name}</NavLink>
                })}

                <NavLink className='btnLogin' to={'/login'}>Login</NavLink>
                
                <NavLink to={'/cart'}>
                    <CartWidget />
                </NavLink>
            </nav>
        </>        
    );
};

export default NavBar;