import { ItemCount } from "./ItemCount"

export const ItemDetail = ( {item} ) => {
    return (
        <div>
            <img src={item.img} alt="" width="30%" />
            <h1> {item.nombre} </h1>
           <ItemCount cantidad={item.cantidad}/>
        </div>
    )
}
