import '../Main/FormInfoClient.scss';

export const FormInfoClient = ({ formData, onInputChange }) => {

    const { nombre, dni, email, telefono } = formData;

    return (
        <div className='row g-3 col-12 col-lg-7'>
            <div className="col-sm-7">
                <label className="form-label">Nombre y Apellido</label>
                <input type="text"
                    className="form-control"
                    name='nombre'
                    value={nombre.replace(/[0-9]/g, '')}
                    maxLength={20}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="col-sm-5">
                <label className="form-label">DNI</label>
                <input type="text"
                    className="form-control"
                    name='dni'
                    value={dni.replace(/\D/g, '').replace(/\s/g, '')}
                    maxLength={8}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="col-sm-7">
                <label className="form-label">Email</label>
                <input type="text"
                    className="form-control"
                    name='email'
                    value={email.replace(/\s/g, '')}
                    maxLength={30}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="col-sm-5">
                <label className="form-label">Telefono</label>
                <input type="text"
                    className="form-control"
                    name='telefono'
                    value={telefono.replace(/\s/g, '').replace(/\D/g, '')}
                    maxLength={13}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
        </div>
    )
}