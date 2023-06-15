import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Store from './components/Pages/Store'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Cart from './components/Pages/Cart'
import CartContextProvider from '../store/CartContextProvider'
import Footer from './components/Pages/Footer'
import Contact from './components/Pages/Contact'
import ProductDetails from './components/Pages/ProductDetails'

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/store' exact element={<Store />}></Route>
        <Route path='/store/:id' exact element={<ProductDetails />}></Route>
        <Route path='/about' exact element={<About />}></Route>
        <Route path='/contact' exact element={<Contact />}></Route>
        </Routes>
        <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
