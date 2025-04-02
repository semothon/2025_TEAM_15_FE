// src/pages/SignUp.jsx

import React from 'react';
import Animation from '../components/Animation';
import '../styles/signup.css';
import '@fontsource/alkatra';

const SignUp = () => {
  return (
    <>
      <div className="signup-container">
        <Animation text="🎓Edu Path in CS" />
        <div className="signup-header">
          <h2>계정 만들기</h2>
        </div>
        <div className="signup-box">
          <input
            type="text"
            placeholder="아이디"
            className="input-field"
          />
          
          <input
            type="password"
            placeholder="비밀번호 (8~16자의 영문, 숫자, 특수 기호)"
            className="input-field"
          />

          <input
            type="text"
            placeholder="이름"
            className="input-field"
          />

          <div className="verification-container">
            <input
              type="email"
              placeholder="이메일"
              className="email-field"
            />
            <button className="verification-button">인증 메일 발송</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;