import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const apiClient = axios.create({
  baseURL: process.env.API_GATEWAY_URL || 'http://localhost:3000/api',
  withCredentials: true, // Match the frontend configuration
  timeout: 5000,
});

export const handleError = (e: any) => {
  return {
    error: e?.response?.data || e?.message || 'Something went wrong',
    message: e?.message || 'Something went wrong',
    success: false,
  };
};

export default apiClient;
