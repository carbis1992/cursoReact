import React, {createContext, useState} from 'react';

export const contexto = createContext([]);
const {Provider} = contexto;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);

    const addItem = (item, quantity)=>{
       const newProduct = {
           ...item,
           quantity
       };
       if(isInCart(item.id)){
        const productFind = cart.find(item => item.id === newProduct.id);
        const index = cart.indexOf(productFind);
        const aux = [...cart];
        aux[index].quantity += quantity;
        setCart(aux);
    }else{
        setCart([...cart, newProduct]);
    }
    // getCantidadProducts();
    };
    const removeItem = (id) => {
        // usar un filter para eliminar el id indicado
        const listaFiltrada = cart.filter((a) => a.id !== id);
        setCart(listaFiltrada);
    };
    const isInCart = (id) => {
        // usar un find para determinar si un objeto existe dentro del array 
        const productoExistente = cart.find(item => item.id === id);
        if(productoExistente){
            return true;
        } else {
            return false;
        }
    };
    
    const getCantidadProducts = () => {
        // foreach
            cart.forEach((producto) => {
                setCounter(counter + producto.quantity);
            });        
    };

    const clear = () => {
        setCart([]);
        setCounter(0);
    };

    return(
        <Provider value={{cart, isInCart, addItem, removeItem, getCantidadProducts, counter, clear}}>
            {children}
        </Provider>
    )
}

export default CustomProvider;
