import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/graduation.css';

const Graduation = () => {
  const [department, setDepartment] = useState('');
  const [studentId, setStudentId] = useState('');
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name); // 파일 이름 저장
    }
  };

  // 버튼 클릭 핸들러
  const handleAnalyzeClick = () => {
    if (department && studentId) {
      // 데이터를 state로 전달하며 페이지 이동
      navigate('/graduation-result', {
        state: { department, studentId},
      });
    } else {
      alert('모든 정보를 입력해주세요!');
    }
  };


  return (
    <div>
      <Header />
    <div className="graduation-intro">
    <h1 className="graduation-title">
        졸업 요건 확인
      </h1>
      <p className="graduation-description">
        학과와 학번을 선택하고 성적표를 업로드하여 졸업 요건을 확인하세요.
      </p>
    </div>
    <div className="graduation-container">
      {/* 정보 입력 섹션 */}
      <div className="info-section">
          <h2 className="info-section-title">정보 입력</h2>
          <div className="form-group-horizontal">
              <div className="form-group-text">
                  <h4>학과 선택</h4>
              </div>
              <div className='form-group'>
                  <select id="department" className="form-select" value={department} onChange={(e)=>setDepartment(e.target.value)}>
                      <option value="">학과를 선택하세요.</option>
                      <option value="컴퓨터공학과">컴퓨터공학과</option>
                      <option value="소프트웨어융합학과">소프트웨어융합학과</option>
                      <option value="인공지능학과과">인공지능학과과</option>
                  </select>
              </div>
              <div className="form-group-text">
                  <h4>학번 선택</h4>
              </div>
              <div className='form-group'>
                  <select id="studentId" className="form-select" value={studentId} onChange={(e)=>setStudentId(e.target.value)}>
                      <option value="">학번을 선택하세요.</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                  </select>
              </div>
          </div>
      </div>

      {/* 성적표 업로드 섹션 */}
      <div className="upload-section">
          <h2 className="info-section-title">성적표 업로드 (PDF)</h2>
          <div className="upload-box">
            <input type="file" id="file-input" onChange={handleFileChange}/>
            {fileName && <p>업로드된 파일: {fileName}</p>}
          </div>
      </div>

      {/* 분석 버튼 */}
      <button type="button" onClick={handleAnalyzeClick} className="submit-button">성적표 분석하기</button>
        </div>
      </div>
    );
};

export default Graduation;