import React from "react";
import SectionLayout from "../SectionLayout";
import Banner from "../../image/bannerImage.webp";
import EnquiryForm from "../Enquiryform";
import "./index.css";

const ResponsiveBanner = () => {
  return (
    <SectionLayout _sclass="pt-0 relative">
      <div id="banner">
        <div className="banner  desktop-show ">
          <img
            src={Banner}
            alt="Lifetime Warranty Banner"
            className="desktop-show"
          />
        </div>
      </div>
      <div
        className="formSection flex justify-center align-bottom items-end"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-duration="400"
        data-aos="fade-in"
      >
        <EnquiryForm />
      </div>
    </SectionLayout>
  );
};

export default ResponsiveBanner;
