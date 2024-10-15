import React from "react";
import WebLayout from "../WebLayout";
import "./footer.css";
import footerWaterDrop from "../../image/footerWaterDrop.webp";
import EnquiryForm from "../Enquiryform";

const index = () => {
  return (
    <WebLayout
      id="footer "
      _sclass="pb-0 bg-[#6D6E72]"
      _class="footer p-sm-[30px] pt-14 "
    >
      <div
        className="footerstn w-4/5 mx-auto py-5"
        data-aos-easing="ease-in"
        data-aos-once="true"
        data-aos-duration="400"
        data-aos="fade-in"
      >
        <div class="flex justify-between">
          <div className="w-[55%] justify-center items-center flex ">
            <div className="border-2 border-gray-500 p-[10%]  pt-0 relative rounded-3xl text-white text-center footerCnt_scn">
              <div className="mx-auto -mt-[100px] mb-[50px] w-fit relative footerLeftQouteSection">
                <img src={footerWaterDrop} alt="" className="" />
              </div>
              <span>
                Let’s work together in full strength, so that around
                <strong> 6 LAKH HOUSE-HOLDS</strong> can get water supply under
                <strong> “Har Ghar Nal Se Jal”</strong> Mission of Bharat
                Government. Let’s join hands to conserve water.
              </span>
            </div>
          </div>
          <div className="w-[35%]">
            <EnquiryForm />
          </div>
        </div>
      </div>
      <div className="wapper">
        <div className="copyright">
          <p>Copyright 2024 © All right reserved</p>
          <p>
            site:{" "}
            <a href="https://www.triverseadvertising.com/" target="_blank">
              triverse
            </a>
          </p>
        </div>
      </div>
    </WebLayout>
  );
};

export default index;
