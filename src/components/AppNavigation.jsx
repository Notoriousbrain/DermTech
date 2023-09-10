import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutUs, HomePage, Profile } from '../pages';
import Navbar from './Navbar';

const AppNavigation = () => {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default AppNavigation