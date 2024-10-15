import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./css/Style.css";
import "aos/dist/aos.css";
import "./css/fonts/stylesheet.css";
import "./css/Responsive.css";
import Aos from "aos";

function App() {
  Aos.init();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
