import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { useProductsContext } from "../../Context/ProductosProvider";

export const ItemDetailContainer = () => {

  const getProductos = useProductsContext();

  const [itemDetail, setItemDetail] = useState([]);

  const { detailId } = useParams();

  useEffect(() => {
    const item = getProductos.filter(producto => producto.nombre == detailId);
    setItemDetail(item);
  }, [detailId])


  return (
    <div className="pt-4">
      {
        itemDetail.map(producto=>{
          return <ItemDetail producto={producto} key={producto.id} />
        })
      }
    </div>
  )
}

