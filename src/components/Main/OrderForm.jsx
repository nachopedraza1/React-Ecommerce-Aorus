import '../Main/OrderForm.scss';
import { useForm } from '../../Hooks/useForm';

export const OrderForm = () => {

    const { orderForm, onInputChange, onSubmitForm } = useForm({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        ciudad: "",
    });

    const { nombre, apellido, dni, email, ciudad } = orderForm;

    return (
        <>
            <form className="row g-3 needs-validation" noValidate>
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
                        id="validationCustom01"
                        value={apellido.replace(/[0-9]/g, '').replace(/\s/g, '')}
                        name="apellido"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-4">
                    <label className="form-label">DNI</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom02"
                        value={dni.replace(/\D/g, '').replace(/\s/g, '')}
                        name="dni"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-4">
                    <label className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="validationCustom02"
                        value={email.replace(/\s/g, '').replace(/\s/g, '')}
                        name="email"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Ciudad</label>
                    <input type="text"
                        className="form-control"
                        id="validationCustom02"
                        value={ciudad.replace(/[0-9]/g, '').replace(/\s/g, '')}
                        name="ciudad"
                        onChange={onInputChange}
                        required />
                </div>

                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                        <label className="form-check-label" for="invalidCheck">
                            Acepto los terminos y condiciones
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit" onClick={() => onSubmitForm(event)}>Continuar</button>
                </div>
            </form>
        </>
    )
}

{/* <form className='needs-validation' action="submit" novalidate>
            <input
                className='m-2'
                type="text"
                placeholder='Nombre'
                name='nombre'
                value={nombre.replace(/[0-9]/g, '')}
                onChange={onInputChange}
                required
            />
            <input
                className='m-2'
                type="dni"
                placeholder='DNI'
                name='dni'
                value={dni.replace(/\D/g, '').replace(/\s/g, '')}
                onChange={onInputChange}
                required
            />
            <input
                className='m-2'
                type="email"
                placeholder='Email'
                name='email'
                value={email.replace(/\s/g, '')}
                onChange={onInputChange}
                required
            />
            <button type="submit" className="btn btn-primary">Continuar</button>
        </form> */}
