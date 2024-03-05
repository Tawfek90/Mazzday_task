"use client";
import React from "react";
import { useGlobalContext } from "./Context";
export default function Color() {
  const { color, setColor, propsData } = useGlobalContext();
  const filteredData = propsData.filter((prop) => prop.slug === "color");
  return (
    <div className="selContainer ">
      <p>{filteredData[0]?.slug}</p>
      <select
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
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
