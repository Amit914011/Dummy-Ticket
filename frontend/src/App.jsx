import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";
import { useLocation, useParams } from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute";
import axios from "axios"

import { jwtDecode } from "jwt-decode";

function App() {
  const location = useLocation();
  const {id} = useParams()

 // Request Interceptor

 // Utility function to decode the JWT token and check if it's expired
const isTokenExpired = (token) => {
  if (!token) return true;

  try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decodedToken.exp < currentTime; // Return true if expired
  } catch (error) {
      console.error("Error decoding token", error);
      return true; // Consider token expired if decoding fails
  }
};


axios.interceptors.request.use(
  (config) => {
      const token = localStorage.getItem("token");

      // If token exists, add it to the Authorization header
      if (token && !isTokenExpired(token)) {
          config.headers["Authorization"] = `Bearer ${token}`;
      } else if (token && isTokenExpired(token)) {
          // Token expired, handle auto-logout
          console.error("Token expired. Logging out...");
          localStorage.removeItem("token"); // Remove expired token
          window.location.href = "/login"; // Redirect to login page
          return Promise.reject(new Error("Token expired")); // Prevent further API calls
      }

      // If the request is multipart/form-data, Axios will handle the content type automatically.
      if (config.headers['Content-Type'] === 'multipart/form-data') {
          delete config.headers['Content-Type']; // Allow Axios to set the correct Content-Type for multipart
      }

      return config;
  },
  (error) => {
      // Handle request error
      return Promise.reject(error);
  }
);






  console.log(id , "idididididid");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  const hideNavbarRoutes = ["/admin/ticket", "/admin/help" , location.pathname.includes("booking") && location.pathname ];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <PrivateRoute />
      {shouldShowNavbar &&  <Footer />}
     
    </>
  );
}

export default App;
