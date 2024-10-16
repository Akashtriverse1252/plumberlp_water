import React, { createContext, useState, useContext } from "react";

const AlerterContext = createContext();

export const AlerterProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, title, message) => {
    setAlert({ type, title, message });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <AlerterContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlerterContext.Provider>
  );
};

export const useAlert = () => useContext(AlerterContext);
