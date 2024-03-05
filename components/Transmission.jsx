"use client";
import React from "react";
import { useGlobalContext } from "./Context";

export default function Transmission() {
  const { transmition, setTransmition, propsData } = useGlobalContext();
  const filteredData = propsData.filter(
    (prop) => prop.slug === "transmission-type"
  );
  return (
    <div className="selContainer ">
      <p>{filteredData[0]?.slug}</p>
      <select
        name="Transmission"
        value={transmition}
        onChange={(e) => setTransmition(e.target.value)}
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
