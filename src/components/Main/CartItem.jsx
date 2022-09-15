import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import "./CartItem.scss";

export const CartItem = ({ item }) => {

    const { deleteItem } = useContext(CartContext);

    return (
        <div className="cart-item">
            <div className="thumb">
                <button className="btn-eliminar" onClick={() => deleteItem(item.id)}>
                    <i className="bi bi-trash-fill text-danger"></i>
                </button>
                <p className="text-start m-0 p-2">Cantidad: <span className="text-danger">{item.quantity}</span></p>
                <img className="img-contained p-2" src={item.img} alt="" />
            </div>
            <div>
                <h5> {item.nombre} </h5>
                <h4> $ {item.precio} </h4>
            </div>
        </div>
    )
}
