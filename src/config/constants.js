let API_URL = 'https://example.com/api';

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://localhost:8000/api';
} else if (process.env.NODE_ENV === 'staging') {
  API_URL = 'http://staging.example.com/api';
}

export {
  API_URL,
};
