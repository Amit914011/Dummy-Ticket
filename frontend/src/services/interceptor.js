import axios from "axios";
import { jwtDecode } from "jwt-decode";

// API Base URL
const API_URL = "http://localhost:2001"
// const API_URL = "http://localhost:5444/vishnu"

// Create Axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


// Request Interceptor
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        // If token exists, add it to the Authorization header
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        } 

    

        return config;
    },
    (error) => {
        // Handle request error
        return Promise.reject(error);
    }
);



export default apiClient;
