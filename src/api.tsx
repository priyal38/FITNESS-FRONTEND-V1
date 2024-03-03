import axios from 'axios';
import { useAuth } from "./context/AuthContext";

const createAxiosInstance = () => {
  const { auth, setAuth } = useAuth();

  const apiInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  // Add a request interceptor
  apiInstance.interceptors.request.use(
    (config) => {
      const { token } = auth; // Assuming useAuth returns accessToken
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Add a response interceptor
  apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response && error.response.status === 403 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await axios.get("http://localhost:5000/api/auth/refresh1", { withCredentials: true });
          const { accessToken } = response.data;

          const userString = localStorage.getItem('user');
          if (userString) {
            const user = JSON.parse(userString);
            user.token = accessToken;
            localStorage.setItem('user', JSON.stringify(user));
          }
        
            await setAuth((prevAuth) => ({ ...prevAuth, token: accessToken }));
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
        
        } catch (error) {
          console.log(error)
        }
      }
      
      return Promise.reject(error);
    }
  );

  return apiInstance;
};

export default createAxiosInstance();
