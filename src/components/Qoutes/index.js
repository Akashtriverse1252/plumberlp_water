import React from "react";
import WebLayout from "../WebLayout";
import "./index.css";
import Qoute from "../SVG/Qoute";

const index = () => {
  return (
    <>
      <WebLayout _class="w-full relative mx-auto ">
        <div className="mx-auto w-fit opacity-5">
          <Qoute />
        </div>
        <div className="w-[80%] mx-auto">
          <p className="text-center mb-3 QouteText z-10">
            Embrace water conservation the smart way! <br /> Our simple,
            low-flow aerators are cost-effective and easy to install, ensuring
            less waste in every basin and sink.
          </p>
        </div>
      </WebLayout>
    </>
  );
};

export default index;
