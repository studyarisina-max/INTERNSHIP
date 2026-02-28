import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API = axios.create({
 
  baseURL: 'https://internship-8-prcd.onrender.com',
});


API.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
});

export default API;
