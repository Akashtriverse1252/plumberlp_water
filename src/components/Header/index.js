import React, { useEffect, useRef } from "react";
import Logo from "../SVG/Logo";
import "./header.css";
import CallBtn from "../SVG/CallBtn";

const Header = ({ className }) => {
  return (
    <header className={` ${className || ""}`}>
      <div className={`header `}>
        <div className="containers mx-auto">
          <div className="row">
            <div className="header_cnt flex justify-between 2xl:items-baseline items-center">
              <div
                className="logo"
                data-aos="fade-in"
                data-aos-delay={200}
                data-aos-once="true"
                data-aos-duration={500}
              >
                <Logo />
              </div>
              <button className="get_connect">
                <div
                  className="header_cnt_cnt"
                  data-aos="fade-in"
                  data-aos-delay={200}
                  data-aos-once="true"
                  data-aos-duration={500}
                >
                  <CallBtn />
                  <span>
                    <a href="tel:7302261924" className="text-white">
                      +91-73022 61924
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
