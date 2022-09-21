import "../Main/Item.scss"
import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../Context/CartProvider";

export const Item = ({ item }) => {

  const { categoryId } = useParams();

  const { onAddCart } = useContext(CartContext);

  return (
    <div className="item-container column-custom">
      <div className="thumb">
        <img src={item.img} className="img-contained p-2" alt="" />
      </div>
      <div className="item-text w-100 h-100">
        <h3 className="text-center text-danger f-rad fs-5">${item.precio}</h3>
        <p className="fs-5"> {item.nombre} </p>
        <div>
          <Link to={`/categoria/${categoryId}/${item.id}`}>
            <button className="btn-detail mx-1">DETAIL</button>
          </Link>
          <button onClick={() => onAddCart(item, 1)} className="btn-compra mx-1">COMPRAR</button>
        </div>
      </div>
    </div>
  )
}