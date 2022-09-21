import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";
import "./CartItem.scss";

export const CartItem = ({ producto }) => {

    const { deleteItem } = useContext(CartContext);

    return (
        <>
            <div className="cart-item d-sm-none">
                <div className="thumb">
                    <button className="btn-eliminar" onClick={() => deleteItem(producto.id)}>
                        <i className="bi bi-trash-fill text-danger"></i>
                    </button>
                    <p className="text-start m-0 p-2">CANTIDAD: <span className="text-danger">{producto.quantity}</span></p>
                    <img className="img-contained p-2" src={producto.img} alt="" />
                </div>
                <div>
                    <h5> {producto.nombre} </h5>
                    <h4 className="text-danger"> $ {producto.precio} </h4>
                </div>
            </div>

            <div className="cart-item d-none d-sm-block">
                <div className="row align-items-center justify-content-around">
                    <div className="col-2">
                        <img src={producto.img} width="100%" height="100px" alt="" />
                    </div>
                    <div className="col-5">
                        <p className="m-0">{producto.nombre}</p>
                    </div>
                    <div className="col-1">
                        <p className="m-0">{producto.quantity}</p>
                    </div>
                    <div className="col-2">
                        <p className="m-0">${producto.precio}</p>
                    </div>
                    <div className="col-2 text-center">
                        <button className="btn-eliminar" onClick={() => deleteItem(producto.id)}>
                            <i className="bi bi-trash-fill text-danger"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}