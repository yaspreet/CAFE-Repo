import React from 'react'
function About() {
  return (
    <div id='About' className='About  bg-[#7f4f24] p-5'>
      <div className='p-12 rounded-[25px] bg-[#423b27] my-3 mx-32 flex gap-[100px] max-sm:flex-col max-sm:w-auto max-sm:mx-auto max-sm:gap-[0px]'>
   <div><img className='h-[300px] w-[250px] rounded-[25px] border-zinc-800 border-[3px] hover:scale-105 transition-all ease-in-out hover:border-none max-sm:mx-auto' src="Coffee.png" alt="" /></div>
    <div className='mt-16 max-sm:mt-5'>
        <h1 className='text-[30px] font-medium'>About <span className='text-amber-600'>us</span></h1>
        <p className='text-[20px] w-[250px]'>We provide quality drinks, just order and taste it.</p>
        <p className='w-[350px] text-black font-medium max-sm:w-auto'>We are a compony that makes and distributes deleicious drinks. our main product is made with a secret recipe. just order what you want to drink and enjoy</p>
    </div>
      </div>
    </div>
  )
}

export default About
