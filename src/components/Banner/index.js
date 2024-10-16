import React from "react";
import SectionLayout from "../SectionLayout";
import Banner from "../../image/bannerImage.webp";
import EnquiryForm from "../Enquiryform";
import "./index.css";

const ResponsiveBanner = () => {
  return (
    <SectionLayout _sclass="p-0 relative">
      <div id="banner">
        <div className="banner  desktop-show ">
          <img
            src={Banner}
            alt="Lifetime Warranty Banner"
            className="desktop-show"
          />
          <div className="bannerTitle">
            <h1>#IPledgeToSaveWater </h1>
            <p>
              Take pride in saving water and celebrate your efforts with a
              certificate of appreciation.
            </p>
          </div>
        </div>
      </div>
      <div
        className="formSection flex justify-center align-bottom "
        data-aos-duration="500"
        data-aos="fade-in"
      >
        <EnquiryForm />
      </div>
    </SectionLayout>
  );
};

export default ResponsiveBanner;
