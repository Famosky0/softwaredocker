import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const UserInfoPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate(); // Hook to manage redirection

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if no token
        }

        const response = await fetch('http://localhost:3000/api/userinfo', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Ensure this is correctly formatted
          }
        });

        const data = await response.json();
        if (response.ok) {
          setUserInfo(data);
        } else {
          console.error('Error fetching user info:', data.message);
          if (response.status === 401) { // Handle unauthorized access
            navigate('/login');
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        navigate('/login');
      }
    };
  
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="container mx-auto p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 flex justify-between">
          <h1 className="text-3xl font-bold">User Information</h1>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            <p><strong>First Name:</strong> {userInfo.firstName}</p>
            <p><strong>Last Name:</strong> {userInfo.lastName}</p>
            <p><strong>Address:</strong> {userInfo.address}</p>
            <p><strong>Country:</strong> {userInfo.country}</p>
            <p><strong>Phone Number:</strong> {userInfo.phoneNumber}</p>
            <p><strong>Age:</strong> {userInfo.age}</p>
            <p><strong>Email:</strong> {userInfo.email}</p>
            <p><strong>Username:</strong> {userInfo.username}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
