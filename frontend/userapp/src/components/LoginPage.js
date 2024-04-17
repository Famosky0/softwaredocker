import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Save the token
        navigate('/userinfo'); // Redirect to user info page on successful login
      } else {
        alert(data.message); // Show error message from server
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <div className="login-page flex flex-col items-center justify-center min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}>
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-30 bg-black w-full h-full absolute z-0" />
      <form className="bg-white shadow-lg rounded-lg px-10 pt-8 pb-8 mb-4 w-full max-w-md relative z-10" onSubmit={handleLogin}>
        <div className="mb-6">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name="username" value={credentials.username} onChange={handleChange} />
        </div>
        <div className="mb-8">
          <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" value={credentials.password} onChange={handleChange} />
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline" type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
