"use client";
import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "motion/react";

type Values = {
  isProductBanner?: boolean;
  title: string;
  css?: string;
};

function ConnectSection({ isProductBanner, title, css }: Values) {
  return (
    <section className="w-full relative h-auto py-20  bg-[url(/connection.png)] flex items-center justify-center flex-col gap-2">
      <motion.h2
        initial={{
          transform: "translatey(100px)",
          opacity: 0,
          pathLength: 0,
        }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className={`   text-white ${css ? css : "text-p32 font-medium"} `}
      >
        {title}
      </motion.h2>
      {!isProductBanner && (
        <div className="w-full relative mt-5 h-auto flex md:flex-row flex-wrap items-center justify-center gap-5 lg:gap-10 flow-container ">
          <Link
            href={"melto:sales@pcd-flowmeter.com"}
            className=" w-fit relative text-webaccent h-auto transition-all duration-300 flex items-center gap-2 rounded-full  bg-white  justify-center px-8 py-2 text-p18 uppercase border-transparent border hover:border-white hover:bg-transparent hover:text-white"
          >
            <MdOutlineMailOutline className="text-[22px] " />
            Email
          </Link>
          <Link
            href={"https://wa.me/9773141989"}
            target="_black"
            className=" w-fit relative text-webaccent transition-all duration-300 h-auto flex items-centern gap-2 rounded-full bg-white  justify-center px-8 py-2 text-p18 uppercase border-transparent border hover:border-white hover:bg-transparent hover:text-white"
          >
            <FaWhatsapp className=" text-[22px] " />
            WhatsApp
          </Link>
          <Link
            href={"tel:+91 9773141989"}
            className=" w-fit relative text-webaccent h-auto  transition-all duration-300 flex items-center gap-2 rounded-full  bg-white justify-center px-8 py-2 text-p18 uppercase border-transparent border hover:border-white hover:bg-transparent hover:text-white"
          >
            <IoCallOutline className="text-[22px]" />
            call
          </Link>
        </div>
      )}
    </section>
  );
}

export default ConnectSection;
