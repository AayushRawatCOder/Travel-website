import { Routes, Route } from "react-router-dom";
import Destinations from "./pages/Destinations.tsx";
import Packages from "./pages/Packages.tsx";
import Navbar from "./components/common/Navbar/navbar.tsx";
import HomePage from "./components/Home/Main.tsx";
import ContactUs from "./components/ContactUs/ContactUs.tsx";
import Experiences from "./components/Experiences/Experiences.tsx";
import FAQ from "./pages/FAQs.tsx";
import CulturalTours from "./components/tours/CulturalTours/CulturalTours.tsx";
import BeachGetaways from "./components/tours/Beach/BeachGetAway.tsx";
import AboutPage from "./components/About-tmp/AboutPage.tsx";
import AdventureTours from "./components/tours/adventure/AdventureTours.tsx";
import DestinationDetail from "./components/Destination/[destinationId]/DestinationDetail.tsx";

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destination/:destinationId" element={<DestinationDetail />} />
        <Route path="/tours/adventure" element={<AdventureTours/>} />
       <Route path="/tours/cultural" element={<CulturalTours/>} /> 
       <Route path="/tours/beach" element={<BeachGetaways/>} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/FAQs" element={<FAQ/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/experiences" element={<Experiences/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/tours/adventuretours" element={<AdventureTours/>} />
      </Routes>
    </>
  );
};

export default App;
