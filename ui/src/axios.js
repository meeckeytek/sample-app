import axios from "axios";

const api = axios.create({
  baseURL: `http://${api-service.default}:8000/api/v1/post`,
});

export default api;