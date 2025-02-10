'use client'
import React from "react";

import Image from "next/image";
import { motion } from "motion/react";

type benifitsTopic = {
  title: string;
};

type leftSection = {
  isLeftSection: boolean;
  headingtitle?: string;
  items?: benifitsTopic[];
};

function LeftSection({ isLeftSection, headingtitle, items }: leftSection) {
  return (
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
      className="w-full relative h-auto grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-5 md:gap-10"
    >
      {isLeftSection ? (
        <>
          <Image
            src={"/env-image1.png"}
            alt="Env Image"
            height={500}
            width={500}
            className="w-full relative h-[250px] md:h-full rounded-xl object-cover"
          />
          <div className="w-full relative flex flex-col gap-4 items-start justify-center ">
            <p className="text-p18 font-medium text-webaccent">
              {headingtitle}
            </p>
            <h2 className="text-p50 font-medium text-webtext   border-b border-black ">
              Renewable Energy
            </h2>
            <p className="text-base font-medium text-webtext ">
              We invest in renewable energy projects, such as solar and wind
              power, to reduce our reliance on fossil fuels and lower greenhouse
              gas emissions. Our goal is to transition to a more sustainable
              energy mix and promote clean energy adoption.
            </p>

            <ul className="w-full relative h-auto flex flex-col items-start gap-2 px-4 text-webtext">
              {items?.map((item, index) => (
                <li className="text-webtext font-medium list-disc" key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="w-full relative flex flex-col gap-4 items-start justify-center ">
            <p className="text-p18 font-medium text-webtext ">{headingtitle}</p>

            <h2 className="text-p50 font-medium text-webtext   border-b border-black ">
              Renewable Energy
            </h2>
            <p className="text-base font-medium text-webtext ">
              We invest in renewable energy projects, such as solar and wind
              power, to reduce our reliance on fossil fuels and lower greenhouse
              gas emissions. Our goal is to transition to a more sustainable
              energy mix and promote clean energy adoption.
            </p>
            <ul className="w-full relative h-auto flex flex-col gap-1 px-4 text-webtext">
              {items?.map((item, index) => (
                <li className="text-webtext font-medium list-disc" key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={"/env-image1.png"}
            alt="Env Image"
            height={500}
            width={500}
            className="w-full relative h-[250px] md:h-full rounded-xl object-cover"
          />
        </>
      )}
    </motion.section>
  );
}

export default LeftSection;
