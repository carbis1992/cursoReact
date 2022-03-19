import React from 'react';
import logo from '../imagenes/logo.jpg';
import './NavBar.css';

const NavBar = ({listaLiks ,children}) => {
    console.log(listaLiks);
    return(
        <>
            <nav className='menuNav'>
                <a href='./app.js'><img className='logo' src={logo} alt='logo' /></a> 
                {listaLiks.map((element, index)=>{
                    return <a key={index} href='#'>{element}</a>
                })}
                <button className='btnLogin'>Login</button>
                {children}
            </nav>
        </>        
    );
};

export default NavBar;