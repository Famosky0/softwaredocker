import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    phoneNumber: '',
    age: '',
    email: '',
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      const data = await response.json();
      if (response.ok) {
        navigate('/login'); // Redirect to login after successful registration
      } else {
        alert(data.message); // Show error message from server
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };
  return (
    <div className="signup-page flex flex-col items-center justify-center min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-30 bg-black w-full h-full absolute z-0" />
      <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-lg relative z-10" onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold text-center mb-6">Register</h3>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Names</h3>
          <div className="grid grid-cols-2 gap-4">
            <input className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" name="firstName" value={userData.firstName} onChange={handleChange} required />
            <input className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" name="lastName" value={userData.lastName} onChange={handleChange} required />
          </div>
        </div>
        {/* Location Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Address" name="address" value={userData.address} onChange={handleChange} required />
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" id="country" type="text" placeholder="Country" name="country" value={userData.country} onChange={handleChange} required />
        </div>
        {/* Contact Section */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" type="text" placeholder="Phone Number" name="phoneNumber" value={userData.phoneNumber} onChange={handleChange} required />
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" id="age" type="number" placeholder="Age" name="age" value={userData.age} onChange={handleChange} required />
        </div>
        {/* Login Details Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Login Details</h3>
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" value={userData.email} onChange={handleChange} required />
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2" id="username" type="text" placeholder="Username" name="username" value={userData.username} onChange={handleChange} required />
          <input className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-2" id="password" type="password" placeholder="Password" name="password" value={userData.password} onChange={handleChange} required />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
