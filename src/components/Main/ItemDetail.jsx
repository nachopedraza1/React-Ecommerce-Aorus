import "../Main/ItemDetail.scss"
import { NavLink } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ producto }) => {

    return (
        <div className="detail-container container-sm row mx-auto pt-5">

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center col-12 pt-3 pb-3">
                <NavLink to={`/categoria/${producto.categoria}`}><span className="text-danger"><i className="bi bi-arrow-left-circle-fill"></i></span> VOLVER AL LISTADO</NavLink>
                <p>productos <i className="bi bi-arrow-right text-danger mx-1"></i> {producto.categoria} </p>
            </div>

            <hr />

            <div className="col-md-7 line">
                <div className="thumb">
                    <h3> {producto.nombre}</h3>
                    <div className="d-flex justify-content-between">
                        <p>Stock Disponible: <span className="text-danger"> {producto.stock}</span></p>
                        <p>Fabricante: <span className="text-danger"> {producto.fabricante}</span></p>
                    </div>
                    <img className="img-contained" src={`${producto.img}`} alt="" />
                </div>
            </div>

            <div className="col-md-5">
                <div className="border-start border-danger border-4 p-2">
                    <h4 className="m-2 text-decoration-line-through d-inline">${producto.precio}</h4>
                    <h4 className="d-inline">${parseInt(producto.precio - producto.precio * (17 / 100))} <span className="bg-success rounded px-2">17% off</span></h4>
                    <p>Válido para 1 pago en efectivo, débito o transferencia bancaria.</p>
                </div>
                <hr />
                <div className="border-start border-danger border-4 p-2">
                    <h4 className="m-2">${producto.precio} <span className="badge bg-danger p-2"><p>PRECIO LISTA</p> </span></h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime ducimus tempore et inventore</p>
                </div>
                <ItemCount producto={producto} />
            </div>

            <hr className="mt-3" />
        </div>
    )
}