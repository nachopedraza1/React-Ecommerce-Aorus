import { useEffect, useState } from "react";
import { Item } from "./Item";
import "../Main/ItemListContainer.scss"
import { getData } from "../Helpers/GetData";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  const { categoryId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      getData()
        .then(productos => {
          const itemCategory = productos.filter(producto => producto.categoria == categoryId);
          setProductos(itemCategory);
        });
    }, 2000);
  }, [categoryId])



  return (
    <div className="container flex-custom justify-content-center p-0">
      {productos.map(producto => {
        return <Item item={producto} key={producto.id} />
      })}
    </div>
  )
}
