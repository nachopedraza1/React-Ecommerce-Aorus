import "../Main/ItemListContainer.scss"
import { useEffect, useState } from "react";
import { Item } from "./Item";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductosProvider";
import { Filter } from "./Filter";
import { Preloader } from "./Preloader";
import { OwlCategories } from "./OwlCategories";

export const ItemListContainer = () => {

  const getProductos = useProductsContext();

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const item = getProductos.filter(producto => producto.categoria == categoryId);
    setProductos(item);
  }, [categoryId])

  const onFilter = (marca) => {
    const productsFilter = getProductos.filter(producto => producto.categoria == categoryId && producto.fabricante == marca);
    setProductos(productsFilter);
  }


  return (
    <>
      <Preloader />
      <OwlCategories />
      <div className="container-items container-xl mx-auto pt-4 row">
        <div>
          <h3 className="pt-5 m-0 text-center text-danger f-ars">{categoryId.toUpperCase()}</h3>
          <div className="div-line mb-3">
            <span className="div-line__one"><img src="../img/pattern-2.svg" alt="" /></span>
            <span className="div-line__two"><img src="../img/pattern-1.svg" alt="" /></span>
          </div>
        </div>
        <Filter onFilter={onFilter} totalItems={productos.length} />
        <div className="container flex-custom justify-content-between justify-content-lg-end p-0 col-lg-8">
          {
            productos.map(producto => {
              return <Item item={producto} key={producto.id} />
            })
          }
        </div>
      </div>
    </>
  )
}
