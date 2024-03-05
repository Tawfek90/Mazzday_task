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
  const [model, setModel] = useState("");
  const [modelData, setModelData] = useState([]);
  const [type, setType] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [cylindersValue, setCylindersValue] = useState("");
  const [drive, setDrive] = useState("");
  const [other, setOther] = useState("");

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
        model,
        setModel,
        modelData,
        setModelData,
        type,
        setType,
        fuelType,
        setFuelType,
        condition,
        setCondition,
        color,
        setColor,
        cylindersValue,
        setCylindersValue,
        drive,
        setDrive,
        other,
        setOther,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
