import { useEffect, useState } from "react";
import { Item } from "./Item";
import "../Main/ItemListContainer.scss"

const getData = async () => {
  const resp = await fetch("./src/data/productos.json");
  const { data } = await resp.json();
  const producto = data.map(producto => ({
    id: producto.id,
    nombre: producto.nombre,
    categoria: producto.categoria,
    cantidad: producto.cantidad,
    precio: producto.precio,
    marca: producto.marca,
    img: producto.img
  }))
  return producto;
}


export const ItemListContainer = () => {

  useEffect(() => {
    setTimeout(() => {
      getData()
        .then(newProducts => setProductos(newProducts));
    }, 2000);
  }, [])

  const [productos, setProductos] = useState([])

  return (
    <div className="flex-custom justify-content-center p-0">
      {productos.map(producto => {
        return <Item item={producto} key={producto.id} />
      })}
    </div>
  )
}
