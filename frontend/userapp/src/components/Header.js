import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom

const NavigationBar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><a href="http://3.17.65.244/" target="_blank" rel="noopener noreferrer">My Profile</a></li>
        <li><a href="http://3.135.62.147 " target="_blank" rel="noopener noreferrer">Inventory</a></li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
