import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({}) => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    if (itemName.trim()) {
      setItems([...items, { name: itemName, quantity: 1 }]);
      setItemName('');
    }
  };

  const increaseQuantity = (index) => {
    const newItems = [...items];
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const decreaseQuantity = (index) => {
    const newItems = [...items];
    if (newItems[index].quantity > 1) {
      newItems[index].quantity -= 1;
    } else {
      newItems.splice(index, 1);
    }
    setItems(newItems);
  };

  const confirmOrder = () => {
    // alert(`Order confirmed: ${JSON.stringify(items)}`);
    // document.writeln(`Order confirmed: ${JSON.stringify(items)}`);
    console.log()
    setItems([]);
  };

  return (
    <div className=" flex flex-col items-center p-8 inset-0  justify-center backdrop-filter backdrop-blur-sm bg-opacity-50 bg-gray-900 z-50 absolute font-bold ">
      <button
        onClick={onclose}
        className="invert  float-right   text-gray-600 hover:text-gray-800 ">
        <Link to="/Home"><img src="cancel.svg" alt="" /></Link>
      </button>
      <div className="bg-[#f7f3f1bf] px-8 py-5 pb-5  rounded-[25px]  ">
        <Link to='/Order'  className='float-right relative top-1  cursor-pointer font-semibold '>Your Orders</Link>
        <h1 className="text-2xl font-bold mb-4">Food Cart</h1>
        <div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter food item"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          <button
            onClick={addItem}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="mb-1 flex justify-between items-center">
              <span>{item.name} </span>
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  -
                </button>
                <span>&nbsp;  {item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="ml-2 bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
        {items.length > 0 && (
          <button
            onClick={confirmOrder}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
          >
            Confirm Order
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
