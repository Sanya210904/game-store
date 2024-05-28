import axios from 'axios';

const API_URL = 'https://online-game-store-api.onrender.com/api/v1/';

const $api = axios.create({
  baseURL: API_URL,
});

$api.interceptors.request.use(async (config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

  return config;
});

export default $api;
