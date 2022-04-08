import React from "react";

export const Cart = ({productos}) => {
    return(
        <>
        <h1>Soy Cart</h1>
        <div>
            {
                productos.map((element, index)=>{
                    return(
                    <li key={index}>{element}</li>
                    );
                })
            }
            </div>
        </>
    )
}