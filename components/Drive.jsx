"use client";
import React from "react";
import { useGlobalContext } from "./Context";
export default function Drive() {
  const { drive, setDrive, propsData } = useGlobalContext();
  const filteredData = propsData.filter((prop) => prop.slug === "drive");
  return (
    <div className="selContainer ">
      <p>{filteredData[0]?.slug}</p>
      <select
        name="drive"
        value={drive}
        onChange={(e) => setDrive(e.target.value)}
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
