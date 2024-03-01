"use client";
import MainCategory from "@/components/MainCategory";
import SubCategory from "@/components/SubCategory";
import Process from "@/components/Process";
import Brand from "@/components/Brand";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("./table");
  };
  return (
    <>
      <form
        action=""
        className="w-screen mx-auto h-[500px] max-w-[500px] flex flex-col justify-around "
      >
        <MainCategory />
        <SubCategory />
        <Process />
        <Brand />
      </form>
      <div className="btncontainer flex justify-center">
        <button
          type="click"
          className=" bg-black text-white cursor-pointer py-2 px-4 capitalize "
          onClick={clickHandler}
        >
          submit
        </button>
      </div>
    </>
  );
}
