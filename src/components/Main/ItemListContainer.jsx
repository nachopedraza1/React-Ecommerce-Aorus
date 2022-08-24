import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
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
    getData()
      .then(newProducts => setProductos(newProducts));
  }, [])

  const [productos, setProductos] = useState([])

  return (
    <div className="flex-custom justify-content-center p-0">
      {productos.map(producto => {
        return <ProductCard producto={producto} />
      })}
    </div>
  )
}
