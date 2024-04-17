import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Header';
import HomePage from './components/Homepage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import UserInfoPage from './components/UserInfoPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userinfo" element={<UserInfoPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
