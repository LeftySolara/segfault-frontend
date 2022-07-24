import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 3000,
});

export default axiosClient;
