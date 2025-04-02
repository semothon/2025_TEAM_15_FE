// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import './App.css';
import Welcome from './pages/Welcome';
import Index from './pages/Index';
import Graduation from './pages/Graduation';
import Curriculum from './pages/Curriculum';
import Timetable from './pages/Timetable';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/index" element={<Index />} />
        <Route path="/graduation-check" element={<Graduation />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default App;