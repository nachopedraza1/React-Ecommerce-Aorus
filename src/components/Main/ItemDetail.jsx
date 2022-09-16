import "../Main/ItemDetail.scss"
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ producto }) => {

    return (
        <div className="detail-container">
            <div className="thumb">
                <h3 className="f-ars"> {producto.nombre} <span>Stock Disponible: {producto.cantidad}</span> </h3>
                <img className="img-contained" src={`../${producto.img}`} alt="" />
            </div>
            <ItemCount producto={producto} />
        </div>
    )
}
