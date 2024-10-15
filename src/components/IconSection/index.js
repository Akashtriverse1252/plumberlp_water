import React from "react";
import Icon01 from "../../image/Icon01.webp";
import Icon02 from "../../image/Icon02.webp";
import Icon03 from "../../image/Icon03.webp";
import Icon04 from "../../image/Icon04.webp";
import Icon05 from "../../image/Icon05.webp";
import Icon06 from "../../image/Icon06.webp";
import Title from "../Title";
import WebLayout from "../WebLayout";
import "./index.css";

const AeratorBenefits = () => {
  const benefits = [
    {
      icon: Icon01,
      text: "Easy to install without the help of a Plumber",
    },
    {
      icon: Icon02,
      text: "Can be installed in 95% taps (even in older ones)",
    },
    {
      icon: Icon03,
      text: "Makes water soft to touch and reduced splashing in sinks",
    },
    {
      icon: Icon04,
      text: "Produces a larger and whiter stream of water",
    },
    {
      icon: Icon05,
      text: "Based on proven PCA technology",
    },
    {
      icon: Icon06,
      text: "Fully aerated stream at low pressure maintain up to 4LPM",
    },
  ];

  return (
    <WebLayout _class="w-full relative mx-auto ">
      <div className=" mx-auto ">
        <Title>The magic of saving with aerators</Title>
        <div
          className="flex flex-wrap justify-between w-[80%] mx-auto "
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-duration="600"
          data-aos="fade-up"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[30%] text-center"
            >
              <div className="w-[80%] mx-auto flex  items-center IconSection flex-col">
                <img src={benefit.icon} alt="icon3" />
                <span className="font-medium">{benefit.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WebLayout>
  );
};

export default AeratorBenefits;
