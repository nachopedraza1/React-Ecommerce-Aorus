import './App.scss'
import { NavBar } from './components/Header/NavBar'
import { Slider } from './components/Header/Slider'
import { ItemListContainer } from './components/Main/ItemListContainer'
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/Main/ItemDetailContainer';
import { ProductosProvider } from './Context/ProductosProvider';
import { CartProvider } from './Context/CartProvider';
import { CartContainer } from './components/Main/CartContainer';

export const App = () => {

  return (
    <>
      <ProductosProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Slider />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/categoria/:categoryId/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </CartProvider>
      </ProductosProvider>
    </>
  )
}
