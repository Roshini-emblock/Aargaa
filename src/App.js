
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HomeImg2 from "./components/HomeImg2";
import HeroSection2 from "./components/HeroSection2";
import ProjectsGrid from "./components/ProjectsGrid";
import TestimonialCard from "./components/TestimonialCard";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhyChooseUs/>
      <HomeImg2/>
      <HeroSection2 />
      <ProjectsGrid/>
      <TestimonialCard/>
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default App;
