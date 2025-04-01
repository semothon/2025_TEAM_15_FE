// src/components/Logo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/alkatra';

const Logo = () => {
  return (
    <Link to="/index" className="app-name">
      🎓EPiC
    </Link>
  );
};

export default Logo;