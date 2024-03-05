"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

export default function Brand() {
  const { propsData, brand, setBrand } = useGlobalContext();

  return (
    <>
      <div className="selContainer capitalize p-2 ">
        <p className=" mb-2">brand</p>
        <select
          name="brand"
          value={brand}
          onChange={(e) => {
            setBrand(e.target.value);
          }}
          className=" capitalize border  rounded-[5px] py-1 w-[100%]"
        >
          {propsData[1]?.options.map((prop) => {
            return (
              <option value={prop.slug} key={prop.id} className=" capitalize">
                {prop.slug}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
