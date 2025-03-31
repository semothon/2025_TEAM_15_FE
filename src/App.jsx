// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';

import './App.css';
import Index from './pages/Index';
import Graduation from './pages/Graduation';
import Curriculum from './pages/Curriculum';
import Timetable from './pages/Timetable';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/graduation-check" element={<Graduation />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </Router>
  );
};

export default App;