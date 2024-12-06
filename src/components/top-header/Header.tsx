import React from "react";
import Image from "next/image";
import search from "../../../public/search.png";
import Cart1 from "../../../public/Cart1.png";
import wishlist from "../../../public/wishlist.png";

export default function Header() {
  return (
    <>
      <header className="w-[1170px] h-[38px] top-[88px] left-[135px] flex gap-[148px]">
        <div className="w-[118px] h-6 mt-[47px] ">
          <div className="flex ml-[135px] text-[24px] font-[700] ">
            Exclusive
            <div className="ml-[190px]  h-6 text-[16px] font-[400]">
              <div className="flex text-[16px] font-{400} text-center">
                <ul className="w-[497px] h-6 flex gap-[38px]">
                  <li className="">Home</li>
                  <li className="">Contact</li>
                  <li className="">About</li>
                  <li className="">Sign Up</li>
                </ul>
                <div className="flex justify-center items-center gap-10  ">
                  <input
                    type="text"
                    placeholder="What are you looking for?      "
                    className=" bg-[#F5F5F5]  border-[3px] w-[240px]"
                  />
                  <Image src={search} alt="search" className="  -ml-[90px] " />
                  <div className="">
                    <Image
                      src={wishlist}
                      alt="heart"
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                  <div className="">
                    <Image
                      src={Cart1}
                      alt="cart"
                      width={24}
                      height={24}
                      className=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
