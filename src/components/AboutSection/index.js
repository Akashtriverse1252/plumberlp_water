import React from "react";
import WebLayout from "../WebLayout";
import Title from "../Title";

const index = () => {
  return (
    <>
      <WebLayout _class="w-full relative mx-auto ">
        <Title className="text-[#1385a0]">
          Take the pledge and be a water saviour
        </Title>
        <div className="w-90 mx-auto">
          <p
            className="text-center mb-3"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos="fade-up"
          >
            Water is a precious resource that humans have sometimes taken for
            granted, but it’s about time to become more responsible towards
            water wastage. Water conservation has become more essentialnow than
            ever because our water resources are finite, and they are getting
            smaller every year.
          </p>
          <p
            className="text-center"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos="fade-up"
          >
            In order to do our bit in saving water, we at Plumber Bathware have
            pledged to save 7 billion litresof water and we invite you to be a
            part of this. We are also upgrading our Basin and Sink Faucets to
            GRIHA/USGBC flow rate compliant Green Building Faucets that can save
            XX litres of waterevery day. So, come be a part of this initiative
            of making a difference, one drop at a time.
          </p>
        </div>
      </WebLayout>
    </>
  );
};

export default index;
