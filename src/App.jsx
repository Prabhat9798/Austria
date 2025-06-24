import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Testimonal from "./components/Testimonal";
import Chatbot from "./components/Chatbot";
import VirtualOffice from "./components/VirtualOffice";
import ChanceKartHero from "./components/ChanceKart/ChanceKartHero";
import ChanceKartNextpage from "./components/ChanceKart/ChanceKartNextpage";
import SuccessfulClients from "./components/ChanceKart/SucessfulClients";
import LandingPageAustria from "./components/Austria/LandingPageAustria";
import WhyChooseUs from "./components/Austria/WhyChooseUs";
import ServicesSection from "./components/Austria/ServicesSection";
import TestiCard from "./components/testiCard";
import StudyAbroadInfo from "./components/Austria/StudyAbroadInfo";
import Footer from "./components/Austria/Footer";
import GoogleReviews from "./components/Austria/GoogleReviews";
// import Footer from "./components/ChanceKart/Footer";
// import Testimonial from "./components/Testimonial"; // Import the Testimonial component

// Layout component for the home route
// function HomeLayout() {
//   return (
//     <div>
//       <Hero3 /> {/* Include the Hero3 (home) component */}
//       <Testimonal /> {/* Include the Testimonial component */}
//       {/* Chatbot positioned in the bottom-right corner */}
//       <div
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           right: "20px",
//           zIndex: 1000,
//         }}
//       >
//         <Chatbot />
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="">
        {/* <Navbar /> */}
        <Routes>
          {/* Use the HomeLayout for the root path */}
          {/* <Route path="/" element={<HomeLayout />} /> */}

          {/* <Route path="/hero3" element={<HeroSection />} /> */}
          {/* <Route path="/hero2" element={<Hero2 />} /> */}
          {/* <Route path="/virtual" element={<VirtualOffice />} /> */}
          {/* <Route path="/" element={<LandingPageAustria />} /> */}
          {/* <Route path="/next" element={<ChanceKartNextpage />} /> */}
          {/* <Route path="/sc" element={<SuccessfulClients />} /> */}
        </Routes>
        <LandingPageAustria/>
        <WhyChooseUs/>
        <ServicesSection/>
        {/* <Testimonal/> */}
        <GoogleReviews/>
        {/* <StudyAbroadInfo/> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
