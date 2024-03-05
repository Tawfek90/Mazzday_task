"use client";
import React from "react";
import { useGlobalContext } from "./Context";
export default function Cylinders() {
  const { cylindersValue, setCylindersValue, propsData } = useGlobalContext();
  const filteredData = propsData.filter((prop) => prop.slug === "cylinders");
  return (
    <div className="selContainer ">
      <p>{`${filteredData[0]?.slug} number`}</p>
      <select
        name="cylinders"
        value={cylindersValue}
        onChange={(e) => setCylindersValue(e.target.value)}
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
