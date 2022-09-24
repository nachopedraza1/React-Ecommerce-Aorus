import '../Main/OrderForm.scss';
import { useForm } from '../../Hooks/useForm';

export const OrderForm = () => {

    const { orderForm, onInputChange, submitForm } = useForm({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        ciudad: "",
    });

    const { nombre, apellido, dni, email, ciudad } = orderForm;

    return (
        <>
            <form className="row g-3 needs-validation" id='formData' noValidate>
                <div className="col-md-4">
                    <label className="form-label">Nombre</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom01"
                        value={nombre.replace(/[0-9]/g, '').replace(/\s/g, '')}
                        name="nombre"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Apellido</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom02"
                        value={apellido.replace(/[0-9]/g, '').replace(/\s/g, '')}
                        name="apellido"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-4">
                    <label className="form-label">DNI</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom03"
                        value={dni.replace(/\D/g, '').replace(/\s/g, '')}
                        name="dni"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="validationCustom04"
                        value={email.replace(/\s/g, '').replace(/\s/g, '')}
                        name="email"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Ciudad</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom05"
                        value={ciudad.replace(/[0-9]/g, '').replace(/\s/g, '')}
                        name="ciudad"
                        onChange={onInputChange}
                        required />
                </div>
                < div className="modal-footer">
                    <button className="btn btn-primary" type="submit" onClick={(e) => submitForm(e)}>Continuar</button>
                </div>
            </form>
        </>
    )
}