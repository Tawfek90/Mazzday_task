"use client";

import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

export default function SubCategory() {
  const { mainCategory, data, subCategory, setSubCategory } =
    useGlobalContext();

  const filtredData = data.categories.filter(
    (category) => category.slug === mainCategory
  );

  return (
    <>
      <div className="selContainer ">
        <p>sub category*</p>
        <select
          name="sub"
          value={subCategory}
          onChange={(e) => {
            setSubCategory(e.target.value);
          }}
        >
          {filtredData[0]?.children.map((item) => {
            return (
              <option value={item.slug} key={item.id}>
                {item.slug}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
