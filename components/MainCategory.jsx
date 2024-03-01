"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
async function fetchData() {
  const response = await fetch(
    "https://staging.mazaady.com/api/v1/get_all_cats",
    {
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
    }
  );
  const responseData = await response.json();
  return responseData.data;
}

export default function MainCategory() {
  const { mainCategory, setMainCategory, data, setData } = useGlobalContext();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchData();
      setData(res);
    };

    fetchDataAsync();
  }, []);

  return (
    <>
      <div className="selContainer ">
        <p>main category*</p>
        <select
          name="mainCategory"
          value={mainCategory}
          onChange={(e) => setMainCategory(e.target.value)}
        >
          {data.categories.map((category) => {
            return (
              <option key={category.id} value={category.slug}>
                {category.slug}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
