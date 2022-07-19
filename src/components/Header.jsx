import React from "react";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <>
      <div className="bg-black w-full h-[200px] absolute -z-10"></div>
      <div className="flex justify-center items-center mt-20 mb-7 gap-3 w-full">
        <Logo />
        <h1 className=" font-bold text-5xl text-[#a2a2a2]">
          <span className="text-[#F2BB16]">to</span>do
        </h1>
      </div>
    </>
  );
};
