"use client";
import React from "react";
import { useGlobalContext } from "./Context";
export default function Condition() {
  const { condition, setCondition, propsData } = useGlobalContext();
  const filteredData = propsData.filter((prop) => prop.slug === "condition");
  return (
    <div className="selContainer ">
      <p>{filteredData[0]?.slug}</p>
      <select
        name="fuelType"
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
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
