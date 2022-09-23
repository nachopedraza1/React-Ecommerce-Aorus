import "../Main/ItemDetail.scss"
import { Link } from "react-router-dom";
import { ItemCount } from "./ItemCount";


export const ItemDetail = ({ producto }) => {

    return (
        <div className="detail-container container-sm row mx-auto pt-5">

            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center col-12 pt-3 pb-3">
                <Link to={`/categoria/${producto.categoria}`}><i className="bi bi-arrow-left-circle-fill text-danger"></i> VOLVER AL LISTADO</Link>
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
                <div className="border-start border-success border-4 p-2">
                    <h4 className="m-2">${producto.precio} <span className="badge bg-danger p-2"><p><i className="bi bi-bag-check"></i> PRECIO LISTA</p></span></h4>
                    <p>12 Cuotas sin interes de: ${parseInt(producto.precio / 12)} </p>
                    <p className="text-danger">Sobre precio de lista</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/ahora12_ch.png?alt=media&token=c3b9a9b2-390f-43fc-b9b0-4254274fdc41" alt="" />
                </div>
                <hr />
                <div className="border-start border-primary border-4 p-2">
                    <h4 className="m-2">${producto.precio} <span className="badge bg-danger p-2"><p><i className="bi bi-bag-check"></i> PRECIO LISTA</p></span></h4>
                    <p>paga con mercado pago</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/logoMP.png?alt=media&token=f38f9e3f-7d5b-4361-b0b8-b767148945ab" alt="" />
                </div>
                <ItemCount producto={producto} />
            </div>

            <hr className="mt-3" />

        </div>
    )
}