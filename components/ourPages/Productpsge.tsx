"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import ConnectSection from "@/components/Home/ConnectSection";
import ProductCard from "@/components/common/ProductCard";
import NewsLetter from "@/components/common/NewsLetter";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const ProductData = [
  {
    name: "Thermal Mass Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
    link: "thermal-mass",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Flow meters", "all", "Mechanical"],
  },
  {
    name: "Thermal Mass Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
      link: "thermal-mass",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Flow meters", "all", "Rotameteres"],
  },
  {
    name: "Vortex Flow Meter",
    productId: "BT-3000-G",
    description:
      "Burak Metering offers a series of digital flow meters. One of its types is the thermal mass flow meter.",
      link: "thermal-mass",
    image: "",
    css: " border border-transparent hover:border-secondary bg-secondary p-3",
    tags: ["Level Switches", "all", "Rotameteres"],
  },
];

function Productpage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const allTags = [
    "Flow meters",
    "Level Gauges",
    "Level Switches",
    "Level Transmitters",
    "Rotameteres",
    "Mechanical",
  ];

  const filterdata = ProductData.filter((item) =>
    item.tags.includes(activeFilter)
  );

  return (
    <>

      <ConnectSection
        title={"Our Products"}
        css="text-p50 font-semibold h-[200px] flex items-center justify-center "
        isProductBanner={true}
      />
      <section className="w-full relative flow-container flex flex-col gap-10 py-10">
        <Swiper
          slidesPerView={"auto"}
          className="mySwiper w-full    "
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="min-w-[50px] px-2 max-w-fit relative h-fit">
            <button
              className={`px-4 py-2 rounded-[22px] transition-all duration-300 ease-in-out border border-webaccent ${
                activeFilter === "all"
                  ? "bg-webaccent text-white  "
                  : "bg-websecondary text-webaccent border-transparent"
              } hover:bg-webaccent hover:text-white hover:shadow-lg`}
              onClick={() => setActiveFilter("all")}
            >
              All
            </button>
          </SwiperSlide>
          {allTags.map((tag, index) => (
            <SwiperSlide
              className="min-w-[50px] px-2 max-w-fit  relative h-fit"
              key={index}
            >
              <button
                key={tag}
                className={`px-4 py-2 rounded-[22px] transition-all duration-300 ease-in-out border border-webaccent ${
                  activeFilter === tag
                    ? "bg-webaccent text-white"
                    : "bg-websecondary text-webaccent border-transparent"
                } hover:bg-webaccent hover:text-white hover:shadow-lg`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
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
          className="w-full relative min-h-[50vh]  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4   gap-5 "
        >
          {filterdata.map((item, index) => (
            <ProductCard
              css="border border-transparent hover:border-secondary bg-secondary p-3"
              name={item.name}
              productId={item.productId}
              description={item.description}
              link={item.link}
              image={item.image}
              key={index}
            />
          ))}
        </motion.div>
      </section>

      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter />
    </>
  );
}

export default Productpage;
