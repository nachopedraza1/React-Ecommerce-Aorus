import '../Main/Invoice.scss';

export const Invoice = ({ invoice }) => {

    const date = new Date()
    const nowDate = date.toLocaleString()

    const { items } = invoice;

    return (
        <div className="invoice-container">
            <h3 className="text-center text-danger">GRACIAS POR TU COMPRA!</h3>
            <a href="/" className='text-danger'><i class="bi bi-arrow-left"></i> VOLVER AL INICIO</a>
            <hr />
            <div className="d-flex flex-column flex-sm-row justify-content-between">
                <div>
                    <p>Nombre: <span>{invoice.cliente.nombre.toUpperCase()}</span></p>
                    <p>DNI: <span>{invoice.cliente.dni} </span></p>
                    <p>Email: <span>{invoice.cliente.email}</span> </p>
                    <p>Telefono: <span>{invoice.cliente.telefono}</span></p>
                </div>

                {invoice.envio.tipoEnvio != "Retira" &&
                    <div>
                        <p>Tipo de Envio: <span>{invoice.envio.tipoEnvio}</span></p>
                        <p>Provincia: <span>{invoice.envio.provincia}</span></p>
                        <p>Ciudad: <span>{invoice.envio.ciudad}</span></p>
                        <p>Calle: <span>{invoice.envio.calle} {invoice.envio.numeroCalle}</span></p>
                    </div>}

                <div>
                    <p>Fecha: <span>{nowDate}</span></p>
                    <p>ID de Compra : <span>{invoice.id}</span></p>
                    <img className="logo-invoice" src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/aorus.webp?alt=media&token=c5f6d70f-1dad-4b6b-870a-dc1ffa9a76a7" alt="" />
                </div>
            </div>
            <hr />
            <div>
                <div className='bg-success d-flex align-items-center p-2 text-center'>
                    <div className='col-7'>
                        <p className='m-0 text-start'>NOMBRE</p>
                    </div>
                    <div className='col-1'>
                        <p className='m-0'>CANTIDAD</p>
                    </div>
                    <div className='col-4'>
                        <p className='m-0'>PRECIO</p>
                    </div>
                </div>
                <div className="d-flex align-items-center p-2 text-center">
                    <div className='col-7 text-start'>
                        {items.map(producto => {
                            return <p>{producto.nombre} </p>
                        })}
                    </div>
                    <div className='col-1'>
                        {items.map(producto => {
                            return <p>{producto.quantity} </p>
                        })}
                    </div>
                    <div className='col-4'>
                        {items.map(producto => {
                            return <p>$ {producto.precio} </p>
                        })}
                    </div>
                </div>
                <hr />
                <div className="col-12 text-end px-3">
                    <h4>TOTAL: <span className="text-danger">${invoice.total}</span></h4>
                </div>
            </div>
        </div>
    )
}
