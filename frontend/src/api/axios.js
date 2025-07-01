import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://flipr-task-backend.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;
