import { useEffect, useState } from "react";
import { Item } from "./Item";
import "../Main/ItemListContainer.scss"
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductosProvider";
import { Filter } from "./Filter";

export const ItemListContainer = () => {

  const getProductos = useProductsContext();

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const item = getProductos.filter(producto => producto.categoria == categoryId);
    setProductos(item);
  }, [categoryId])

  return (
    <div className="container-items pt-4">
      <h1 className="pt-5 text-center text-danger f-ars">{categoryId}</h1>
      <Filter />
      <div className="container flex-custom justify-content-center p-0">
        {
          productos.map(producto => {
            return <Item item={producto} key={producto.id} />
          })
        }
      </div>
    </div>
  )
}
