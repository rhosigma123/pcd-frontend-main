"use client";
import React from "react";
import ProductCard from "../common/ProductCard";
import Link from "next/link";
import { motion } from "motion/react";

type flowmetertype = {
  title?: string;
  css?: string;
  titlecss?: string;
};

const ProductData = [
  {
    name: "Thermal Mass Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
    link: "",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Flow meters", "all", "Mechanical"],
  },
  {
    name: "Thermal Mass Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
    link: "",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Flow meters", "all", "Rotameteres"],
  },
  {
    name: "Vortex Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
    link: "",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Level Switches", "all", "Rotameteres"],
  },
  {
    name: "Vortex Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
    link: "",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Level Switches", "all", "Rotameteres"],
  },
];

function FlowMeterSection({ title, titlecss }: flowmetertype) {
  return (
    <section className="w-full relative py-10 md:py-20  h-auto bg-websecondary">
      <div
        className={`w-full relative h-auto flex flex-col gap-6  ${
          titlecss && "items-center justify-center"
        } `}
      >
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
          className={`text-h2 font-medium text-webaccent  ${
            titlecss ? "text-start" : "text-center"
          } `}
        >
          {title}
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
          className="w-full flow-container relative h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {ProductData.map(
            (item, index) =>
              index <= 3 && (
                <ProductCard
                  name={item.name}
                  productId={item.productId}
                  description={item.description}
                  link={item.link}
                  image={item.image}
                  key={index}
                />
              )
          )}
        </motion.section>
        <Link
          href="/products"
          className="text-p18 px-5 hover:text-webaccent hover:bg-transparent hover:border-webaccent border border-transparent transition-all duration-300 py-2 w-fit mx-auto mt-6 font-medium text-white bg-webaccent  rounded-xl"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}

export default FlowMeterSection;
