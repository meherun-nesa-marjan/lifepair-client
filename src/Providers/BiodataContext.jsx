import React, { createContext, useState } from "react";

export const BiodataContext = createContext();

export const BiodataProvider = ({ children }) => {
  const [biodata, setBiodata] = useState(null);

  const saveBiodata = (data) => {
    setBiodata(data);
    console.log("Data saved to context:", data);
  };

  return (
    <BiodataContext.Provider value={{ biodata, saveBiodata }}>
      {children}
    </BiodataContext.Provider>
  );
};
