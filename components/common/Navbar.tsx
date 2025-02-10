import React from "react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <section className="w-full  bg-white sticky top-0 z-50 ">
      <nav className="w-full flow-container    h-auto flex justify-between items-center  ">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="Flow meter Logo"
            height={300}
            width={300}
            className="w-[120px] h-[80px] object-contain"
          />
        </Link>

        <ul className="w-fit relative h-full hidden md:flex items-center gap-2 lg:gap-3 xl:gap-5">
          <Link
            href={"/"}
            className="text-p18 font-medium text-[#434343] px-2 py-1"
          >
            Home
          </Link>
          <Link
            href={"/about-us"}
            className="text-p18 font-medium text-[#434343] px-2 py-1"
          >
            About
          </Link>
          <Link
            href={"/products"}
            className="text-p18 font-medium text-[#434343] px-2 py-1"
          >
            Products
          </Link>
          <Link
            href={"/industries"}
            className="text-p18 font-medium text-[#434343] px-2 py-1"
          >
            Industries
          </Link>
          <Link
            href={"/applications"}
            className="text-p18 font-medium text-[#434343] px-2 py-1"
          >
            Applications
          </Link>
        </ul>

        <Link
          href={"/contact-us"}
          className="w-fit relative  rounded-full hover:text-white hover:bg-webaccent transition-all duration-300 px-10 py-[7px] text-p18 font-medium border border-webaccent  text-webaccent"
        >
          Contact
        </Link>
      </nav>
    </section>
  );
}

export default Navbar;
