import React, { useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WebLayout from "./components/WebLayout";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Header className="_fixedNav" />
      <WebLayout>
        {" "}
        <div className="flex items-center justify-center md:h-[32vh] h-auto py-10 px-3 bg-gray-100">
          <div className=" md:p-8 p-0  w-full ">
            <h1 className="xl:text-4xl md:text-2xl text-xl font-semibold text-center mb-4 uppercase text-[#4e565f]">
              Thank You!
            </h1>
            <p className=" text-gray-700 text-center pb-7 tracking-[1px]">
              For taking the pledge to save water. Your certificate will be sent to your email.
            </p>
            <div className=" text-center ">
              <Link
                to="/"
                className="w-fit mx-auto px-6 py-3 text-[#f6f6f6] rounded-full bg-[#d7283a] hover:bg-[#9a9c9f] hover:text-[#292a2b] uppercase text-[13px] tracking-[1.4px] font-semibold  "
              >
                Back to home page
              </Link>
            </div>
          </div>
        </div>
      </WebLayout>

      <Footer />
    </>
  );
};

export default About;
