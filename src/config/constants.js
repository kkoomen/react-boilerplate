export const APP_ENV = process.env.REACT_APP_ENV;
export const __DEBUG__ = APP_ENV !== 'production';

let API_URL = 'https://example.com/api';
if (APP_ENV === 'development') {
  API_URL = 'http://localhost:8000/api';
} else if (APP_ENV === 'staging') {
  API_URL = 'http://staging.example.com/api';
}

export { API_URL };
