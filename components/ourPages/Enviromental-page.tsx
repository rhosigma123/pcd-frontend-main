'use client'
import React from "react";
import Aboutbanner from "@/components/about/Aboutbanner";
import LeftSection from "@/components/Enviromental/LeftSection";
import NewsLetter from "@/components/common/NewsLetter";
import ConnectSection from "@/components/Home/ConnectSection";
import { motion } from "motion/react";

function Enviromentalpage() {
  return (
    <>
      <Aboutbanner
        title={"Environmental Sustainability Efforts"}
        isaboutBanner={true}
        image=""
      />
      <section className="w-full relative h-auto flex flex-col flow-container gap-10 md:gap-20 py-20">
        <span className="w-full relative flex flex-col gap-1 items-center justify-center">
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
          transition={{ type: "spring", ease: "easeOut", duration: 2 }} className="w-full relative h-auto text-p50 font-medium text-[#434343] text-center">
            Environmental Sustainability Efforts
          </motion.h2>
          <motion.p
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
          className="text-p20 font-medium text-webtext text-center ">
            Environmental stewardship is a core value at PCD. We are committed
            to reducing our environmental footprint through sustainable
            practices and innovative solutions. Our key environmental
            sustainability efforts include:
          </motion.p>
        </span>

        <section className="w-full relative h-auto flex items-start flex-col gap-5">
          <LeftSection isLeftSection={false} />
          <LeftSection isLeftSection={true} />
        </section>
      </section>
      <ConnectSection title={"feel free to contact us for any quries"} />
      <NewsLetter />
    </>
  );
}

export default Enviromentalpage;
