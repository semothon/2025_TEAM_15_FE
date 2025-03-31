// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

import AccountIcon from './AccountIcon';
import '../styles/header.css';
import '@fontsource/alkatra';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* application name */}
        <Link to="/" className="app-name">
        🎓EPiC
        </Link>

        {/* top navigation */}
        <nav className="nav-links">
          <Link to="/graduation-check" className="nav-link">졸업 요건 확인</Link>
          <Link to="/curriculum" className="nav-link">커리큘럼 추천</Link>
          <Link to="/timetable" className="nav-link">시간표 비교</Link>

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