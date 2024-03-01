"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

export default function Brand() {
  const { propsData, process, brand, setBrand, transmition, setTransmition } =
    useGlobalContext();
  const filtredData =
    process === "other"
      ? null
      : propsData.filter((prop) => prop.slug === process);

  return (
    <>
      <div className="selContainer capitalize p-2 ">
        <p className=" mb-2">brand</p>
        {
          <select
            name="brand"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            className=" capitalize border  rounded-[5px] py-1 w-[100%]"
          >
            {process !== "other" &&
              filtredData[0]?.options.map((option) => {
                return (
                  <option
                    value={option.slug}
                    key={option.id}
                    className=" capitalize"
                  >
                    {option.slug}
                  </option>
                );
              })}
          </select>
        }
      </div>

      <div className="selContainer ">
        <p>transmition</p>
        <select
          name="Transmition"
          value={transmition}
          onChange={(e) => setTransmition(e.target.value)}
        >
          <option value="cash">cash</option>
          <option value="visa">visa</option>
        </select>
      </div>
    </>
  );
}
