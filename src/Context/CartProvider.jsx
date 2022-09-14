import { createContext, useState } from "react"
import { useProductsContext } from "./ProductosProvider";

export const CartContext = createContext();

export const CartProvider = (props) => {

    const [inCart, setInCart] = useState([]);
    console.log(inCart);

    const onAddCart = (producto, count) => {
        const newItem = [...inCart]
        const existe = inCart.some(element => element.id === producto.id);
        setInCart(newItem);

        if (existe) {
            const productIdex = inCart.findIndex(element => element.id === producto.id)
            newItem[productIdex].precio = producto.precio * count;
            newItem[productIdex].quantity = count;
            setInCart(newItem)
        } else {
            const newProduct = {
                ...producto,
                precio: producto.precio * count,
                quantity: count,
            }
            const newList = [...inCart];
            newList.push(newProduct);
            setInCart(newList)
        }
    }

    return (
        <CartContext.Provider value={{ inCart, onAddCart }}>
            {props.children}
        </CartContext.Provider>
    )
}
