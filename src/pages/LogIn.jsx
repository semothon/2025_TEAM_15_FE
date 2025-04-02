// src/pages/LogIn.jsx

import React from 'react';
import Animation from '../components/Animation';
import '../styles/login.css';
import '@fontsource/alkatra';

const LogIn = () => {
  return (
    <>
      <div className="login-container">
        <div></div>
        <div className="login-box">
          <Animation text="🎓Edu Path in CS" />
          <div className="login-header">
            <h2>로그인</h2>
          </div>
          <input type="email" placeholder="이메일" className="input-field" />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-field"
          />
          <button className="login-button">로그인</button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
