import '../Main/Order.scss';
import { useOrderForm } from '../../Hooks/useOrderForm';
import { FormInfoClient } from './FormInfoClient';
import { FormPayment } from './FormPayment';
import { FormShipping } from './FormShipping';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartProvider';
import { Invoice } from './Invoice';

export const Order = () => {

    const { carrito } = useContext(CartContext)

    const { step, setStep, formData, onInputChange, validationForm, onSubmitForm, invoice } = useOrderForm();

    const displayForm = () => {
        if (step === 0) {
            return <FormInfoClient formData={formData} onInputChange={onInputChange} />
        } else if (step === 1) {
            return <FormShipping formData={formData} onInputChange={onInputChange} />
        } else if (step === 2) {
            return <FormPayment formData={formData} onInputChange={onInputChange} onSubmitForm={onSubmitForm} />
        } else if (step === 3) {
            return <Invoice invoice={invoice} />
        }
    }

    const titlesSteps = ["DATOS DEL COMPRADOR", "DATOS DE ENVIO", "DATOS DEL PAGO", "FACTURA DE COMPRA"]

    return (
        <div className="modal fade text-white f-rad" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title f-rad" id="exampleModalLabel">
                            {step === 0 && <i className="fa-solid fa-id-card p-2 fs-4"></i>}
                            {step === 1 && <i className="fa-solid fa-truck-fast p-2 fs-4"></i>}
                            {step === 2 && <i className="fa-solid fa-credit-card p-2 fs-4"></i>}
                            {step === 3 && <i className="fa-solid fa-file-invoice-dollar p-2 fs-4"></i>}
                            {titlesSteps[step]}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='col-12'>
                            <ul className='step-bar'>
                                <li><a className={step === 0 ? "activeStep" : ""} href="#">DATOS</a></li>
                                <li><a className={step === 1 ? "activeStep" : ""} href="#">ENVIO</a></li>
                                <li><a className={step === 2 ? "activeStep" : ""} href="#">PAGO</a></li>
                                <li><a className={step === 3 ? "activeStep" : ""} href="#">FACTURA</a></li>
                            </ul>
                        </div>
                        <div className='row justify-content-between align-items-start'>
                            {displayForm()}
                            {step <= 2 ?
                                <div className='d-none d-lg-flex flex-column col-4 mx-3'>
                                    <h5 className='text-center f-ars text-danger m-0'>RESUMEN DE COMPRA</h5>
                                    <hr />
                                    {carrito.map(item => {
                                        return (
                                            <div className='d-flex align-items-center' key={item.id}>
                                                <img width="100px" src={item.img} alt="" />
                                                <p className='m-0 px-4'> {item.nombre} </p>
                                            </div>
                                        )
                                    })}
                                    <hr />
                                </div>
                                :
                                null}
                        </div>
                    </div>
                    {step <= 2 &&
                        < div className="modal-footer justify-content-between">
                            <button className="btn-steps"
                                disabled={step === 0}
                                onClick={() => setStep(step - 1)}>REGRESAR</button>

                            {step < 2 ?
                                <button className="btn-steps"
                                    disabled={step == 3}
                                    onClick={() => validationForm()}>CONTINUAR</button>
                                : null}
                        </div>}
                </div>
            </div>
        </div >
    )
}
