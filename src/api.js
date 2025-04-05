// src/api.js

import axios from 'axios';
import CONFIG from './config';

export const springApi = axios.create({
  baseURL: CONFIG.SPRING_BOOT.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const fastApi = axios.create({
  baseURL: CONFIG.FAST_API.BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchRecommendedCurriculum = async (keyword, add_info) => {
  const response = await springApi.post(CONFIG.SPRING_BOOT.ENDPOINTS.RECOMMEND, { keyword, add_info });
  return response.data;
};

export const addQuestionWithAI = async (question) => {
  console.log("🔴 [React → Spring] Sending:", { question }); // 디버깅용 출력
  const response = await springApi.post(
    CONFIG.SPRING_BOOT.ENDPOINTS.ADD_QUESTION, 
    {question} // { question: "텍스트" } 형식으로 수정
  );
  return response.data;
};

export const getGraduationResult = async (formdata) => {
  const response = await springApi.post(CONFIG.SPRING_BOOT.ENDPOINTS.GRADUATION, formdata, {headers: {
    "Content-Type": "multipart/form-data",
}},);
  return response.data; 
};

export const getTimetable = async (images) => {
  const response = await springApi.post(CONFIG.SPRING_BOOT.ENDPOINTS.TIMETABLE, { images });
  return response.data; 
};