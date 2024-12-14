import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";
import { useLocation } from "react-router-dom";
import PrivateRoute from "./privateRoute/privateRoute";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  const hideNavbarRoutes = ["/admin/ticket", "/admin/help"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <PrivateRoute />
      <Footer />
    </>
  );
}

export default App;
