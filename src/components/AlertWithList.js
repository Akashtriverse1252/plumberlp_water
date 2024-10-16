"use client";

import React, { useEffect } from "react";
import { useAlert } from "../context/AlertProvider";

const Alerter = () => {
  const { alert, hideAlert } = useAlert();

  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        hideAlert();
      }, 5000); // You can adjust the duration
    }
  }, [alert, hideAlert]);

  const handleClose = () => {
    hideAlert();
  };

  return (
    <div className="fixed top-4 right-4 max-w-sm w-full z-50">
      {alert && (
        <div
          className={`${
            alert.type === "success"
              ? "bg-green-500"
              : alert.type === "error"
              ? "bg-red-500"
              : alert.type === "warning"
              ? "bg-yellow-500"
              : "bg-blue-500"
          } text-white p-4 rounded-md shadow-lg`}
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-lg font-semibold">{alert?.title}</p>
              <p className="text-sm">{alert?.message}</p>
            </div>
            <button
              onClick={handleClose}
              className="ml-4 text-white text-xl leading-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alerter;
