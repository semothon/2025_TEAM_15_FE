// src/components/Logo.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/alkatra';

const Logo = ({ className }) => {
  return (
    <Link to="/index" className={className}>
      🎓EPiC
    </Link>
  );
};

export default Logo;