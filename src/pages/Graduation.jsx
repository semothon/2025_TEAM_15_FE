// src/pages/Graduation.jsx

import React from 'react';
import Header from '../components/Header';
import '../styles/graduation.css';

const Graduation = () => {
  return (
    <div>
      <div className="graduation-container">
        <Header />
        <h2 className="graduation-title">졸업 요건 확인</h2>

        <p className="graduation-description">
          학과와 학번을 선택하고 성적표를 업로드하여 졸업 요건을 확인하세요.
        </p>

        {/* 정보 입력 섹션 */}
        <div className="info-section">
          <h2 className="info-section-title">정보 입력</h2>
          <div className="form-group-horizontal">
            <div className="form-group">
              <label htmlFor="department" className="form-label">
                학과 선택
              </label>
              <select id="department" className="form-select">
                <option value="">학과를 선택하세요.</option>
                <option value="software">컴퓨터공학과</option>
                <option value="ai">인공지능학과</option>
                <option value="data">소프트웨어융합학과</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="studentId" className="form-label">
                학번 선택
              </label>
              <select id="studentId" className="form-select">
                <option value="">학번을 선택하세요.</option>
                <option value="2021">2019</option>
                <option value="2021">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2023">2024</option>
                <option value="2023">2025</option>
              </select>
            </div>
          </div>
        </div>

        {/* 성적표 업로드 섹션 */}
        <div className="upload-section">
          <h2 className="upload-section-title">성적표 업로드 (PDF)</h2>
          <div className="upload-box">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#666666"
              >
                <path d="M440-320v-326L336-542l-56-58 200-200 200 200-56 58-104-104v326h-80ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </p>
            <p>PDF 파일은 드래그하거나 클릭하여 업로드하세요.</p>
            <p>최대 파일 크기: 최대10MB까지 가능합니다.</p>
            <input
              type="file"
              id="fileUpload"
              accept=".pdf"
              className="form-file"
            />
          </div>
        </div>

        {/* 분석 버튼 */}
        <button type="submit" className="submit-button">
          성적표 분석하기
        </button>
      </div>
    </div>
  );
};

export default Graduation;