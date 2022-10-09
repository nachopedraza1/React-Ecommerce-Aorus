import './App.scss'
import { Routes, Route } from "react-router-dom";
import { ProductosProvider } from './Context/ProductosProvider';
import { CartProvider } from './Context/CartProvider';
import { Home } from './components/Main/Home';
import { NavBar } from './components/Header/NavBar';
import { CartContainer } from './components/Main/CartContainer';
import { ItemListContainer } from './components/Main/ItemListContainer'
import { ItemDetailContainer } from './components/Main/ItemDetailContainer';
import { Footer } from './components/Footer/Footer';

export const App = () => {

  return (
    <>
      <ProductosProvider>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
            <Route path="/categoria/:categoryId/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ProductosProvider>
    </>
  )
}
