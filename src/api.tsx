// import axios from 'axios';
// import { useAuth } from "./context/AuthContext";

// const CreateAxiosInstance = () => {

//   const { auth, setAuth } = useAuth();

//   const apiInstance = axios.create({
//     baseURL: 'http://localhost:5000/api',
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true,
//   });

//   // Add a request interceptor
//   apiInstance.interceptors.request.use(
//     (config) => {
//       const { token } = auth; // Assuming useAuth returns accessToken
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

//   // Add a response interceptor
//   apiInstance.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//       const originalRequest = error.config;

//       if (error.response && error.response.status === 403 && !originalRequest._retry) {
//         originalRequest._retry = true;

//         try {
//           const response = await axios.get("http://localhost:5000/api/auth/refresh1", { withCredentials: true });
//           const { accessToken } = response.data;

//           const userString = localStorage.getItem('user');
//           if (userString) {
//             const user = JSON.parse(userString);
//             user.token = accessToken;
//             localStorage.setItem('user', JSON.stringify(user));
//           }
        
//             await setAuth((prevAuth) => ({ ...prevAuth, token: accessToken }));
//             originalRequest.headers.Authorization = `Bearer ${accessToken}`;
//             return axios(originalRequest);
        
//         } catch (error) {
//           console.log(error)
//         }
//       }
      
//       return Promise.reject(error);
//     }
//   );

//   return apiInstance;
// };

// export default CreateAxiosInstance;


import axios, { AxiosInstance, AxiosInterceptorManager } from 'axios';
import { useEffect } from 'react';
import { useAuth } from './context/AuthContext';

const CreateAxiosInstance = (): null => {
  const { auth, setAuth } = useAuth();
  const apiInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });

  useEffect(() => {
   
    const requestIntercept = apiInstance.interceptors.request.use(
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
      const responseIntercept = apiInstance.interceptors.response.use(
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
    


    // Clean up function
    return () => {
      
        apiInstance.interceptors.request.eject(requestIntercept);
        apiInstance.interceptors.response.eject(responseIntercept);
      
    };
  }, [auth, setAuth]);

  return null;
};

export default CreateAxiosInstance;
