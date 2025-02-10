"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Clientdata = [
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
  {
    title: "aditya birla",
    image: "/adityabirla.png",
  },
 
];

function ClientGrid() {
  const variablefortranstion = {
      initial:{
        opacity:0,
        y:20
      },
      animate: (index:number)=>({
        opacity:1,
        y:0,
        transition:{
          delay:0.05 * index,
        }
      })
  };

  return (
    <section className="w-full relative h-auto bg-websecondary   ">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center justify-center xl:grid-cols-6 gap-y-[45px]  flow-container w-full h-full relative py-20 ">
        {Clientdata.map((item,index) => (
          <motion.span
             initial="initial"
             animate="animate"
             variants={variablefortranstion}
             viewport={{
              once:true,
             }}
             custom={index}
          className="w-full relative h-auto " key={index} >
          <Image
            src={item.image}
            alt={item.title}
            height={600}
            width={600}
            className="p-4 h-[100px] w-[100px] object-cover bg-white self-center justify-self-center cursor-pointer"
          />
          </motion.span>
        ))}
      </div>
    </section>
  );
}

export default ClientGrid;
