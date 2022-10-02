import { useOrderForm } from "../../Hooks/useOrderForm"

export const FormPayment = ({ formPayment, setFormPayment }) => {

  const { nameOnCard, cardNumber, expiration, cvv } = formPayment;

  return (
    <div >
      <div className="col-md-4">
        <label className="form-label">Numero de Tarjeta</label>
        <input type="text"
          className="form-control"
        />
      </div>
    </div>
  )
}
