import "../Main/ProductCard.scss"
import { ItemCount } from "./ItemCount"

export const ProductCard = ({ producto }) => {


  return (
    <div className="card column-custom">
      <div className="thumb img-back">
        <img src={producto.img} className="img-contained p-2" alt="" />
      </div>
      <div className="w-100 h-100 p-1 bg-white d-flex flex-column justify-content-between" >
        <h3 className="card-title">${producto.precio}</h3>
        <p className="card-text text-center"> {producto.nombre} </p>
        <p className="card-text">Cantidad: {producto.cantidad} </p>
        <ItemCount cantidad={producto.cantidad}/>
      </div>
    </div>
  )
}