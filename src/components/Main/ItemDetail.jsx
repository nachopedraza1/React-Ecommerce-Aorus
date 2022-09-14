import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ producto }) => {

    const { onAddCart } = useContext(CartContext);

    const onAdd = (count) => {
        const newProduct = { ...producto, quantity: count }
        onAddCart(newProduct, count)
    }

    return (
        <div>
            <img src={`../${producto.img}`} alt="" width="30%" />
            <h1> {producto.nombre} </h1>
            <h1> Cantidad Disponible: {producto.cantidad} </h1>
            <ItemCount cantidad={producto} onAdd={onAdd} />
        </div>
    )
}
