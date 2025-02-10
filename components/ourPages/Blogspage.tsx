"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import ConnectSection from "@/components/Home/ConnectSection";
import NewsLetter from "@/components/common/NewsLetter";
import BlogsCard from "@/components/common/BlogsCard";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const blogsData = [
  {
    image: "/industreis-image7.png",
    createdby: "Lanjekar Saeed",
    createdat: "10 May, 2024",
    title: "Troubleshooting Common LPG Flow Meter Issues",
    description: "Optimize LPG usage with Burak's reliable flow meters. Ensure efficiency and accuracy in billing for households and industries globally.",
    slug: "",
  },
  {
    image: "/industries-image6.png",
    createdby: "Lanjekar Saeed",
    createdat: "10 May, 2024",
    title: "Discovering New Possibilities with a Flow Meter Manufacture",
    description: "Unlock innovative solutions with a leading flow meter manufacturer. Explore new possibilities and optimize your operations with cutting-edge flow meter technology.",
    slug: "",
  },
  {
    image: "/industries-image2.png",
    createdby: "Lanjekar Saeed",
    createdat: "10 May, 2024",
    title: "From Novice To Expert: Mastering The Art Of Thermal Mass Meter Suppliers!",
    description: "Discover the significance of thermal mass flow meters in industries. This guide teaches how they work, their advantages, and typical applications.",
    slug: "",
  },
];

function Blogpage() {
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
        title={"Blogs"}
        css="text-h2 font-semibold h-[200px] flex items-center justify-center "
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
              className={`px-4 py-2 rounded-[22px] transition-all duration-300 ease-in-out ${
                activeFilter === "All Projects"
                  ? "bg-webaccent text-white"
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
                className={`px-4 py-2 rounded-[22px] transition-all duration-300 ease-in-out ${
                  activeFilter === tag
                    ? "bg-webaccent text-white"
                    : "bg-websecondary text-webaccent"
                } hover:bg-webaccent hover:text-white hover:shadow-lg`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full relative h-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-1 ">
          {blogsData.map((item, index) => (
            <BlogsCard
              css="hover:bg-websecondary transition-all duration-300 "
              image={item.image}
              createdby={item.createdby}
              createdat={item.createdat}
              title={item.title}
              description={item.description}
              slug={item.slug}
              key={index}
            />
          ))}
        </div>
        <div className="w-full relative h-auto flex items-center gap-2 justify-end ">
          <button className="bg-websecondary border p-3 rounded-md border-webaccent ">
            <MdOutlineKeyboardDoubleArrowLeft className="text-primary text-[16px]" />
          </button>
          <span className=" relative flex  gap-1 w-auto ">
            <p className="text-sm rounded-md text-webtext font-medium border border-webtext px-4 flex items-center justify-center py-1">
              1
            </p>
            <p className="text-sm rounded-md text-webtext font-medium border  border-webtext px-4 flex items-center justify-center py-2">
              2
            </p>
            <p className="text-sm rounded-md text-webtext font-medium border  border-webtext px-4 flex items-center justify-center py-1">
              3
            </p>
            <p className="text-sm rounded-md text-webtext font-medium border  border-webtext px-4 flex items-center justify-center py-1">
              4
            </p>
          </span>
          <button className=" bg-websecondary border p-3 rounded-md border-webaccent  ">
            <MdKeyboardDoubleArrowRight className="text-primary text-[16px]" />
          </button>
        </div>
      </section>

      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter />
    </>
  );
}

export default Blogpage;
