import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
    baseURL: 'http://0dfa-2a00-23c6-f091-6b01-4ce0-dc08-7f51-e702.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  
  export default instance;