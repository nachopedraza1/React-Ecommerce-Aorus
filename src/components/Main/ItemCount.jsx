import { useState } from "react"
import { Link } from "react-router-dom";

export const ItemCount = ({ cantidad, onAdd}) => {
    const [itemCount, setItemCount] = useState(0);
    const onAddItem = () => {
        cantidad.cantidad > itemCount ? setItemCount(itemCount + 1) : null;
    }
    const onSubtItem = () => {
        itemCount > 0 ? setItemCount(itemCount - 1) : null;
    }

    return (
        <>
            <button className="d-flex justify-content-center">
                <i onClick={onAddItem} className="bi bi-plus-circle-fill px-3"></i>
                <span> {itemCount} </span>
                <i onClick={onSubtItem} className="bi bi-dash-circle-fill px-3"></i>
            </button>
            <button className="btn btn-primary" onClick={() => onAdd(itemCount)}>Añadir</button>
        </>
    )
}
