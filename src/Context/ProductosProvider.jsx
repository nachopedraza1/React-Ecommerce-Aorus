import { useEffect, useState, createContext, useContext } from "react"
import { getData } from "../Helpers/GetData";

const ProductosContext = createContext();

export function useProductsContext (){
    return useContext(ProductosContext)
}


export const ProductosProvider = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getData()
            .then(producto => setProductos(producto));
    }, [])


    return (
        <ProductosContext.Provider value={productos}>
            {props.children}
        </ProductosContext.Provider>
    )
}
