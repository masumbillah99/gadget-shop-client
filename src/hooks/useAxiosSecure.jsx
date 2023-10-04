import axios from "axios";
import { useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// Set config defaults when creating the instance
const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const useAxiosSecure = () => {
  //   const navigate = useNavigate();

  // Add a request interceptor
  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const token = window.localStorage.getItem("trip-aero-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          (error.response && error.response.status === 401) ||
          error.response.status === 403
        ) {
          await "logout user"; // TODO
          window.location.href = "/login";
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return [axiosInstance];
};

export default useAxiosSecure;
