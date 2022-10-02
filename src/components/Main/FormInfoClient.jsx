import '../Main/FormInfoClient.scss';

export const FormInfoClient = ({ formClient, setFormClient }) => {

    const { nombre, dni, email, telefono } = formClient;

    return (
        <div className='row g-3'>
            <div className="col-md-4">
                <label className="form-label">Nombre y Apellido</label>
                <input type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setFormClient({ ...formClient, nombre: e.target.value })}
                />
            </div>
            <div className="col-md-4">
                <label className="form-label">DNI</label>
                <input type="text"
                    className="form-control"
                    value={dni}
                    onChange={(e) => setFormClient({ ...formClient, dni: e.target.value })}
                />
            </div>
            <div className="col-md-4">
                <label className="form-label">Email</label>
                <input type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => setFormClient({ ...formClient, email: e.target.value })}
                />
            </div>
            <div className="col-md-4">
                <label className="form-label">Telefono</label>
                <input type="text"
                    className="form-control"
                    value={telefono}
                    onChange={(e) => setFormClient({ ...formClient, telefono: e.target.value })}
                />
            </div>
        </div>
    )
}