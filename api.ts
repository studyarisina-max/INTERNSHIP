import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
  // Using your specific IPv4 address
  baseURL: 'http://192.168.29.136:5000/api',
});

// This automatically adds the token to every request after you login
API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

export default API;