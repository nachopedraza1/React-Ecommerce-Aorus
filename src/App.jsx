import './App.scss'
import { NavBar } from './components/Header/NavBar'
import { Slider } from './components/Header/Slider'
import { ItemListContainer } from './components/Main/ItemListContainer'
import { useState } from 'react'

export const App = () => {

  return (
    <>
      <header>
        <NavBar />
        <Slider />
      </header>

      <main>
        <ItemListContainer productos={"Productos"} />
      </main>
    </>
  )
}

