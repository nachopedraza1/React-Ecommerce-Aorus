import '../Main/FormPayment.scss'
import { useEffect, useState } from 'react';

export const FormPayment = ({ formData, onInputChange, onSubmitForm }) => {

  const { nameOnCard, cardNumber, expirationYear, expirationMonth, cvv } = formData;

  const [stateCard, setStateCard] = useState(false);

  const onClickCard = () => {
    setStateCard(!stateCard)
  }

  const cardClass = stateCard ? "active" : "";

  useEffect(() => {
    let formulario = document.getElementById("formulario-tarjeta");

    for (let i = 1; i <= 12; i++) {
      let opcion = document.createElement("option");
      opcion.value = i;
      opcion.innerText = i;
      formulario.selectMes.append(opcion);
    }

    const yearActual = new Date().getFullYear();
    for (let i = yearActual; i <= yearActual + 8; i++) {
      let opcion = document.createElement("option");
      opcion.value = i;
      opcion.textContent = i;
      formulario.selectYear.append(opcion);
    }
  }, []);


  return (
    <div className='col-12 col-lg-7'>
      <div className={`tarjeta col-12 col-sm-10 col-md-9 col-lg-6 col-xl-4 mx-auto ${cardClass}`} onClick={onClickCard}>
        <div className="delantera">
          <div className="logo-marca" id="logo-marca">
            {cardNumber[0] <= 4 && <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/visa.png?alt=media&token=c3c8ec06-4c80-4264-81fb-b869beb8e2ee" alt="" />}
            {cardNumber[0] >= 5 && <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/mastercard.png?alt=media&token=4f86729f-4ed4-473a-84da-7167e5b90de6" alt="" />}
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/aorus-ecommerce-app.appspot.com/o/chip-tarjeta.png?alt=media&token=4f40bc1b-b913-449f-aecd-645a64f030a3" className="chip" alt="" />
          <div className="datos">
            <div className="grupo" >
              <p className="m-0 label">Número Tarjeta</p>
              <p className="m-0 numero"> {cardNumber == "" ? "#### #### #### ####" : cardNumber} </p>
            </div>
            <div className="flexbox">
              <div className="grupo">
                <p className="m-0 label">Nombre Tarjeta</p>
                <p className="m-0 nombre">{nameOnCard == "" ? "----------------------" : nameOnCard}</p>
              </div>
              <div className="grupo">
                <p className="m-0 label">Expiracion</p>
                <p className="m-0 expiracion"><span className="mes"> {expirationMonth.length == 0 ? "AA" : expirationMonth} </span> / <span
                  className="year"> {expirationYear == "" ? "AA" : expirationYear} </span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="trasera">
          <div className="barra-magnetica"></div>
          <div className="datos">
            <div className="grupo" id="firma">
              <p className="label">Firma</p>
              <div className="firma">
                <p> {nameOnCard} </p>
              </div>
            </div>
            <div className="grupo" id="ccv">
              <p className="m-0 label">CVV</p>
              <p className="m-0 ccv"> {cvv} </p>
            </div>
          </div>
          <p className="m-0 leyenda">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus exercitationem.</p>
          <a href="#" className="link-banco">www.tubanco.com</a>
        </div>
      </div>
      <form className="formulario-tarjeta col-12 col-sm-10 col-md-9 col-lg-6 col-xl-4" id="formulario-tarjeta">
        <div className="grupo">
          <label>Número Tarjeta</label>
          <input
            className='form-control'
            type="text"
            maxLength="19"
            autoComplete="off"
            name='cardNumber'
            value={cardNumber.replace(/\s/g, '').replace(/\D/g, '').replace(/([0-9]{4})/g, '$1 ').trim()}
            onChange={(e) => onInputChange(e)}
            onClick={() => setStateCard(false)}
          />
        </div>
        <div className="grupo">
          <label >Nombre</label>
          <input
            className='form-control'
            type="text"
            maxLength={22}
            autoComplete="off"
            name='nameOnCard'
            value={nameOnCard.replace(/[0-9]/g, '')}
            onChange={(e) => onInputChange(e)}
            onClick={() => setStateCard(false)}
          />
        </div>
        <div className="flexbox">
          <div className="grupo expira">
            <label >Expiracion</label>
            <div className="flexbox">
              <div className="grupo-select">
                <select
                  className='form-control'
                  name="expirationMonth"
                  defaultValue={""}
                  id="selectMes"
                  onChange={(e) => onInputChange(e)}
                  onClick={() => setStateCard(false)}>
                  <option disabled value="">Mes</option>

                </select>
                <i className="text-danger fas fa-angle-down"></i>
              </div>
              <div className="grupo-select">
                <select
                  className='form-control'
                  name="expirationYear"
                  defaultValue={""}
                  id="selectYear"
                  onChange={(e) => onInputChange(e)}
                  onClick={() => setStateCard(false)}>
                  <option disabled value="">Año</option>

                </select>
                <i className="text-danger fas fa-angle-down"></i>
              </div>
            </div>
          </div>

          <div className="grupo ccv">
            <label >CVV</label>
            <input
              className='form-control'
              type="text"
              maxLength={3}
              name='cvv'
              value={cvv.replace(/\D/g, '').trim()}
              onChange={(e) => onInputChange(e)}
              onClick={() => setStateCard(true)}
            />
          </div>
        </div>
        <button type="submit" className="btn-pagar f-pri" onClick={(e) => onSubmitForm(e)}>PAGAR</button>
      </form>
    </div>
  )
}
