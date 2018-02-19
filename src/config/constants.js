// We really need to make sure these variables are defined, so define them
// first, overwrite them later, and export them for compile-time checks.
let API_URL = 'https://example.com/api';

if (process.env.NODE_ENV === 'development') {
  API_URL = 'http://development.example.com/api';

  // API_URL = "http://localhost:8081/api";
} else if (process.env.NODE_ENV === 'staging') {
  API_URL = 'http://staging.example.com/api';
}

const API_LEVEL = '';

const API_BASE = (() => {
  return API_URL + API_LEVEL;
})();

const API_GET_EXAMPLE = ((id) => {
  return {
    url: `${API_BASE}/example/${id}`,
    type: 'get',
  };
})();

export {
  // api urls base
  API_URL,

  // Specific pages urls
  API_GET_EXAMPLE,
};
