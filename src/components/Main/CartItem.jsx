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

            <div className="container-lg d-none d-sm-block">
                <table class="table text-white text-center">
                    <thead>
                        <tr>
                            <th scope="col"><i className="bi bi-camera"></i></th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="tabla">
                            <td> <img src={producto.img} width="100px" height="100px" alt="" /> </td>
                            <td> <p>{producto.nombre}</p></td>
                            <td> {producto.quantity} </td>
                            <td> ${producto.precio} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}