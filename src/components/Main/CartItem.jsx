import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import "./CartItem.scss";
import { ItemCount } from "./ItemCount";

export const CartItem = ({ producto }) => {

    const { deleteItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <div className="thumb">
                <button className="btn-eliminar" onClick={() => deleteItem(producto.id)}>
                    <i className="bi bi-trash-fill text-danger"></i>
                </button>
                <p className="text-start m-0 p-2">Cantidad: <span className="text-danger">{producto.quantity}</span></p>
                <img className="img-contained p-2" src={producto.img} alt="" />
            </div>
            <div>
                <h5> {producto.nombre} </h5>
                <h4> $ {producto.precio} </h4>
            </div>
        </div>
    )
}
