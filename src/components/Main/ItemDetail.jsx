import { ItemCount } from "./ItemCount"

export const ItemDetail = ( {item} ) => {

    const onAdd = (itemCount) => {
        console.log(itemCount);
    }

    return (
        <div>
            <img src={item.img} alt="" width="30%" />
            <h1> {item.nombre} </h1>
            <h1> Cantidad Disponible: {item.cantidad} </h1>
            <ItemCount cantidad={item} onAdd={onAdd} />
        </div>
    )
}
