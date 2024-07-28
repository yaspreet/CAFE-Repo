import React from 'react'
function Welcome() {
  return (
    <div className='flex  justify-between  bg-[#7f4f24] px-28 py-10 text-white max-sm:px-2 max-sm:flex-col'>
     <div className='bg-[#7f4f24] w-[325px] max-sm:mx-auto max-sm:m-2 '> 
        <div className="font-medium text-4xl gap-2 leading-[50px] text-start max-sm:text-[32px]">
        Enjoy your <span className='text-[#2b2d42]'>Coffee/Tea </span><br/>
        before your activity
      </div>
      <div className='w-[500px] text-lg text-gray-300 text-start max-sm:w-auto'>
        Boost your Productivity and build your 
        mood with a glass of coffee or tea in the morning 
      </div>
     <a href="https://www.swiggy.com/cafe-coffee-day-near-me"> <button className=' order-btn mt-3 cursor-pointer flex gap-1 justify-center px-8 py-2 rounded-2xl bg-zinc-800 hover:scale-[1.05] transition-all text-white font-bold' >order now <img className='h-5' src="cart.svg" alt="" /> </button></a>
      </div>
      <img className='coffee-img rounded-[5%]  h-[300px] w-[330px] hover:scale-[1.1] transition-all hover:border-white hover:border-[2px] ease-in-out max-sm:h-56 max-sm:w-56 max-sm:mx-auto max-sm:mt-14 max-sm:my-3' src="C.png" alt="" />

    </div>
  )
}

export default Welcome
