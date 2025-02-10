"use client";
import React from "react";
import IndustriesCard from "../common/IndustriesCard";
import { motion } from "motion/react";

// const IndustriesData = [
//   { title: "Oil & Gas", image: "" },
//   { title: "Textile", image: "/texttile.png" },
//   { title: "Chemical", image: "/flask.png" },

//   { title: "Pharma", image: "/pharma.png" },
//   { title: "Automotive", image: "/car.png" },
//   { title: "PowerPlant", image: "/powerplant.png" },

//   { title: "Waste Water", image: "/waste-management.png" },
//   { title: "Food Process", image: "/food-process.png" },
//   { title: "Pulp & Paper", image: "/plup-paper.png" },

//   { title: "Steel Industry", image: "/steel.png" },
//   { title: "Marine", image: "/marine.png" },
//   { title: "Forging", image: "/forging.png" },
// ];

function IndustriesSection() {
  return (
    <section className="w-full relative py-10 h-auto bg-white">
      <div className="w-full relative h-auto flex flex-col gap-6 items-center justify-center ">
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
          transition={{ type: "spring", ease: "easeOut", duration: 1 }}
          className=" text-h2 font-medium text-webaccent "
        >
          Industries we serve
        </motion.h2>
        <motion.section
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
          className="w-full flow-container gap-y-10 justify-center items-center relative h-auto grid  grid-cols-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5"
        >
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Oil & Gas"}
            image={"/gas.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Textile"}
            image={"/texttile.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Chemical"}
            image={"/flask.png"}
          />
          <IndustriesCard
            iconcss="h-[60px] w-[70px]"
            title={"Pharma"}
            image={"/pharma.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[80px]"
            title={"Automotive"}
            image={"/car.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"PowerPlant"}
            image={"/powerplant.png"}
          />

          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Waste Water"}
            image={"/waste-management.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Food Process"}
            image={"/food-process.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Pulp & Paper"}
            image={"/plup-paper.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Steel Industry"}
            image={"/steel.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Marine"}
            image={"/marine.png"}
          />
          <IndustriesCard
            iconcss="h-[50px] w-[60px]"
            title={"Forging"}
            image={"/forging.png"}
          />
        </motion.section>
      </div>
    </section>
  );
}

export default IndustriesSection;
