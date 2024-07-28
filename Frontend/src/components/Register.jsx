import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:9000/user/register', formData)
      .then((response) => {
        console.log(response);
        alert("You Are Registered")
        setIsRegistered(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-screen  fixed inset-0  backdrop-filter backdrop-blur-sm bg-opacity-50 bg-gray-900 z-50">
      <form
        className="bg-[#f7f3f1a9] px-8 pb-5  rounded-[25px]  p-6  shadow-md  max-w-sm"
        onSubmit={handleSubmit}
      >
        <button
          onClick={onClose}
          className="relative   float-right text-gray-600 hover:text-gray-800 "
        >
          <Link to="/Home">
            <img src="cancel.svg" alt="" />
          </Link>
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[250px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[250px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[250px] px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {isRegistered ? (
          <Link
            to="/Login"
            className="w-[200px] bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex justify-center items-center m-auto "
          >
            Go to Login
          </Link>
        ) : (
          <button
            type="submit"
            className="w-[200px] bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center m-auto "
          >
            Register
          </button>
        )}
      </form>
    </div>
  );
}

export default Register;