// Import necessary modules
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import WebLayout from "../WebLayout";
import img01 from "../../image/sliderImages01.webp";
import img02 from "../../image/sliderImages02.webp";
import img03 from "../../image/sliderImages03.webp";
import Title from "../Title";
import "./index.css";

// Define the Index component
const Index = () => {
  // Settings for Slider component
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 6000,
    speed: 900,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100, // Small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Data for videos
  const data = [
    {
      thumbnail: img01,
      description:
        "Save up to 10 gallons water per day by repairing leaky faucets",
    },
    {
      thumbnail: img02,
      description:
        "Use a low-flow showerhead to save 15 gallons of water during a 10-minutes shower",
    },
    {
      thumbnail: img03,
      description:
        "Turn off the tap while brushing your teeth to save up to 8 gallons of water",
    },
    {
      thumbnail: img01,
      description:
        "Save up to 10 gallons water per day by repairing leaky faucets",
    },
    {
      thumbnail: img02,
      description:
        "Use a low-flow showerhead to save 15 gallons of water during a 10-minutes shower",
    },
    {
      thumbnail: img03,
      description:
        "Turn off the tap while brushing your teeth to save up to 8 gallons of water",
    },
  ];
  const getAosDuration = (index) => {
    if (index === 0) {
      return 300; // First slide duration
    } else if (index === 1) {
      return 300; // Second slide duration
    } else if (index === 2) {
      return 300; // Second slide duration
    } else {
      return 400; // Third and subsequent slides duration
    }
  };

  return (
    <>
      <WebLayout _class_ID="" _class=" ">
        <div className="mx-auto flex justify-center flex-col ">
          <Title>Smart Choices for a Water-Wise Home</Title>
          <div className="w-[80%] mx-auto productSlider ">
            <Slider {...settings} adaptiveHeight={true}>
              {data.map((video, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={getAosDuration(index)}
                  data-aos-duration={getAosDuration(index)}
                  data-aos-once="true"
                  data-aos-offset={getAosDuration(index)}
                  data-aos-easing="ease-in"
                >
                  <div className="mx-4 rounded-3xl overflow-hidden">
                    <div className="vedio_thumbnail">
                      <img src={video.thumbnail} alt="gradient file" />
                    </div>
                    <p className="bg-[#C61A40] flex justify-center items-center px-10 text-white ">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </WebLayout>
    </>
  );
};

export default Index;
