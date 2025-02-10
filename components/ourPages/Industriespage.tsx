"use client";
import React from "react";
import ConnectSection from "@/components/Home/ConnectSection";
import IndustriesCard2 from "@/components/industries/industriesCard";
import NewsLetter from "@/components/common/NewsLetter";
import { motion } from "motion/react";

function IndustriesPage() {
  return (
    <>
      <ConnectSection
        title={"Industries We Serve"}
        css="text-p50 font-semibold h-[200px] flex items-center justify-center "
        isProductBanner={true}
      />
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
        className="w-full relative  h-auto flex flex-col gap-10 flow-container py-10 md:py-10"
      >
        <p className="text-p18 font-medium text-webtext text-center ">
          At Process Control Devices (PCD), we cater to a wide range of
          industries by providing high-precision flow measurement and process
          control solutions. Our products are designed to enhance efficiency,
          accuracy, and reliability across multiple industrial applications.
        </p>

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
          className="w-full relative h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10  "
        >
          <IndustriesCard2
            imageSrc={"/industriesimage.png"}
            title={"Food Processing Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industires-image1.png"}
            title={"Pharmaceutical Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industries-image5.png"}
            title={"Pulp & Paper Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industries-image2.png"}
            title={"Automotive Industry"}
            description={""}
          />

          <IndustriesCard2
            imageSrc={"/industires-image1.png"}
            title={"Pharmaceutical Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industries-image4.png"}
            title={"Oil & Gas Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industries-image6.png"}
            title={"Steel Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industries-image7.png"}
            title={"Water & Waste Water Industry"}
            description={""}
          />
        </motion.section>
        <p className="text-p18 font-medium text-webtext text-center ">
          At Process Control Devices (PCD), we cater to a wide range of
          industries by providing high-precision flow measurement and process
          control solutions.
        </p>
      </motion.section>
      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter />
    </>
  );
}

export default IndustriesPage;
