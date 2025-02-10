"use client";
import { motion } from "motion/react";
import React from "react";
// motion

function ProductDetailBanner() {
  return (
    <section className="w-full relative h-auto bg-[url(/connection.png)] bg-cover bg-no-repeat ">
      <section className="w-full relative flow-container  grid items-center   justify-center grid-cols-[1fr_1fr] gap-3 h-[60vh]">
        <motion.div
          initial={{
            transform: "translatex(-100px)",
            opacity: 0,
            pathLength: 0,
          }}
          whileInView={{
            transform: "translatex(0px)",
            opacity: 1,
            pathLength: 1,
          }}
          transition={{ type: "spring", ease: "easeOut", duration: 2 }}
          className="flex flex-col items-start gap-1"
        >
          <h1 className="text-p18 font-medium text-white">Ayan</h1>
          <h2 className="text-p50 leading-[1.2] font-medium text-white">
            Thermal Mass Flow Meter
          </h2>
          <p className="text-p18 font-medium text-white mt-2">
            The BT-3000-G inline thermal mass flow meter with a flanged
            connection is designed to measure the flow of compressed air, blower
            air, nitrogen, natural gas, etc., in small pipes ranging from ½” up
            to 4” in size.
          </p>

          <button className="w-fit relative rounded-full px-10 py-2 bg-[#4CB151] text-white cursor-pointer mt-5">
            Get Qoute
          </button>
        </motion.div>
      </section>
    </section>
  );
}

export default ProductDetailBanner;
