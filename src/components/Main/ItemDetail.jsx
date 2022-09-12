import { ItemCount } from "./ItemCount";

export const ItemDetail = ( {producto} ) => {

    const onAdd = (itemCount) => {
        console.log(itemCount);
    }

    return (
        <div>
            <img src={producto.img} alt="" width="30%" />
            <h1> {producto.nombre} </h1>
            <h1> Cantidad Disponible: {producto.cantidad} </h1>
            <ItemCount cantidad={producto} onAdd={onAdd} />
        </div>
    )
}
