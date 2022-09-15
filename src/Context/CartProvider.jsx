import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [carrito, setInCart] = useState([]);

    const itemsInCart = carrito.length;

    const onAddCart = (producto, count) => {
        const existe = carrito.some(item => item.id === producto.id);
        const newCarrito = [...carrito];
        if (existe) {
            let indexProduct = newCarrito.findIndex(prod => prod.id === producto.id);
            newCarrito[indexProduct].precio = producto.precio * count;
            newCarrito[indexProduct].quantity = count;
            setInCart(newCarrito);
        } else {
            const newCarrito = [...carrito, {
                ...producto,
                precio: producto.precio * count,
            }];
            setInCart(newCarrito);
        }
    }

    const deleteItem = (id) => {
        let index = carrito.findIndex(item => item.id === id);
        carrito.splice(index, 1);
        setInCart([...carrito]);
    }

    return (
        <CartContext.Provider value={{ carrito, onAddCart, itemsInCart, deleteItem }}>
            {props.children}
        </CartContext.Provider>
    )
}