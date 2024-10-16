import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutSection from "./components/AboutSection";
import Qoutes from "./components/Qoutes";
import PleasureReserve from "./components/PleasureReserve";
import IconSection from "./components/IconSection";
import ProductSlider from "./components/ProductSlider";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>The World of Plumber | Plumber Bathware</title>
        <meta
          name="description"
          content="Plumber faucet brand was born in 1989. Today after three decades, brand Plumber adorns millions of homes across India, Bhutan, Nepal, Nigeria, South Africa, Sri Lanka, U.A.E. and aims to reach newer heights while on this long and eventful journey."
        />
        <meta
          name="keywords"
          content="LUXURY BATHROOM FITTINGS – FAUCETS, SHOWERS, ACCESSORIES"
        />
        <link
          rel="canonical"
          href="https://www.plumberbathware.com/Save-water-pledge/"
        />
      </Helmet>
      <Header />
      <main className="flex flex-col">
        <Banner />
        {/* <AboutSection /> */}
        <PleasureReserve />
        <Qoutes />
        <IconSection />
        <ProductSlider />
      </main>
      <Footer />
    </>
  );
};

export default Home;
