import React from "react";
import "./index.css";

const DynamicHeading = ({ children, className, tag = "h2" }) => {
  const HeadingTag = tag;

  const dynamicClasses = `heading ${className || ""}`;

  return (
    <div
      className={dynamicClasses}
      data-aos-offset="100"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      data-aos-duration="600"
      data-aos="fade-in"
    >
      <HeadingTag className="  uppercase">{children}</HeadingTag>
    </div>
  );
};

export default DynamicHeading;
