import { CartContext } from '../Context/CartProvider';
import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "../utils/firebase";


export const useForm = (initialForm) => {

    const { carrito, totalSuma } = useContext(CartContext);

    const [orderForm, setOrderForm] = useState(initialForm);

    const { nombre, apellido, dni, email, ciudad } = orderForm;


    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setOrderForm({
            ...orderForm,
            [name]: value,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        const order = {
            comprador: {
                ...orderForm,
            },
            items: carrito,
            total: totalSuma(),
        }
        const queryRef = collection(dataBase, "orders");
        addDoc(queryRef, order);
    }

    return {
        orderForm,
        onInputChange,
        submitForm,
    }
}
