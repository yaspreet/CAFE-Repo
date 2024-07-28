import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
const Login = ({ onClose}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginData, setloginData] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9000/user/login",loginData)
    .then((Response)=>{console.log(Response);
      alert('You Are Logged In');
    }).catch((err)=>{console.log(err)})
   
    // Reset form fields
    // setUsername('');
    // setPassword('');
    // document.querySelector(".login-btn").innerHTML= "Logout"
    
  };

  
  return (
    <div className=" login-page fixed inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50 bg-gray-900 z-50 "> 
      <div className="bg-[#f7f3f1bf] px-8 py-2 pb-5  rounded-[25px] ">
        <button
          onClick={onClose}
          className="relative float-right top-2  text-gray-600 hover:text-gray-800 ">
        <Link to="/Home"><img  src="cancel.svg" alt="" /></Link>
        </button>
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Sign in</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username/Email
            </label>
            <input type="text" required
              className="mt-1  w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input id="password" name="password" type="password" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mt-6">
            <button  onClick={onClose}
              type="submit"
              className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 font-bold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            > <Link to ='/Home'> Sign in </Link>
            </button>
          </div>
        </form>
        <Link to='/Register' className='text-[13px] font-serif font-semibold float-right mt-3 p-0'>Create new Account</Link>    
         </div>
    </div>
  );
};

export default Login;
