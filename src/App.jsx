import './App.scss'
import { NavBar } from './components/Header/NavBar'
import { Slider } from './components/Header/Slider'
import { ItemListContainer } from './components/Main/ItemListContainer'
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from './components/Main/ItemDetailContainer';

export const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
        <Route path="/productos/:detailId" element={<ItemDetailContainer />} />
      </Routes>
    </>
  )
}
