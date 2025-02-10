"use client";
import React from "react";
import BlogsCard from "../common/BlogsCard";
import Link from "next/link";
import { motion } from "motion/react";

type blogsSectiontype = {
  css?: string;
  title?: string;
  titlecss?: string;
};

const data = [
  {
    title: "Troubleshooting Common LPG Flow Meter Issues",
    image: "/secondnlog-image.png",
    createdat: "10 May, 2024",
    createdby: "Lanjekar Saeed",
    description:
      "Optimize LPG usage with Burak's reliable flow meters. Ensure efficiency and accuracy in billing for households and industries globally.",
    slug: "",
  },
  {
    title: "Discovering New Possibilities with a Flow Meter Manufacturer",
    image: "/industriesimage.png",
    createdat: "10 May, 2024",
    createdby: "Lanjekar Saeed",
    description:
      "Unlock innovative solutions with a leading flow meter manufacturer. Explore new possibilities and optimize your operations with cutting-edge flow meter technology.",
    slug: "",
  },
  {
    title:
      "From Novice To Expert: Mastering The Art Of Thermal Mass Meter Suppliers!",
    image: "/env-image1.png",
    createdat: "10 May, 2024",
    createdby: "Lanjekar Saeed",
    description:
      "Discover the significance of thermal mass flow meters in industries. This guide teaches how they work, their advantages, and typical applications.",
    slug: "",
  },
];
function BlogsSection({ css, title, titlecss }: blogsSectiontype) {
  return (
    <section
      className={`w-full relative py-10 h-auto  ${
        css ? css : "bg-websecondary"
      }`}
    >
      <div
        className={`w-full relative h-auto flex flex-col gap-3 flow-container  ${
          !titlecss && "items-center justify-center"
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
          className={` text-h2 font-medium text-webaccent ${titlecss} `}
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
          className="w-full  gap-5 justify-center items-center relative h-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 "
        >
          {data.map((item, index) => (
            <BlogsCard
              css="bg-websecondary hover:bg-white"
              image={item.image}
              createdby={item.createdby}
              createdat={item.createdat}
              title={item.title}
              description={item.description}
              slug={item.slug}
              key={index}
            />
          ))}
        </motion.section>

        <Link
          href="/products"
          className="text-p18 px-5 hover:text-webaccent hover:bg-transparent hover:border-webaccent border border-transparent transition-all duration-300 py-2 w-fit mx-auto mt-6 font-medium text-white bg-webaccent rounded-xl"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}

export default BlogsSection;
