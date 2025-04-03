// src/config.js

const CONFIG = {
  // Spring Boot server
  SPRING_BOOT: {
    BASE_URL: 'http://localhost:8090/api/curriculum',
    ENDPOINTS: {
      RECOMMEND: '/recommend',
      ADD_QUESTION: '/add-ques',
    },
  },

  // FastAPI AI server
  FAST_API: {
    BASE_URL: 'http://localhost:8000',
    ENDPOINTS: {
      RECOMMEND: '/recommend',
      CHAT: '/chat',
    },
  },
};

export default CONFIG;
