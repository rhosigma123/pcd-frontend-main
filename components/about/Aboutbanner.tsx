"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "motion/react";

type aboutbannertype = {
  title: string;
  isaboutBanner: boolean;
  image: string;
};

function Aboutbanner({ title, isaboutBanner, image }: aboutbannertype) {
  // const { scrollYProgress } = useScroll(); // Get scroll progress
  // const y = useTransform(scrollYProgress, [0, 1], [-10, 50]); // Move up

  return (
    <section className="w-full relative h-auto sm:h-[40vh] md:h-[60vh] lg:h-[90vh] flex items-center ">
      {isaboutBanner ? (
        <Swiper
          autoplay={{
            delay: 2000,
          }}
          speed={2000}
          effect="fade"
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full relative max-h-full ">
            <Image
              src={"/aboutimage.png"}
              alt=""
              height={500}
              width={600}
              className="w-full relative h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full relative h-full ">
            <Image
              src={"/aboutimage.png"}
              alt=""
              height={900}
              width={900}
              className="w-full relative h-full object-cover "
            />
          </SwiperSlide>
          <SwiperSlide className="max-w-full relative h-full ">
            <Image
              src={"/aboutimage.png"}
              alt=""
              height={900}
              width={900}
              className="w-full relative h-full object-cover "
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Image
          src={`${image}`}
          alt="banner image"
          height={800}
          className="w-full relative h-full object-cover"
          width={700}
        />
      )}

      <motion.div className="w-full absolute top-0 left-0 right-0 z-10 flex items-center  flex-col  justify-end h-full  py-10  bg-gradient-to-t from-black/70 from-5% via-transparent via-90% ">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="50"
          viewBox="0 0 46 64"
          fill="none"
          initial={{
            opacity: 0,
            y: 0,
            scale: 0.9,
          }}
          animate={{ 
            y:-20,
            opacity:1

           }}
          transition={{ repeat: Infinity, duration: 2 ,ease:"easeIn" }}
        >
          <path
            d="M2.62964 22L23 2L43.3704 22M2.62964 42L23 22L43.3704 42M2.62964 62L23 42L43.3704 62"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>

        <motion.h1
          initial={{
            transform: "translatey(50px)",
            opacity: 0,
            pathLength: 0,
          }}
          whileInView={{
            transform: "translatey(0px)",
            opacity: 1,
            pathLength: 1,
          }}
          transition={{ type: "spring", ease: "easeOut", duration: 2 }}
          className="text-p50 font-light text-white  "
        >
          {title}
        </motion.h1>
      </motion.div>
    </section>
  );
}

export default Aboutbanner;
