"use client";
import React from "react";
import { useGlobalContext } from "./Context";

export default function FuelType() {
  const { fuelType, setFuelType, propsData } = useGlobalContext();
  const filteredData = propsData.filter((prop) => prop.slug === "fuel-type");
  return (
    <div className="selContainer ">
      <p>{filteredData[0]?.slug}</p>
      <select
        name="fuelType"
        value={fuelType}
        onChange={(e) => setFuelType(e.target.value)}
      >
        {filteredData[0]?.options.map((item) => {
          return (
            <option value={item.slug} key={item.id}>
              {item.slug}
            </option>
          );
        })}
      </select>
    </div>
  );
}
