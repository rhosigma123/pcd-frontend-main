"use client";
import React from "react";
import PcdCard from "../common/PcdCard";
import { motion } from "motion/react";
function Pcdsection() {
  return (
    <section className="w-full relative h-auto py-10 md:py-10 flow-container flex flex-col gap-5">
      <motion.h2
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}
        viewport={{amount:0.5}}
        transition={{ type: "spring", ease: "easeOut", duration: 1 }}
        className=" text-h2 font-medium text-[#3D6164] text-center "
      >
        This is a Why Choose PCD Title
      </motion.h2>

      <section className="w-full relative flex items-center flex-col gap-2  ">
        <motion.div
          initial={{
            transform: "translatey(100px)",
            opacity: 0,
            pathLength: 0,
          }}
          viewport={{amount:0.5}}
          whileInView={{
            transform: "translatey(0px)",
            opacity: 1,
            pathLength: 1,
          }}
          transition={{ type: "spring", ease: "easeOut", duration: 2 }}
          className="w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center gap-2 "
        >
          <PcdCard
            color={"bg-[#F2E9FF]"}
            image={"/installation.png"}
            facts="+1200"
            title={"Installations"}
            descriprion={"Unique application needs within their respective industries."}
          />
          <PcdCard
            color={"bg-[#FFE0DF]"}
            image={"/industries.png"}
            facts="+17"
            title={"INDUSTRIES"}
            descriprion={"Unique application needs within their respective industries."}
          />
          <PcdCard
            color={"bg-[#D4EFFF]"}
            image={"/Happy.png"}
            facts="+150"
            title={"Happy CLIENTS"}
            descriprion={"Unique application needs within their respective industries."}
          />
        </motion.div>
        <motion.div
          initial={{
            transform: "translatey(100px)",
            opacity: 0,
            pathLength: 0,
          }}
          viewport={{amount:0.5}}
          whileInView={{
            transform: "translatey(0px)",
            opacity: 1,
            pathLength: 1,
          }}
          transition={{ type: "spring", ease: "easeOut", duration: 2.5 }}
          className="w-full relative grid justify-center items-center gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2   "
        >
          <PcdCard
            color={"bg-[#DAFFDF]"}
            titlecss="text-p32 font-semibold"
            title={"We are Recognized"}
            descriprion={
              "Unique application needs within their respective industries. Unique application needs within their respective industries."
            }
          />
          <PcdCard
            color={"bg-[#F2E9FF]"}
            titlecss="text-p32 font-semibold"
            title={"All in One Solution"}
            descriprion={
              "All in One Solution Unique application needs within their respective industries. Unique application needs within their respective industries."
            }
          />
        </motion.div>
      </section>
    </section>
  );
}

export default Pcdsection;
