import { useState } from "react";

export const useForm = (initialForm) => {

    const [orderForm, setOrderForm] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setOrderForm({
            ...orderForm,
            [name]: value,
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
    }

    return {
        orderForm,
        onInputChange,
        onSubmitForm,
    }
}
