import axios from 'axios';

const API_URL = 'https://online-game-store-api.onrender.com/api/v1/';

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
