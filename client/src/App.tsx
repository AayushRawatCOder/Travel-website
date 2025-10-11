import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations.tsx";
import Packages from "./pages/Packages.tsx";
import Contact from "./pages/Contact.tsx";
import Navbar from "./components/common/Navbar/navbar.tsx";
import HomePage from "./components/Home/Main.tsx";
import ContactUs from "./components/ContactUs/ContactUs.tsx";
import Experiences from "./components/Experiences/Experiences.tsx";
import DestinationDetail from "./components/Deatil/DestinationDetail.tsx";
import AboutUs from "./components/about/aboutus.tsx";
import FAQs from "./pages/FAQs.tsx";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/FAQs" element={<FAQs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/experiences" element={<Experiences/>} />
      </Routes>
    </>
  );
};

export default App;
