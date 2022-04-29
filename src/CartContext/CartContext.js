import React, {createContext, useState} from 'react';

export const contexto = createContext([]);
const {Provider} = contexto;

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0);

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
            getTotalCarrito(Number(item.precio), item.quantity);
        }
    };
    const removeItem = (id) => {
        const listaFiltrada = cart.filter((a) => a.id !== id);
        setCart(listaFiltrada);
    };
    const isInCart = (id) => {
        const productoExistente = cart.find(item => item.id === id);
        if(productoExistente){
            return true;
        } else {
            return false;
        }
    };

    const getTotalCarrito = (precio, qty) => {
        precio = precio * qty;
        setTotal(total + precio);
    }
    
    const getCantidadProducts = () => {
            cart.forEach((producto) => {
                setCounter(counter + producto.quantity);
            });        
            return counter;
    };

    const clear = () => {
        setCart([]);
        setCounter(0);
        setTotal(0);
    };

    return(
        <Provider value={{cart, isInCart, addItem, removeItem, getCantidadProducts, counter, clear, total, getTotalCarrito}}>
            {children}
        </Provider>
    )
}

export default CustomProvider;
