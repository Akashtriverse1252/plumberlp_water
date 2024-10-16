import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./css/Style.css";
import "./css/fonts/stylesheet.css";
import "./css/Responsive.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Thankyou from "./Thankyou";
import Alerter from "./components/AlertWithList";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <>
      <Router basename="/save-water-pledge">
        <Alerter />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/enquiry-submitted" element={<Thankyou />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
