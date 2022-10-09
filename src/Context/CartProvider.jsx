import { createContext, useState } from "react"
import { alertClearCart, alertDeleteProduct, alertOnAddProduct } from "../utils/alerts";
import { useProductsContext } from "./ProductosProvider";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const getProductos = useProductsContext();

    const [carrito, setInCart] = useState([]);

    const itemsInCart = carrito.length;

    const totalSuma = () => {
        let precios = carrito.reduce((acc, prod) => acc + prod.precio, 0);
        return precios;
    }

    const onAddCart = (producto, count) => {
        alertOnAddProduct();
        const existe = carrito.some(item => item.id === producto.id);
        const newCarrito = [...carrito];
        if (existe) {
            let indexProduct = newCarrito.findIndex(prod => prod.id === producto.id);
            let precioOriginal = getProductos.find(prod => prod.id === producto.id);
            newCarrito[indexProduct].precio = precioOriginal.precio * count;
            newCarrito[indexProduct].quantity = count;
            setInCart(newCarrito);
        } else {
            const newCarrito = [...carrito, {
                ...producto,
                quantity: count,
                precio: producto.precio * count,
            }];
            setInCart(newCarrito);
        }
    }

    const deleteItem = (id) => {
        alertDeleteProduct();
        let index = carrito.findIndex(item => item.id === id);
        carrito.splice(index, 1);
        setInCart([...carrito]);
    }

    const vaciarCarrito = () => {
        alertClearCart();
        setInCart([]);
    }

    return (
        <CartContext.Provider value={{ carrito, onAddCart, itemsInCart, deleteItem, vaciarCarrito, totalSuma }}>
            {props.children}
        </CartContext.Provider>
    )
}