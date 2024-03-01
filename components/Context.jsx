"use client";

import React, { useContext, useState } from "react";
const AppContext = React.createContext();
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default function Context({ children }) {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [data, setData] = useState({ categories: [] });
  const [propsData, setPropsData] = useState([]);
  const [process, setProcess] = useState("");
  const [brand, setBrand] = useState("");
  const [transmition, setTransmition] = useState("");
  return (
    <AppContext.Provider
      value={{
        mainCategory,
        setMainCategory,
        subCategory,
        setSubCategory,
        data,
        setData,
        propsData,
        setPropsData,
        process,
        setProcess,
        brand,
        setBrand,
        transmition,
        setTransmition,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
