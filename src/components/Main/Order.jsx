import '../Main/Order.scss';
import { useState } from 'react';
import { useOrderForm } from '../../Hooks/useOrderForm';
import { FormInfoClient } from './FormInfoClient';
import { FormPayment } from './FormPayment';
import { FormShipping } from './FormShipping';
import { alertError } from '../../utils/alerts';

export const Order = () => {

    const [step, setStep] = useState(0);

    const { formClient,
        formShipping,
        formPayment,
        setFormClient,
        setFormShipping,
        setFormPayment } = useOrderForm();

    const displayForm = () => {
        if (step === 0) {
            return <FormInfoClient formClient={formClient} setFormClient={setFormClient} />
        } else if (step === 1) {
            return <FormShipping formShipping={formShipping} setFormShipping={setFormShipping} />
        } else if (step === 2) {
            return <FormPayment formPayment={formPayment} setFormPayment={setFormPayment} />
        }
    }

    const validationForm = () => {
        const inputsValues = [];
        Array.from(document.querySelectorAll(".form-control")).forEach(input => {
            inputsValues.push(input.value)
        })
        if (inputsValues.includes("")) {
            alertError();
        } else {
            setStep(step + 1);
        }
    }

    const titlesSteps = ["DATOS DEL COMPRADOR", "DATOS DE ENVIO", "DATOS DEL PAGO", "FACTURA DE COMPRA"]

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <li><a className={step === 0 ? "activee" : ""} href="#">DATOS</a></li>
                                <li><a className={step === 1 ? "activee" : ""} href="#">ENVIO</a></li>
                                <li><a className={step === 2 ? "activee" : ""} href="#">PAGO</a></li>
                                <li><a className={step === 3 ? "activee" : ""} href="#">RESUMEN</a></li>
                            </ul>
                        </div>

                        {displayForm()}
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary"
                            disabled={step === 0}
                            onClick={() => setStep(step - 1)}>Prev</button>
                        <button className="btn btn-primary"
                            disabled={step == 3}
                            onClick={() => validationForm()}>Next</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
