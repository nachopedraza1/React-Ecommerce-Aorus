import { useState } from "react"

export const useOrderForm = () => {

    const [formClient, setFormClient] = useState({
        nombre: "",
        dni: "",
        email: "",
        telefono: "",
    });

    const [formShipping, setFormShipping] = useState({
        tipoEnvio: "",
        postalCode: "",
        calle: "",
        provincia: "",
        ciudad: ""
    });

    const [formPayment, setFormPayment] = useState({
        nameOnCard: "",
        cardNumber: "",
        expiration: "",
        cvv: "",
    });

    return {
        formClient,
        formShipping,
        formPayment,
        setFormClient,
        setFormShipping,
        setFormPayment,
    }
}
