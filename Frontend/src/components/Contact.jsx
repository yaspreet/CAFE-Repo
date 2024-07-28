import React from 'react'

function Contact() {
    return (
        <div className='bg-[#7f4f24] p-10'>
            <div className=" h-[200px]  flex flex-col gap-5 text-white justify-center items-center bg-[url('Coffeemade.png')] object-contain  bg-[0px]   mx-1 rounded-2xl max-sm:h-[250px] max-sm:object- max-sm:bg-[-700px]" >
                <p className='font-bold text-2xl max-sm:mx-5'>Contact us to get 50% discount price</p>
                <div   className= "  h-[50px]  gap-1 rounded-[20px] flex  max-sm:flex-col"    >
                    <input className='p-2 h-[50px] w-[250px] font-semibold 
                rounded-[20px] text-black max-sm:my-2' type='email' placeholder='Email address' />
                <button className='px-3 py-1 h-[45px] 
                font-semibold rounded-[18px] bg-red-600  max-sm:w-[105px] max-sm:m-auto'>order now</button>
                </div> 
            </div>
        </div>
    )
}

export default Contact
