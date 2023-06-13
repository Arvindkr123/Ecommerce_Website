import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Store from './components/Pages/Store'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Cart from './components/Pages/Cart'
import CartContextProvider from '../store/CartContextProvider'

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/store' exact element={<Store />}></Route>
        <Route path='/about' exact element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
