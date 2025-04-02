// src/pages/CurriculumResult.jsx

import React from 'react';
import Header from '../components/Header';
import '../styles/curriculum-result.css';

const CurriculumResult = () => {
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
        {/* 이전에 입력한 질문 내용 표시 */}
        <div className="prev-question-section">
          <h2 className="section-title">질문 내용</h2>
          <div className="prev-question-group">
            <input
              type="text"
              className="prev-question"
              value="사용자의 이전 질문 표시"
              readOnly
            />
          </div>
        </div>

        {/* AI의 답변 표시 */}
        <div className="ai-response-group">
          <div className="ai-response-box">
            커리큘럼 추천에 대한 AI 답변입니다.
          </div>
        </div>

        {/* 질문 입력 필드와 검색 버튼 */}
        <div className="question-input-group">
          <textarea
            className="question-input"
            placeholder="질문을 입력하세요"
          ></textarea>
          <button className="search-button">
            검색 &nbsp;
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
    </div>
  );
};

export default CurriculumResult;