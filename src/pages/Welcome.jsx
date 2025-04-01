// src/pages/Welcome.jsx

import React from 'react';
import { motion } from 'framer-motion';

import '../styles/welcome.css';
// import Logo from '../components/Logo';

const Welcome = () => {
  return (
    <div className="welcome-container">

      {/* <div className="top-logo">
        <Logo />
      </div> */}

      <div className="central-content">
        <motion.div
          className="epic-animation"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: [0, 1, 0],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 2.8,
            ease: 'easeOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          style={{
            marginBottom: '0px',
          }}
        >
          <h2>🎓 Edu Path in CS</h2>
        </motion.div>

        <div className="welcome-text">
          <h2>EPiC 서비스에 오신 것을 환영합니다!</h2>
        </div>
      </div>

      <div className="welcome-description">
        <p>
          학과별 졸업 요건 분석, 커리큘럼 추천, 시간표 비교를 통해<br/>
          효율적인 학업 계획을 세워보세요.
        </p>
      </div>

      <div className="welcome-buttons">
        <button className="btn btn-signup">계정 만들기</button>
        <button className="btn btn-signin">로그인</button>
      </div>
    </div>
  );
};

export default Welcome;