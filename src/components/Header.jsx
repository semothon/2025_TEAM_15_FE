// src/components/Header.jsx

import React from 'react';

import Logo from './Logo';
import NavLinks from './NavLinks';
import AccountIcon from './AccountIcon';
import '../styles/header.css';
import '@fontsource/alkatra';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <Logo />

        {/* top navigation */}
        <nav className="nav-links">
          <NavLinks />

          {/* account icon */}
          <div className="account-btn">
            <span className="account-icon">
              <AccountIcon />
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;