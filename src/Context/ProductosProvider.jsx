import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, createContext, useContext } from "react"
import { dataBase } from "../utils/firebase";

const ProductosContext = createContext();

export function useProductsContext() {
    return useContext(ProductosContext)
}

export const ProductosProvider = (props) => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const query = collection(dataBase, "items");
            const response = await getDocs(query);
            const docs = response.docs;
            const productos = docs.map(doc => { return { id: doc.id, ...doc.data() } });
            setProductos(productos);
        }
        getData();
    }, [])

    return (
        <ProductosContext.Provider value={productos}>
            {props.children}
        </ProductosContext.Provider>
    )
}
