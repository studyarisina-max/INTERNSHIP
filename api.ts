import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  // Your live Render URL with /api at the end
  baseURL: 'https://internship-11-ju1d.onrender.com/api',
  timeout: 15000, // Wait 15 seconds (important for Render's free tier sleep)
});

// Automatically add the token to every request
API.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  } catch (err) {
    console.error("Token retrieval failed", err);
  }
  return config;
});

export default API;