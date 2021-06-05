import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vagas-estagio.herokuapp.com'
});

export default api;
