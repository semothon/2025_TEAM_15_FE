// src/api.js

import axios from 'axios';
import CONFIG from './config';

export const springApi = axios.create({
  baseURL: CONFIG.SPRING_BOOT.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fastApi = axios.create({
  baseURL: CONFIG.FAST_API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
