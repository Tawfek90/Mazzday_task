"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";

export async function getModelData() {
  const response = await fetch(
    "https://staging.mazaady.com/api/v1/get-options-child/53 (option id)",
    {
      headers: {
        "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16",
      },
    }
  );
  const responseData = await response.json();
  return responseData.data;
}
export default function Model() {
  const { model, setModel, brand, modelData, setModelData, type, setType } =
    useGlobalContext();

  useEffect(() => {
    const fetchDataAsync = async () => {
      const res = await getModelData();
      setModelData(res);
    };

    fetchDataAsync();
  }, []);

  return (
    <>
      <div className="selContainer ">
        {brand && (
          <>
            <p>model</p>
            <select
              name="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              {modelData[0]?.options.map((model) => {
                return (
                  <option value={model.slug} key={model.id}>
                    {model.slug}
                  </option>
                );
              })}
            </select>
          </>
        )}
      </div>
      <div className="selContainer ">
        <p>type</p>
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Q3">Q3</option>
          <option value="Q3 sportback">Q3 sportback</option>
          <option value="Q4">Q4</option>
          <option value="Q4 sportback">Q4 sportback</option>
        </select>
      </div>
    </>
  );
}
