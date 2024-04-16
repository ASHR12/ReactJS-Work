// CMSDataContext.js
import React, { createContext, useContext } from "react";
import useFetchCMSData from "./fetchCMSData";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const { loading, cmsdata } = useFetchCMSData();
  return (
    <AppContext.Provider value={{ loading, cmsdata }}>
      {children}
    </AppContext.Provider>
  );
};

// use this hook in your components to access the CMS data
export const useGlobalContext = () => useContext(AppContext);
