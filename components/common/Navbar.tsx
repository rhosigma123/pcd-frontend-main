"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import ModileNav from "./ModileNav";
function Navbar() {
  const route = usePathname();
  return (
    <section className="w-full  bg-white sticky top-0 z-50 ">
      <nav className="w-full flow-container    h-auto flex justify-between items-center  ">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Flow meter Logo"
            height={100}
            width={300}
            loading="eager"
            className="w-[120px] py-3 h-[80px] object-contain"
          />
        </Link>

        <ul className="w-fit relative h-full hidden lg:flex items-center gap-2 lg:gap-3 xl:gap-5">
          <Link
            href={"/"}
            className={`text-p18 font-medium text-[#434343] px-5 py-2 ${
              route == "/"
                ? "bg-webaccent  text-white rounded-full"
                : "bg-transparent "
            }`}
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className={`text-p18 font-medium text-[#434343] px-5 py-2  ${
              route == "/about-us"
                ? "bg-webaccent  text-white rounded-full"
                : "bg-transparent "
            } `}
          >
            About
          </Link>
          <Link
            href={"/products"}
            className={`text-p18 font-medium text-[#434343] px-5 py-2  ${
              route == "/products"
                ? "bg-webaccent  text-white rounded-full"
                : "bg-transparent "
            } `}
          >
            Products
          </Link>
          <Link
            href={"/industries"}
            className={`text-p18 font-medium text-[#434343] px-5 py-2  ${
              route == "/industries"
                ? "bg-webaccent  text-white rounded-full"
                : "bg-transparent "
            }`}
          >
            Industries
          </Link>
          <Link
            href={"/applications"}
            className={`text-p18 font-medium text-[#434343] px-5 py-2 ${
              route == "/applications"
                ? "bg-webaccent  text-white rounded-full"
                : "bg-transparent "
            } `}
          >
            Applications
          </Link>
        </ul>

        <Link
          href={"/contact-us"}
          className="w-fit relative  hidden lg:flex   rounded-full hover:text-white hover:bg-webaccent transition-all duration-300 px-10 py-[7px] text-p18 font-medium border border-webaccent  text-webaccent"
        >
          Contact
        </Link>


        <span className="w-fit h-fit relative cursor-pointer lg:hidden flex">
        <ModileNav>
          <button className="   items-center justify-center w-fit relative h-auto p-2 rounded-md bg-webaccent text-white cursor-pointer">
            <RxHamburgerMenu className="text-[25px] text-white " />
          </button>
        </ModileNav>
        </span>

      </nav>
    </section>
  );
}

export default Navbar;
