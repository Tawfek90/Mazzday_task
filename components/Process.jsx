"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
async function fetchData() {
  const response = await fetch(
    "https://staging.mazaady.com/api/v1/properties?cat=13 (sub-category id)",
    {
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
    }
  );
  const responseData = await response.json();
  return responseData.data;
}
export default function Process() {
  const { propsData, setPropsData, process, setProcess, other, setOther } =
    useGlobalContext();
  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await fetchData();
      setPropsData(res);
    };

    fetchDataAsync();
  }, []);

  return (
    <>
      <div className="selContainer ">
        <p>process type</p>
        <select
          name="process_Type"
          value={process}
          onChange={(e) => {
            setProcess(e.target.value);
          }}
        >
          {propsData[0]?.options.map((prop) => {
            return (
              <option value={prop.slug} key={prop.id}>
                {prop.slug}
              </option>
            );
          })}

          <option value="other">other</option>
        </select>
      </div>

      {process === "other" && (
        <input
          type="text"
          placeholder="please enter what you search for"
          name=""
          value={other}
          onChange={(e) => setOther(e.target.value)}
          className=" my-2 p-1"
        />
      )}
    </>
  );
}
