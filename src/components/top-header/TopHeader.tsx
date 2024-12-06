import React from "react";
import Image from "next/image";
import DropDown from "../../../public/DropDown.png";

export default function TopHeader() {
  return (
    <>
      <div className="w-full h-12 bg-black text-white flex justify-center items-center">
        <div className="">
          <div className="flex gap-4 text-[14px] font-[400] ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <div className="w-[68px] text-[14px] h-6 font-[600]  text-center flex gap-6">
              ShopNow
              <div className="flex ml-[220px] text-[14px] font-[400]">
                English
                <Image src={DropDown} alt="dropdown" className="flex" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
