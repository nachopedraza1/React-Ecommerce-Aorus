import { createContext, useState } from "react"
import { useProductsContext } from "./ProductosProvider";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [inCart, setInCart] = useState([]);
    console.log(inCart);
    const onAddCart = (producto) => {
        const newItem = [...inCart, producto]
        const existe = inCart.find(item => item.id === producto.id);
        if (existe) {
            console.log("Existe");
        } else {
            setInCart(newItem);
        }
    }

    return (
        <CartContext.Provider value={{ inCart, onAddCart }}>
            {props.children}
        </CartContext.Provider>
    )
}


/* 
 const existe = inCart.some(producto => producto.id === item.id);

        if (existe) {
            const prodcutoOriginal = getProductos.find(producto => producto.id === item.id)
            inCart.map(producto => {
                if (producto.id === item.id) {
                    producto.quantity++;
                    producto.precio = prodcutoOriginal.precio * producto.quantity;
                }
                const productoRepetido = [{
                    ...item,
                    precio: producto.precio,
                    quantity: producto.quantity,
                }];
                setInCart(productoRepetido);
            })

        } else {
            const cartItems = inCart.filter
            setInCart(cartItems);
        } */