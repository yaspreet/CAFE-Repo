import React from 'react'
import { Link } from 'react-router-dom'
// import {items} from './Cart'
function Order() {
  return (
    <div className=' flex flex-col items-center p-8 inset-0  justify-center backdrop-filter backdrop-blur-sm bg-opacity-50 bg-gray-900 z-50 absolute font-bold '>
    <button
        onClick={onclose}
        className="invert  float-right   text-gray-600 hover:text-gray-800 ">
        <Link to="/Home"> <img  src="cancel.svg" alt="" /> </Link>
      </button>
    <div  className='bg-white p-4 w-[300px] h-[300px] rounded-[20px] m-4'>
      <div className='text-center text-xl font-semibold'> Your Orders</div>

      <div>Item</div>
      </div>
    </div>
  )
}

export default Order
