import React, { useEffect, useRef } from "react";
import Logo from "../SVG/Logo";
import "./header.css";
import Aos from "aos";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CallBtn from "../SVG/CallBtn";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleScrollToServices = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <div className="header">
        <div className="container mx-auto">
          <div className="row">
            <div className="header_cnt flex justify-between items-baseline">
              <div
                className="logo"
                data-aos="fade-in"
                data-aos-delay={500}
                data-aos-once="true"
                data-aos-duration={500}
              >
                <Logo />
              </div>
              <button className="get_connect">
                <div
                  className="header_cnt_cnt"
                  data-aos="fade-in"
                  data-aos-delay={500}
                  data-aos-once="true"
                  data-aos-duration={500}
                >
                  <CallBtn />
                  <span>
                    <a href="tel:18001207977" className="text-white">
                      18001207977
                    </a>
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
