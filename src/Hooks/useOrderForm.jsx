import { useContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { CartContext } from "../Context/CartProvider";
import { alertError, alertSubmit } from "../utils/alerts";
import { dataBase } from "../utils/firebase";

export const useOrderForm = () => {

    const { carrito, totalSuma, vaciarCarrito } = useContext(CartContext);

    const [invoice, setInvoice] = useState();

    const [step, setStep] = useState(0);

    const [formData, setFormData] = useState({
        nombre: "",
        dni: "",
        email: "",
        telefono: "",
        tipoEnvio: "",
        postalCode: "",
        calle: "",
        numeroCalle: "",
        provincia: "",
        ciudad: "",
        nameOnCard: "",
        cardNumber: "",
        expirationYear: "",
        expirationMonth: "",
        cvv: "",
    });

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const validationForm = () => {
        const inputsValues = [];
        Array.from(document.querySelectorAll(".form-control")).forEach(input => {
            inputsValues.push(input.value)
        })
        if (inputsValues.includes("")) {
            alertError();
            return false;
        } else {
            setStep(step + 1);
            return true;
        }
    }

    const {
        nombre,
        dni,
        email,
        telefono,
        tipoEnvio,
        postalCode,
        calle,
        numeroCalle,
        provincia,
        ciudad, } = formData;

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (validationForm()) {
            setStep(2)
            alertSubmit(setStep, vaciarCarrito)
            const order = {
                cliente: {
                    nombre,
                    dni,
                    email,
                    telefono,
                },
                envio: {
                    tipoEnvio,
                    postalCode,
                    calle,
                    numeroCalle,
                    provincia,
                    ciudad,
                },
                items: [...carrito],
                total : totalSuma()
            }

            const queryRef = collection(dataBase, "orders")
            addDoc(queryRef, order).then(resp => {
                setInvoice({
                    id: resp.id,
                    ...order
                })
            })
        }
    }

    return {
        step,
        setStep,
        formData,
        onInputChange,
        validationForm,
        onSubmitForm,
        invoice,
    }
}
