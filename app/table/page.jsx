"use client";
import React from "react";
import { useGlobalContext } from "@/components/Context";

export default function Table() {
  const { mainCategory, subCategory, process, brand, transmition } =
    useGlobalContext();
  return (
    <table className="  border-2">
      <thead>
        <tr>
          <th>maincategory</th>
          <th>subcategory</th>
          <th>process</th>
          <th>brand</th>
          <th>transition</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{mainCategory}</td>
          <td>{subCategory}</td>
          <td>{process}</td>
          <td>{brand}</td>
          <td>{transmition}</td>
        </tr>
      </tbody>
    </table>
  );
}
