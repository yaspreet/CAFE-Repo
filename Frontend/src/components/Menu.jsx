import React from 'react'
import { Link } from 'react-router-dom'
 function Menu() {
   return (
    <div className='menu   fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm  bg-opacity-50 z-50'>
       <div className=' h-[550px] w-[80%] bg-[#000000c7] text-white  m-2  overflow-auto  scrollbar-none  '>
        <Link to="/Home"><img className=' invert float-right p-2' src="cancel.svg" alt="" /></Link>
{/* //         <div className='m-5'>
//           <h1 className='text-white text-[50px] flex flex-row justify-center'> Coffee</h1>
//           <div className='flex  flex-col justify-between mx-20 bg-[#758694] p-8'>
//           <h1 className='items-center text-[30px] m-3   '>Hot Coffee</h1>
//             <div className='flex flex-row items-start gap-5 overflow-auto h-[150px] scrollbar-none bg-[#405D72] p-5 mx-3 rounded-[20px]'>
//               <span > Hot Coffee</span>
//               <span>Choclate Coffee</span>
//               <span>Strong Coffee</span>
//               <span>Strong Choclate Coffee</span>
//               <span>Black Coffee</span>
//               <span>RUM Coffee</span>
//               <span>Whisky Coffee</span>
//               <span>VODKA Coffee</span>
//               <span>SCOTH Coffee</span>
//               <span>BEER Coffee </span>
//               <span>Red WINE Coffee</span>
//               <span>Brandy Coffee</span>
//             </div>
//               <h1 className='text-[30px] m-3 '>Cold Coffee </h1>
//             <div className='flex flex-row items-start gap-5 overflow-auto h-[150px] scrollbar-none bg-[#405D72] p-5 mx-3 rounded-[20px]'>
//               <span>Cold Coffee</span>
//               <span>Strong Cold Coffee</span>
//               <span>Cold Coffee With ICE Cream</span>
//               <span>Choclate Cold Coffee</span>
//               <span>Choclate Cold Coffee With ICE Cream</span>
//               <span>Strong Choclate Cold Coffee</span>
//               <span>Beer Cold Coffee</span>
//               <span>Brandy Cold Coffee</span>
//               <span>RED WINE Cold Coffee</span>
//               <span>RUM Cold Coffee</span>
//               <span>Vodka Cold Coffee</span>
//               <span>Whisky Cold Coffee</span>
//               <span>SCOTH Cold Coffee </span>
//               <span>Black Cold Coffee</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Menu */}




    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-coffee-dark">Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-coffee-light rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-coffee-dark  uppercase">Milk Shakes</h2>
          <ul>
            {[
              "Oreo Shake - ₹70 / ₹110",
              "Caramel Shake - ₹70 / ₹110",
              "KitKat Shake - ₹70 / ₹110",
              "Chocolate Shake - ₹70 / ₹110",
              "Brownie Shake - ₹90 / ₹130",
              "Peanut Butter Shake - ₹70 / ₹100",
              "Strawberry Shake - ₹60 / ₹90",
              "Mango Shake - ₹60 / ₹90",
              "Guava Shake - ₹60 / ₹90",
              "Butter Soth Shake - ₹60 / ₹90",
              "Litchi Shake - ₹60 / ₹90",
              "Sitafal Shake - ₹80 / ₹110",
              "Pineapple Shake - ₹60 / ₹90",
              "Kiwi Shake - ₹60 / ₹90",
              "Blueberry Shake - ₹80 / ₹110",
              "Orange Shake - ₹60 / ₹90",
              "Khus Shake - ₹60 / ₹90",
              "Banana Shake - ₹60 / ₹90",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-coffee-light rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Hot Coffee</h2>
          <ul>
            {[
              "Hot Coffee - ₹40 / ₹80",
              "Chocolate Coffee - ₹50 / ₹100",
              "Strong Coffee - ₹50 / ₹100",
              "Strong Chocolate Coffee - ₹60 / ₹120",
              "Black Coffee - ₹40 / ₹80",
              "Rum Coffee - ₹50 / ₹100",
              "Whiskey Coffee - ₹50 / ₹100",
              "Vodka Coffee - ₹50 / ₹100",
              "Scotch Coffee - ₹50 / ₹100",
              "Beer Coffee - ₹50 / ₹100",
              "Red Wine Coffee - ₹50 / ₹100",
              "Brandy Coffee - ₹50 / ₹100",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
        </div>
     
        <div className="bg-coffee-light rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Cold Coffee</h2>
          <ul>
            {[
              "Cold Coffee - ₹50 / ₹80",
              "Strong Cold Coffee - ₹60 / ₹90",
              "Cold Coffee with Ice Cream - ₹70 / ₹100",
              "Chocolate Cold Coffee - ₹60 / ₹90",
              "Chocolate Cold Coffee with Ice Cream - ₹80 / ₹110",
              "Strong Chocolate Cold Coffee - ₹70 / ₹100",
              "Beer Cold Coffee - ₹80 / ₹120",
              "Brandy Cold Coffee - ₹80 / ₹120",
              "Red Wine Cold Coffee - ₹80 / ₹120",
              "Rum Cold Coffee - ₹80 / ₹120",
              "Vodka Cold Coffee - ₹80 / ₹120",
              "Whiskey Cold Coffee - ₹80 / ₹120",
              "Scotch Cold Coffee - ₹80 / ₹120",
              "Black Cold Coffee - ₹40 / ₹60",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
        </div>
       
        <div className="bg-coffee-light rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Chai</h2>
          <ul>
            {[
              "Chocolate Chai - ₹25 / ₹50",
              "Elaichi Chai - ₹30 / ₹60",
              "Kadak Chai - ₹25 / ₹50",
              "Kesari Chai - ₹25 / ₹50",
              "Gur Masala Chai - ₹40 / ₹80",
              "Masala Chai - ₹30 / ₹60",
              "Paan Chai - ₹25 / ₹50",
              "Rose Chai - ₹25 / ₹50",
              "Adrak Chai - ₹25 / ₹50",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-coffee-light rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Ice Crush</h2>
          <ul>
            {[
              "Strawberry - ₹40 / ₹70",
              "Chocolate - ₹40 / ₹70",
              "Butter Soth - ₹40 / ₹70",
              "Kiwi - ₹40 / ₹70",
              "Guava - ₹40 / ₹70",
              "Banana - ₹40 / ₹70",
              "Orange - ₹40 / ₹70",
              "Pineapple - ₹40 / ₹70",
              "Litchi - ₹40 / ₹70",
              "Mango - ₹40 / ₹70",
              "Blueberry - ₹50 / ₹80",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-coffee-light rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Hot Lemon Tea</h2>
          <ul>
            {["Lemon Tea - ₹20", "Lemon Honey Tea - ₹25"].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
          </div>
         <div className='p-4'>
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Mojito</h2>
          <ul>
            {[
              "Green Apple - ₹80",
              "Paan - ₹80",
              "Peach - ₹80",
              "Spicy Mango - ₹80",
              "Watermelon - ₹80",
              "Virgin Mojito - ₹80",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
          </div>
          <div className='p-4'>
          <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Masala &nbsp; Lemonade</h2>
          <ul>
            {[
              "Green Mint - ₹70",
              "Kiwi - ₹70",
              "Litchi - ₹70",
              "Orange - ₹70",
              "Pineapple - ₹70",
              "Strawberry - ₹70",
              "Masala Lime Soda - ₹70",
            ].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
          </div>
          <div className='p-4'>          
            <h2 className="text-xl font-bold mb-4 text-coffee-dark uppercase">Ice Tea</h2>
          <ul>
            {["Ice Tea - ₹70", "Lemon Mint Ice Tea - ₹80"].map((item, index) => (
              <li key={index} className="mb-2 text-coffee-text hover:text-coffee-hover">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
     </div>
  );
}

export default Menu;
