import { useState } from "react"

export const FormShipping = ({ formData, onInputChange }) => {

    const [select, setSelect] = useState(0);

    const { postalCode, calle, numeroCalle, provincia, ciudad } = formData;

    return (
        <div>
            <div className="text-center">
                <h4 className="text-center">Selecciona la forma de envío preferida para la entrega de este pedido.</h4>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        name="tipoEnvio"
                        value={"Domicilio"}
                        onChange={(e) => { setSelect(0); onInputChange(e) }} defaultChecked
                    />
                    <label className="form-check-label">Envío a domicilio</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        name="tipoEnvio"
                        value={"Express"}
                        onChange={(e) => { setSelect(1); onInputChange(e) }}
                    />
                    <label className="form-check-label" >Envio Express</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input"
                        type="radio"
                        name="tipoEnvio"
                        value={"Retira"}
                        onChange={(e) => { setSelect(2); onInputChange(e) }}
                    />
                    <label className="form-check-label">Retiro en Socursal</label>
                </div>
            </div>
            <div className="mt-3">
                {select === 0 &&
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">Tiempo de entrega: En 48h hábiles estará en manos del correo y dentro de los 3 a 10 días hábiles llegará a tu hogar.</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">Estos plazos no aplican para la compra de PC. La demora de entrega para estos productos es de 72h hábiles como mínimo. En caso de
                                pago por transferencia o depósito bancario, el tiempo corre luego de la acreditación del mismo.</p>
                        </div>
                    </div>
                }
                {select === 1 &&
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">En Córdoba tu pedido llegará dentro de las 48h hábiles* una vez confirmado el pago.</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">Estos plazos no aplican para la compra de PC. La demora de despacho
                                para estos productos es de 72h hábiles como mínimo una vez confirmado el pago.
                                Tené en cuenta que si abonaste con transferencia el impacto del pago de la compra puede
                                demorar hasta 48h hábiles demorando el procesamiento de la misma para su envío.</p>
                        </div>
                    </div>
                }
                {select === 2 &&
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">Una vez confirmada la compra, tu pedido permanecerá en nuestro punto de retiro 48hs hábiles.</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">Si compraste entre las 00:00 y las 12:00h, será entregado a ese mismo día por la tarde a partir de las 14h.*.</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <i className="fa-regular fa-circle-check fs-2 p-2 text-danger"></i>
                            <p className="m-0">Si compraste entre las 12 y hasta las 23:59h, será entregado a partir de la mañana del día siguiente*.</p>
                        </div>
                    </div>
                }
            </div>
            {
                select == 0 || select == 1 ?
                    <div className="row g-3 mt-2">
                        <div className="col-3">
                            <label className="form-label">Codigo Postal</label>
                            <input type="text"
                                className="form-control"
                                name="postalCode"
                                value={postalCode.replace(/\s/g, '').replace(/\D/g, '')}
                                maxLength={4}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Calle</label>
                            <input type="text"
                                className="form-control"
                                name="calle"
                                value={calle.replace(/[0-9]/g, '')}
                                maxLength={15}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="col-3">
                            <label className="form-label">Numero</label>
                            <input type="text"
                                className="form-control"
                                name="numeroCalle"
                                value={numeroCalle.replace(/\D/g, '').replace(/\s/g, '')}
                                maxLength={4}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Provincia</label>
                            <input type="text"
                                className="form-control"
                                name="provincia"
                                value={provincia.replace(/[0-9]/g, '').replace(/\s/g, '')}
                                maxLength={10}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Ciudad</label>
                            <input type="text"
                                className="form-control"
                                name="ciudad"
                                value={ciudad.replace(/\s/g, '').replace(/[0-9]/g, '').replace(/\s/g, '')}
                                maxLength={10}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                    </div>
                    :
                    <div>

                    </div>
            }
        </div>
    )
}
