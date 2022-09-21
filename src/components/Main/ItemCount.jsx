import "../Main/ItemCount.scss"
import { useContext } from "react";
import { useState } from "react"
import { CartContext } from "../../Context/CartProvider";

export const ItemCount = ({ producto }) => {

    const { onAddCart } = useContext(CartContext);

    const [itemCount, setItemCount] = useState(1);

    const onAddItem = () => {
        producto.stock > itemCount ? setItemCount(itemCount + 1) : null;
    }

    const onSubtItem = () => {
        itemCount > 1 ? setItemCount(itemCount - 1) : null;
    }

    return (
        <>
            <h3 className="f-ars text-center">${producto.precio * itemCount}</h3>
            <div className="count-container">
                <button className="d-flex justify-content-center btn-counter">
                    <i onClick={onAddItem} className="bi bi-plus-circle-fill px-3"></i>
                    <span> {itemCount} </span>
                    <i onClick={onSubtItem} className="bi bi-dash-circle-fill px-3"></i>
                </button>
                <button className="btn-compra" onClick={() => onAddCart(producto, itemCount)}>Añadir</button>
            </div>
        </>
    )
}
