"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ConnectSection from "@/components/Home/ConnectSection";
import NewsLetter from "@/components/common/NewsLetter";
import ApplicationCard from "@/components/applications/applicationCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "motion/react";

function Applications() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  const allTags = [
    "Flow meters",
    "Level Gauges",
    "Level Switches",
    "Level Transmitters",
    "Rotameteres",
    "Mechanical",
  ];
  return (
    <>
      <ConnectSection
        title={"Our Products"}
        css="text-p50 font-semibold h-[200px] flex   items-center justify-center "
        isProductBanner={true}
      />
      <section className="w-full relative flow-container  flex flex-col gap-10   py-10">
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
                activeFilter === "All Projects"
                  ? "bg-webaccent text-white border-transparent"
                  : "bg-websecondary text-webaccent"
              } hover:bg-webaccent hover:text-white hover:shadow-lg`}
              onClick={() => setActiveFilter("All Projects")}
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
                className={`px-4 py-2 rounded-[22px] transition-all duration-300 ease-in-out  border border-webaccent ${
                  activeFilter === tag
                    ? "bg-webaccent text-white border-transparent"
                    : "bg-websecondary text-webaccent"
                } hover:bg-webaccent hover:text-white hover:shadow-lg`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

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
          className="text-p18 font-medium text-webtext text-center"
        >
          We provide high-precision instruments that cater to a diverse range of
          industries, ensuring accuracy, efficiency, and compliance in various
          applications. Our solutions are designed to enhance operational
          performance, optimize resource utilization, and maintain safety
          standards across multiple sectors.
        </motion.p>
      </section>
      <motion.section
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="w-full relative grid pb-20 flow-container grid-cols-1  sm:grid-cols-2  lg:grid-cols-2  gap-y-5  gap-x-5"
      >
        <ApplicationCard
          title={"Compressed Air"}
          image={"/flue-gas-image.png"}
          description={
            "Compressed air is crucial in industries but is costly compared to water, natural gas, and electricity. Efficient systems require tracking six key aspects: demand, storage, supply, air quality, distribution, and management, using tools like PCD compressed air flow meters to optimize and reduce energy losses."
          }
        />
        <ApplicationCard
          title={"LPG Gas"}
          image={"/flue-gas-image.png"}
          description={
            "LPG (Liquified Petroleum Gas), used for heating and cooking, powers various industrial applications like kilns, furnaces, and ovens. PCD LPG gas flow meters accurately measure LPG consumption in these processes, offering durability, strength, and precise flow readings."
          }
        />
        <ApplicationCard
          title={"Natural Gas"}
          image={"/natural-gas-image.png"}
          description={
            "Natural gas is a clean, efficient, and affordable energy source used widely in industries like metal, fertilizer, power generation, and food processing. Using natural gas flow meters optimizes usage in appliances such as furnaces, boilers, dryers, and generators."
          }
        />
        <ApplicationCard
          title={"Flue Gas"}
          image={"/flue-gas-image.png"}
          description={
            "Flue gases, emitted from industries like petroleum and power plants, contain pollutants such as nitrogen oxide and carbon monoxide. PCD insertion flow meters provide accurate, cost-effective solutions for measuring flue gas flow, crucial for process control and regulatory compliance."
          }
        />
        <ApplicationCard
          title={"Bio Gas"}
          image={"/natural-gas-image.png"}
          description={
            "Biogas, a renewable fuel composed of methane and carbon dioxide, is produced from organic waste and anaerobic digestion. It’s ideal for combined heat and power generation, and can be used in applications like cooking, heating, and electricity production. PCD biogas flow meters optimize flow measurement in bioprocess methane applications."
          }
        />
        <ApplicationCard
          title={"Flare Gas"}
          image={"/compresor.png"}
          description={
            "Gas flares, used in industries like oil refineries and biogas, burn waste gases to convert them into water vapor and carbon dioxide. PCD thermal mass flow meters excel in measuring flare gas flow, handling variable flow rates, density, pressure, and composition in both normal and upset conditions."
          }
        />
        <ApplicationCard
          title={"Natural Gas"}
          image={"/natural-gas-image.png"}
          description={
            "Natural gas is a clean, efficient, and affordable energy source used widely in industries like metal, fertilizer, power generation, and food processing. Using natural gas flow meters optimizes usage in appliances such as furnaces, boilers, dryers, and generators."
          }
        />
        <ApplicationCard
          title={"Flue Gas"}
          image={"/compresor.png"}
          description={
            "Flue gases, emitted from industries like petroleum and power plants, contain pollutants such as nitrogen oxide and carbon monoxide. PCD insertion flow meters provide accurate, cost-effective solutions for measuring flue gas flow, crucial for process control and regulatory compliance."
          }
        />
        <ApplicationCard
          title={"Bio Gas"}
          image={"/flue-gas-image.png"}
          description={
            "Biogas, a renewable fuel composed of methane and carbon dioxide, is produced from organic waste and anaerobic digestion. It’s ideal for combined heat and power generation, and can be used in applications like cooking, heating, and electricity production. PCD biogas flow meters optimize flow measurement in bioprocess methane applications."
          }
        />
      </motion.section>
      <ConnectSection title={"Feel free to contact us for any quries"} />
      <NewsLetter />
    </>
  );
}

export default Applications;
