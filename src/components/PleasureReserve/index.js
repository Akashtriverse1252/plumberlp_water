import React from "react";
import WebLayout from "../WebLayout";
import Title from "../Title";
import "./index.css";

const index = () => {
  const dropData = [
    {
      lightColor: "#46647c",
      color: "#304d5d",
      text: "A regular faucet wastes <strong>10 litres</strong> of water every minute when left open",
    },
    {
      lightColor: "#e9692c",
      color: "#91452e",
      text: "Each Basin Faucet if used 5 times a day, wastes 50 litres/day which is awhooping <strong>18250</strong> litres/year",
    },
    {
      lightColor: "#4dbdbe",
      color: "#297170",
      text: "Each Sink Faucet if used 10 times a day, wastes 100 litres of water every day making it <strong>36500 litres</strong>/year",
    },
  ];
  return (
    <>
      <WebLayout _class="w-full relative mx-auto ReseveBG">
        <Title>Pledge to Preserve, Be a Water Guardian</Title>
        <div className="w-90 mx-auto">
          <p
            className="text-center mb-8"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos="fade-up"
          >
            Water is a precious resource that we’ve taken for granted for far
            too long. It’s time to shift our mindset and take responsibility for
            conserving this vital element. Our water supply is finite and
            diminishing each year, making water conservation a critical
            responsibility for us all.At Plumber Bathware, we are committed to
            making a significant impact by pledging to save 10 billion liters of
            water through your cooperation and support. We have upgraded our
            Basin and Faucets to meet GRIHA/USGBC flow rate standards, ensuring
            that every drop counts. Join us in this essential initiative to make
            a difference. Together, we can save every precious drop of water and
            secure a sustainable future.
          </p>
          <p
            className="text-center font-semibold w-10/12 mx-auto"
            data-aos-easing="ease-in"
            data-aos-once="true"
            data-aos-duration="600"
            data-aos="fade-up"
          >
            Buy our German-made Neoperl aerators, one of the most effective
            water-saving plumbing parts,and save up to XX litres of water every
            day. These high-quality aerators significantly reduce the water
            consumption to almost half.
          </p>
        </div>
        <div className="relative w-full  py-10">
          <div className=" flex flex-col sm:flex-row items-center whiteStrip justify-between p-4 space-y-4 sm:space-y-0 sm:space-x-4 w-2/3 mx-auto">
            {dropData.map((drop, index) => (
              <div
                key={index}
                className="relative w-[31%]  group z-10"
                data-aos-easing="ease-in"
                data-aos-once="true"
                data-aos-duration="600"
                data-aos="fade-up"
              >
                <WaterDrop color={drop.color} lightColor={drop.lightColor}>
                  <p
                    className="text-white text-center opacity-80  leading-tight px-4 font-medium"
                    style={{ fontSize: "72px" }}
                    dangerouslySetInnerHTML={{ __html: drop.text }}
                  ></p>
                </WaterDrop>
              </div>
            ))}
          </div>
        </div>
      </WebLayout>
    </>
  );
};

export default index;

const WaterDrop = ({ color, lightColor, children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1116 1513"
    className="w-full h-auto"
  >
    <path
      d="m1076.6 942.6c0 287.2-232.8 520-520.1 520q-15.7 0-31.2-0.9c-272.7-16.2-488.8-242.4-488.8-519.1 0-483.8 507.4-888.3 519.8-898.1q0.2-0.2 0.2-0.2 0 0 0.2 0.2c11.2 9 519.9 423.6 519.9 898.1z"
      fill={color}
    />
    <path
      d="m1014.1 942.6c0 276.7-216.1 502.9-488.8 519.1-272.7-16.2-488.8-242.4-488.8-519.1 0-483.8 507.4-888.3 519.8-898.1q0.2-0.2 0.2-0.2 0 0 0.2 0.2c10.5 9.6 457.4 424 457.4 898.1z"
      fill={lightColor}
    />
    <foreignObject x="15%" y="40%" width="70%" height="50%">
      <div
        xmlns="http://www.w3.org/1999/xhtml"
        className="h-full flex items-start justify-center"
      >
        {children}
      </div>
    </foreignObject>
  </svg>
);
