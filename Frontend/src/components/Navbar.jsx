import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar =({user})=>{ 

  return (

    <nav className="navbar  flex bg-[#582f0e] text-white p-5 gap-5  justify-betweenitems-center sticky top-0 z-50">

      <div className="navbar-header flex">
        <a className="navbar-brand font-bold text-2xl flex gap-2 w-[200px]" href="#"><img className='h-8 ' src="cup.svg" alt="" />Chai-Coffee</a>
      </div>
      <ul className="nav navbar-nav flex gap-10 ml-10 font-medium max-sm:relative max-sm:hidden">

        <li className="active  hover:text-[#c2c5aa]">
          <a href="#">Home</a></li>

        <li className="active  hover:text-[#c2c5aa]">
          <a href="#About">About</a></li>
        <li className="active  hover:text-[#c2c5aa]">
          <a href="#Contact">Contact</a></li>
        <li className="active  hover:text-[#c2c5aa]">
          <Link to="/Menu">Menu</Link></li>
      </ul>
      <form className="navbar-form navbar-left flex  absolute right-5  gap-3 justify-center items-center max-sm:invisible" action="get">
        {/* <div className="form-group">
        </div> */}
        <div className='font-bold text-lg flex gap-2'>Contact us : <a href="https://wa.me/8427421026
">+91 847421026</a></div>
        <Link to='/Cart'> <img className='ml-[10px] max-sm:visible' src="cart.svg" alt="" /></Link>
        
      {
        !user ?<Link to="/Login" className="logout-btn bg-red-600 px-2 py-1 justify-center font-bold rounded-md hover:bg-red-900 max-sm:visible">Log In</Link>: <button className="logout-btn bg-red-600 px-2 py-1 justify-center font-bold rounded-md hover:bg-red-900 max-sm:visible">Log Out</button>
      }
    </form>
    </nav>
  )
}

export default Navbar
