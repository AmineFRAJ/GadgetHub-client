import React from "react";
import "./index.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Login from "./pages/Login";

import ErrorPage from "./pages/ErrorPage";
 
import Register from "./pages/Register";
import FooterPage from "./components/FooterPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/PorductDetails";
import Smartphone from "./components/Smartphone";
import LaptopComponent from "./components/LaptopComponent";
import TabletComponent from "./components/TabletComponent";
import Dashboard from "./pages/Dashbord";
 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,123,255,0.3)_0%,rgba(0,77,153,0.2)_45%,rgba(0,0,0,0.1)_100%)]" />
        </div>
      </div>
      <div className="relative z-50 pt-20">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path="smartphone" element={<Smartphone />} />
            <Route path="laptops" element={<LaptopComponent />} />
            <Route path="tablet" element={<TabletComponent />} />
          </Route>
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/secret-dashboard" element={<Dashboard />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <FooterPage />
      </div>
    </div>
  );
};

export default App;
