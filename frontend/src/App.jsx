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




axios.interceptors.request.use(
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
