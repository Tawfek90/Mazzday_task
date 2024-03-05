"use client";
import MainCategory from "@/components/MainCategory";
import SubCategory from "@/components/SubCategory";
import Process from "@/components/Process";
import Brand from "@/components/Brand";
import { useRouter } from "next/navigation";
import Model from "@/components/Model";
import Transmission from "@/components/Transmission";
import FuelType from "@/components/FuelType";
import Condition from "@/components/Condition";
import Color from "@/components/Color";
import Cylinders from "@/components/Cylinders";
import Drive from "@/components/Drive";
import { useGlobalContext } from "@/components/Context";
import { useState } from "react";
export default function Home() {
  const [fill, setFill] = useState(true);
  const router = useRouter();
  const {
    mainCategory,
    subCategory,
    process,
    brand,
    transmition,
    fuelType,
    type,
    cylindersValue,
    condition,
    color,
    drive,
    model,
  } = useGlobalContext();
  const formData = [
    mainCategory,
    subCategory,
    process,
    brand,
    transmition,
    fuelType,
    type,
    cylindersValue,
    condition,
    color,
    drive,
    model,
  ];
  const clickHandler = () => {
    const result = formData.some((item) => !item);
    if (result) {
      setFill(false);
    } else {
      setFill(true);
      router.push("./table");
    }
  };

  return (
    <>
      <form
        action=""
        className="w-[50%] mx-auto min-w-[350px] my-4  max-w-[500px] flex flex-col justify-around "
      >
        <MainCategory />
        <SubCategory />
        <Process />
        <Brand />
        <Model />
        <Transmission />
        <FuelType />
        <Condition />
        <Color />
        <Cylinders />
        <Drive />
      </form>
      <div className="btncontainer flex justify-center flex-col text-center font-bold capitalize">
        {!fill && (
          <p className=" my-1 text-[#323232]">please fill in all inputs</p>
        )}
        <button
          type="click"
          className=" bg-black w-[150px] mx-auto text-white cursor-pointer py-2 px-4 capitalize max-w-[300] "
          onClick={clickHandler}
        >
          submit
        </button>
      </div>
    </>
  );
}
