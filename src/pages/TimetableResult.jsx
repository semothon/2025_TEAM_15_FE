// src/pages/Timetable-result.jsx

import React from 'react';
import { useLocation } from 'react-router-dom'; // 데이터 전달받기 위한 useLocation 가져오기
import Header from '../components/Header';
import '../styles/timetable-result.css';

const TimetableResult = () => {
  const location = useLocation(); // 이전 페이지에서 전달된 state 접근
  const { uploadBoxes } = location.state || { uploadBoxes: [] }; // 전달받은 업로드 박스 데이터
  const temp_Image = 'https://placecats.com/g/300/200'; // 임시 이미지 URL

  // 임시 이미지 다운로드 핸들러
  const handleDownloadTempImage = async () => {
    try {
      const response = await fetch(temp_Image, { mode: 'cors' });
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'temp_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('이미지 다운로드 실패:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="timetable-intro">
        <h1 className="timetable-title">시간표 비교 결과</h1>
        <p className="timetable-description">
          겹치는 공강 시간을 확인하세요.
        </p>
      </div>

      {/* 업로드된 이미지와 temp_Image 표시 */}
      <div className="result-container">
      {/* 업로드된 이미지 */}
      <div className="uploaded-images">
        {uploadBoxes.map((box, index) => (
          <div key={box.id} className="image-group">
            <h3>시간표 {index + 1}</h3>
            <div className="image-row">
              {box.files.map((file, fileIndex) => (
                <img
                  key={fileIndex}
                  src={file.src}
                  alt={`Uploaded Timetable ${index + 1}`}
                  className="uploaded-image"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* 임시 이미지 */}
      <div className="temp-image-container">
        <h3>공강 시간표</h3>
        <img src={temp_Image} alt="Temporary Image" className="temp-image" />
        <button onClick={handleDownloadTempImage} className="download-button">
          이미지 다운로드
        </button>
      </div>
    </div>
    </div>
  );
};

export default TimetableResult;
