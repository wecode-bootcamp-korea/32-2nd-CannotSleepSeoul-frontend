const BASE_URL = `http://10.58.4.194:8000`;
export const API = {
  USERS: `${BASE_URL}/users`,
  PRODUCTS: `${BASE_URL}/products`,
};

const KAKAO_OAUTH = `https://kauth.kakao.com/oauth`;
export const KAKAO_API = {
  TOKEN: `${KAKAO_OAUTH}/token`,
  AUTHORIZE: `${KAKAO_OAUTH}/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`,
};