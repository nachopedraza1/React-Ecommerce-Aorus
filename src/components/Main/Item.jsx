import { Link } from "react-router-dom"
import "../Main/Item.scss"
export const Item = ({ item }) => {


  return (
    <div className="card column-custom">
      <div className="thumb img-back">
        <img src={item.img} className="img-contained p-2" alt="" />
      </div>
      <div className="w-100 h-100 p-1 bg-white d-flex flex-column justify-content-between">
        <h3 className="card-title">${item.precio}</h3>
        <p className="card-text text-center"> {item.nombre} </p>
        <p className="card-text">Cantidad: {item.cantidad} </p>
        <Link to={`/productos/${item.id}`}>
          <button className="btn btn-primary">Ver Detalle</button>
        </Link>
      </div>
    </div>
  )
}