import { Link, useParams } from "react-router-dom"
import "../Main/Item.scss"
export const Item = ({ item }) => {

  const { categoryId } = useParams();

  return (
    <div className="item-container column-custom">
      <div className="thumb">
        <img src={item.img} className="img-contained p-2" alt="" />
      </div>
      <div className="item-text w-100 h-100">
        <h3 className="text-center fs-5">${item.precio}</h3>
        <p className="fs-5"> {item.nombre} </p>
        <Link to={`/categoria/${categoryId}/${item.nombre}`}>
          <button className="btn-detail mx-1">DETAIL</button>
          <button className="btn-compra mx-1">COMPRAR</button>
        </Link>
      </div>
    </div>
  )
}