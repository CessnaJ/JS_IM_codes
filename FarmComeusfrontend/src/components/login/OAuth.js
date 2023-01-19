// Vanilla JS로 구현하기.
const REST_API_KEY = "1da7b3747e086ab039713b8c280ee6d5";
const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;