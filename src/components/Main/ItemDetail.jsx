import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ item }) => {
    return (
        <div className="modal fade" id={`modal${item.id}`} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{item.nombre}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img className="w-100" src={item.img} alt="" />
                        <h3> ${item.precio} </h3>
                        <h3> Cantidad: {item.cantidad} </h3>
                        <ItemCount cantidad={item.cantidad} />
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Comprar</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
