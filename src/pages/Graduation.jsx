import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import '../styles/graduation.css';

const Graduation = () => {
  return (
    <div>

    <div className="graduation-container">
    <Header />
      <motion.h1
        className="graduation-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        졸업 요건 확인
      </motion.h1>
      <p className="graduation-description">
        학과와 학번을 선택하고 성적표를 업로드하여 졸업 요건을 확인하세요.
      </p>
      {/* 정보 입력 섹션 */}
      <div className="info-section">
          <h2 className="info-section-title">정보 입력</h2>
          <div className="form-group-horizontal">
              <div className="form-group">
                  <label htmlFor="department" className="form-label">학과 선택</label>
                  <select id="department" className="form-select">
                      <option value="">학과를 선택하세요.</option>
                      <option value="software">소프트웨어학과</option>
                      <option value="ai">AI융합학과</option>
                      <option value="data">데이터사이언스학과</option>
                  </select>
              </div>
              <div className="form-group">
                  <label htmlFor="studentId" className="form-label">학번 선택</label>
                  <select id="studentId" className="form-select">
                      <option value="">학번을 선택하세요.</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                  </select>
              </div>
          </div>
      </div>

      {/* 성적표 업로드 섹션 */}
      <div className="upload-section">
          <h2 className="info-section-title">성적표 업로드 (PDF)</h2>
          <div className="upload-box">
              <p>PDF 파일은 드래그하거나 클릭하여 업로드하세요.</p>
              <p>최대 파일 크기: 최대10MB까지 가능합니다.</p>
              <input type="file" id="fileUpload" accept=".pdf" className="form-file" />
          </div>
      </div>

      {/* 분석 버튼 */}
      <button type="submit" className="submit-button">성적표 분석하기</button>
        </div>
      </div>
    );
};

export default Graduation;