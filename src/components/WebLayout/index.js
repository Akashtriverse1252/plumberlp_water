import React from "react";

const index = (props) => {
  return (
    <>
      <section className={props._sclass} id={props._class_ID}>
        <div className={props._class}>
          <div className="container mx-auto">
            <div className="web-container">{props.children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
