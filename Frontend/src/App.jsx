import { Component, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Card from './components/Card'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Login from './components/Login';
import Menu from './components/Menu';
import Register from './components/Register';
import Cart from './components/Cart';
import Order from './components/Order';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<Order/>}/>
      </Routes>
      <div id='Home'> <Welcome /> </div>
      <Card />
      <div id='About'><About /> </div>
      <div id='Contact'> <Contact />
      </div>

      <Footer />
    </>
  )
}

export default App
