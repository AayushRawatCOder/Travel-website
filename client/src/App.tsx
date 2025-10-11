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
import AboutUs from "./components/about/AboutUs.tsx";
import FAQ from "./pages/FAQs.tsx";
import CulturalTours from "./components/tours/CulturalTours/CulturalTours.tsx";
import BeachGetaways from "./components/tours/Beach/BeachGetAway.tsx";
import AboutPage from "./components/About/About.tsx";
import CultureTours from "./components/Tour/CultureTours.tsx";
import BeachGetaway from "./components/Tour/BeachGetaway.tsx";
import AdventureTours from "./components/tours/adventure/AdventureTours.tsx";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/tours/adventure" element={<AdventureTours/>} />
       <Route path="/tours/cultural" element={<CulturalTours/>} /> 
       <Route path="/tours/beach" element={<BeachGetaways/>} />
        <Route path="/packages" element={<Packages />} />
        {/* <Route path="/about" element={<AboutUs/>} /> */}
        <Route path="/FAQs" element={<FAQ/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/tours/adventuretours" element={<AdventureTours/>} />
        {/* <Route path="/tours/cultural" element={<CultureTours/>} />
        <Route path="/tours/beach" element={<BeachGetaway/>} /> */}
      </Routes>
    </>
  );
};

export default App;
