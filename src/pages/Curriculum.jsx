// src/pages/Curriculum.jsx

import React from 'react';
import Header from '../components/Header';
import '../styles/curriculum.css';

const Curriculum = () => {
  return (
    <div>
        <Header />
        <div className="curriculum-intro">
        <h2 className="curriculum-title">커리큘럼 추천</h2>
        <p className="curriculum-description">
          관심 키워드를 입력하면 AI가 최적의 커리큘럼을 추천해 드립니다.
        </p>
      </div>

      <div className="curriculum-container">
        
        {/* 관심 키워드 직접 입력 */}
        <div className="interest-section">
          <h2 className="section-title">관심사 입력</h2>
          <div className="interest-input-group">
            <input
              type="text"
              className="interest-input"
              placeholder="관심 키워드를 직접 입력하세요"
            />
            <button className="search-button">
              검색 &nbsp;{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 인기 키워드 선택 */}
        <div className="popular-keywords">
          <h2 className="section-title">인기 키워드</h2>
          <div className="keyword-buttons">
            {[
              '데이터 사이언스',
              '백엔드',
              '프론트엔드',
              '인공지능',
              '머신러닝',
              '보안',
              '네트워크',
            ].map((keyword) => (
              <button key={keyword} className="keyword-button">
                {keyword}
              </button>
            ))}
          </div>
        </div>

        {/* 추가 정보 입력 */}
        <div className="extra-info">
          <h2 className="section-title">추가 정보 (선택사항)</h2>
          <textarea
            className="extra-info-input"
            placeholder="추가적인 정보를 입력하세요"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;