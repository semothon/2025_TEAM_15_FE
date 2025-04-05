// src/pages/GraduationResult.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/graduation-result.css';
import { Link } from 'react-router-dom';
import { getGraduationResult } from '../api';

const Graduation = () => {
  const location = useLocation();
  const { file, department, studentId } = location.state || {}; // 전달된 데이터 추출
  const [graduationResult, setGraduationResult] = useState(null); // 졸업 요건 결과 저장
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  //const temp_string = 'ㅁㅁㅁㅁㅁㅁㅁㅁㅁ';

  const mockData = {
    "필수 학점": "120학점",
    "전공 학점": "60학점",
    "교양 학점": "30학점",
    "졸업 가능 여부": "가능",
    "부족한 학점": "없음",
  };

  useEffect(() => {
    const fetchGraduationResult = async () => {
      try {
        setIsLoading(true);
        console.log("API 호출 데이터:", file, department, studentId);

        // 실제 API 호출 예시 (백엔드 구현 필요)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("department", department);
        formData.append("studentId", studentId);

        // const response = await getGraduationResult(formData);
        // setGraduationResult(response.data);
        setGraduationResult(mockData);
      } catch (error) {
        console.error("졸업 요건 결과 가져오기 실패:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (file && department && studentId) {
      fetchGraduationResult();
    }
  }, [file, department, studentId]);

  const JsonToString = (resultData) => {
    return Object.entries(resultData)
      .map(([key, value]) => `${key}: ${value}`) // 키와 값을 문자열로 변환
      .join(', '); // 콤마로 구분하여 한 줄로 출력
  };
  return (
    <div>
      <Header />
      <div className="graduation-intro">
        <h1 className="graduation-title">졸업 요건 확인</h1>
        <p className="graduation-description">
          학과와 학번을 선택하고 성적표를 업로드하여 졸업 요건을 확인하세요.
        </p>
      </div>
      <div className="graduation-container">
        {/* 정보 입력 섹션 */}
        <div className="info-section">
          <h2 className="info-section-title">내 정보</h2>
          <div className="form-group-horizontal">
            <div className="form-group-text">
              <h4>학과</h4>
            </div>
            <div className="form-group-box">
              <p>{department}</p>
            </div>
            <div className="form-group-text">
              <h4>학번</h4>
            </div>
            <div className="form-group-box">
              <p>{studentId}</p>
            </div>
          </div>
        </div>

        {/* 성적표 업로드 섹션 */}
        <div className="result-section">
          <h2 className="info-section-title">졸업 요건 결과</h2>
          {isLoading ? (
            <p>결과를 불러오는 중입니다...</p>
          ) : graduationResult ? (
            <div className="result-box">
              <p>{JsonToString(graduationResult)}</p>
            </div>
          ) : (
            <p>결과를 불러올 수 없습니다.</p>
          )}
        </div>

        {/* 분석 버튼 */}
        <Link to="/curriculum">
          <button type="button" className="submit-button">
            추천 커리큘럼 알아보기
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Graduation;