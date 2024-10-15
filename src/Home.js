import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import Qoutes from "./components/Qoutes";
import PleasureReserve from "./components/PleasureReserve";
import IconSection from "./components/IconSection";
import ProductSlider from "./components/ProductSlider";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({
      // Global settings for AOS
    });
  }, []); // Only run once when the component mounts

  return (
    <>
      <Header />
      <Banner />
      <AboutSection />
      <PleasureReserve />
      <Qoutes />
      <IconSection />
      <ProductSlider />
      <Footer />
    </>
  );
};

export default Home;
