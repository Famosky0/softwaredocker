import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Full Coverage Semi-Transparent Background */}
      <div 
        className="hero min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
          <div className="text-center text-white p-10">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-xl mb-4">This is the best place to manage your tasks efficiently.</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">Get Started</button>
          </div>
        </div>
      </div>

      {/* About Us Section with Increased Spacing */}
      <div className="about flex flex-col md:flex-row items-center md:justify-around p-10 bg-gray-100">
        <img src="https://source.unsplash.com/random/300x300" alt="About Us" className="w-full md:w-1/3 rounded-full mb-6 md:mb-0 md:mr-8"/>
        <div className="text-lg flex-1">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p>We offer the best solutions to manage and track your daily activities seamlessly. Our platform is designed to support individuals and teams looking for a better way to organize their schedules.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
