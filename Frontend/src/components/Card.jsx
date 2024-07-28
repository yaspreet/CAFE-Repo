import React from 'react'
import { createBrowserRouter, Link } from 'react-router-dom'

function Card() {
   
    return (

        <div className='bg-[#7f4f24]  p-5'>
            <div className='font-bold text-white text-[35px] px-5'>What do you like to <span className='text-[#2f3022]'>drink</span> </div>
            <div className='text-slate-900 flex justify-between px-10  max-sm:pl-[0px] py-10 m-3 bg-[#423b27] max-sm:w-auto rounded-[25px] max-sm:overflow-scroll max-sm:gap-[22px]'>
                <div className="card bg-[#b6ad90] h-[250px]  w-[240px]  m-2 rounded-[8%] flex   justify-center  max-sm:mx-8">
                    <div className='max-sm:w-[250px] '><img className='h-[140px] w-[210px] m-2 rounded-[10px] hover:scale-[1.03] transition-all max-sm:mx-auto' src="coffee1.jpeg" alt="" />
                        <div className='flex justify-between mr-5'>
                            <h2 className='font-medium text-[22px] mx-3' >Coffee</h2> <img
                                className='invert   ' src="cup.svg" alt="" /></div>
                        <div className='mx-3 flex gap-2 my-2 text-orange-700 font-bold items-center'>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg px-2 py-1 border-orange-700' ><a href="https://www.swiggy.com/search?query=hot+coffee">Hot</a></button>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg px-2 py-1 border-orange-700'><a href="https://www.swiggy.com/search?query=Cold+Coffee">Cold</a></button>
                            <Link to="/Menu" className='bg-orange-600 text-white p-2 rounded-[15px] relative left-7 cursor-pointer   hover:bg-orange-900'>Show</Link>
                        </div>
                    </div>
                </div>

                <div className="card bg-[#b6ad90] h-[250px] w-[240px] m-2 rounded-[8%] flex justify-center max-sm:mx-8">
                    <div className='max-sm:w-[250px] '><img className='h-[140px] w-[210px] m-2 rounded-[10px] hover:scale-[1.03] transition-all max-sm:mx-auto' src="Shake.png" alt="" />
                        <div className='flex justify-between mr-5'>
                            <h2 className='font-medium text-[22px] mx-3' >Chilled Mood</h2> <img
                                className='invert   ' src="shake.svg" alt="" /></div>
                        <div className='mx-3 my-2 flex gap-2 text-orange-700 font-bold items-center'>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg px-2 py-1 border-orange-700' ><a href="https://www.swiggy.com/search?query=juices">Juice</a></button>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white   hover:border-white rounded-lg px-2 py-1 border-orange-700'><a href="https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2">Shakes</a></button>
                            <Link to="/Menu" className='bg-orange-600 text-white p-2 rounded-[15px] relative left-2 cursor-pointer   hover:bg-orange-900'>Show</Link>
                            </div>
                    </div>
                </div>

                <div className="card bg-[#b6ad90] h-[250px] w-[240px] m-2 rounded-[8%] flex justify-center max-sm:mx-8 ">
                    <div className='max-sm:w-[250px]'><img className='h-[140px] w-[210px] m-2 rounded-[10px] hover:scale-[1.03] transition-all max-sm:mx-auto' src="Tea1.png" alt="" />
                        <div className='flex justify-between mr-5'>
                            <h2 className='font-medium text-[22px] mx-3' >Tea/Chai</h2> <img
                                className='invert   ' src="cup.svg" alt="" /></div>
                        <div className='mx-3 my-2 flex gap-2 text-orange-700 font-bold items-center'>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg px-2 py-1 border-orange-700' ><a href="https://www.swiggy.com/collections/80493?collection_id=80493&tags=layout_CCS_Tea&type=rcv2">Hot</a></button>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg  px-2 py-1 border-orange-700'><a href="https://www.swiggy.com/search?query=ice+tea">Ice Tea</a></button>
                            <Link to="/Menu" className='bg-orange-600 text-white p-2 rounded-[15px] relative left-2 cursor-pointer   hover:bg-orange-900'>Show</Link>
                            </div>
                    </div>
                </div>

               
                <div className="card bg-[#b6ad90] h-[250px] w-[240px] m-2 rounded-[8%] flex justify-center max-sm:mx-8">
                    <div className='max-sm:w-[250px] '><img className='h-[140px] w-[210px] m-2 rounded-[10px] hover:scale-[1.03] transition-all max-sm:mx-auto' src="Mojito.png" alt="" />
                        <div className='flex justify-between mr-5'>
                            <h2 className='font-medium text-[22px] mx-3' >Mojito/Tails</h2> <img
                                className='invert   ' src="shake.svg" alt="" /></div>
                        <div className='mx-3 my-2 flex gap-2 text-orange-700 font-bold items-center'>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg px-2 py-1 border-orange-700' ><a href="https://www.swiggy.com/search?query=Mocktils">Mock..</a></button>
                            <button className='border-[3px] hover:bg-amber-700 hover:text-white  hover:border-white rounded-lg px-2 py-1 border-orange-700'><a href="https://www.swiggy.com/search?query=Mojitos">Mojito</a> </button>
                            <Link to="/Menu" className='bg-orange-600 text-white p-2 rounded-[15px] relative left-2 cursor-pointer   hover:bg-orange-900'>Show</Link>
                            </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Card
