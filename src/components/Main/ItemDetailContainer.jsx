import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../Helpers/GetData";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

  const [itemDetail, setItemDetail] = useState([]);

  const { detailId } = useParams();
  console.log(detailId);

  useEffect(() => {
    setTimeout(() => {
      getData()
        .then(itemDetalle => {
          const item = itemDetalle.filter(item => item.id == detailId);
          setItemDetail(item);
        });
    }, 2000);
  }, [detailId])


  return (
    <div>
      {
        itemDetail.map(producto => {
          return <ItemDetail item={producto} />
        })
      }
    </div>
  )
}

