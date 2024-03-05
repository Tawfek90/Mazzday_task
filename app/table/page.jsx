"use client";
import React from "react";
import { useGlobalContext } from "@/components/Context";

export default function Table() {
  const {
    mainCategory,
    subCategory,
    process,
    brand,
    transmition,
    other,
    fuelType,
    type,
    cylindersValue,
    condition,
    color,
    drive,
    model,
  } = useGlobalContext();
  return (
    <table className="  border-2">
      <thead>
        <tr>
          <th>maincategory</th>
          <th>subcategory</th>
          <th>process</th>
          {other && <th>other_value</th>}
          <th>brand</th>
          {brand && <th>model</th>}
          <th>type</th>
          <th>Transmission-Type</th>
          <th>Fuel-Type</th>
          <th>Condition</th>
          <th>Color</th>
          <th>Cylinders Number</th>
          <th>drive</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{mainCategory}</td>
          <td>{subCategory}</td>
          <td>{process}</td>
          {other && <td>{other}</td>}
          <td>{brand}</td>
          <td>{model}</td>
          <td>{type}</td>
          <td>{transmition}</td>
          <td>{fuelType}</td>
          <td>{condition}</td>
          <td>{color}</td>
          <td>{cylindersValue}</td>
          <td>{drive}</td>
        </tr>
      </tbody>
    </table>
  );
}
