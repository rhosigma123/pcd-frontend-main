"use client";
import React from "react";
import { motion } from "motion/react";
import Modal from "./Modal";

function BannerContent() {
  return (
    <motion.div
      initial={{ transform: "translateX(-100px)", opacity: 0, pathLength: 0 }}
      animate={{ transform: "translateX(0px)", opacity: 1, pathLength: 1 }}
      transition={{ type: "spring", ease: "easeOut", duration: 2 }}
      className="flex items-start flex-col gap-2"
    >
      <h1 className="w-full relative h-auto leading-[1.1] text-bannerfont font-semibold text-white  ">
        Precision That Powers Your Industry
      </h1>
      <p className="w-fit relative h-auto mt-1 text-p20 font-normal text-white ">
        Ensure accuracy and efficiency with our Flow Meters & Industrial
        Instruments designed for reliable performance in every application.
      </p>
      <Modal>
        <button className="w-fit bg-white mt-5  text-p18 relative h-auto flex px-5 rounded-full  hover:text-white hover:bg-transparent border border-white transition-all duration-300 font-medium  py-2 cursor-pointer">
          Get a Quote Today!
        </button>
      </Modal>
    </motion.div>
  );
}

export default BannerContent;
