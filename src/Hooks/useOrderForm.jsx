import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartProvider";
import { alertError, alertSubmit } from "../utils/alerts";
import { dataBase } from "../utils/firebase";

export const useOrderForm = () => {

    const { carrito, vaciarCarrito } = useContext(CartContext);

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

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (validationForm()) {
            vaciarCarrito();
            setStep(2)
            alertSubmit(setStep)
            const order = {
                cliente: {
                    ...formData,
                },
                items: {
                    ...carrito
                }
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
    }
}
