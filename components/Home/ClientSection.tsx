"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
function ClientSection() {
  return (
    <section className="w-full relative px-5 md:px-10  h-auto py-5 bg-websecondary ">
      {/* <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
         
          modules={[Autoplay]}
          className="mySwiper w-full  relative flow-container"
        >
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/cipla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/ashok-leyland.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/dabur.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/hockhard.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/jws.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/hinduja.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
        </Swiper> */}

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
     
        autoplay={{
            delay:0
        }}
        speed={2000}
        loop={true}
        modules={[Pagination,Autoplay]}
        className="mySwiper   w-full realtive h-auto swiper-container-free-mode"
      >
        <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/cipla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/ashok-leyland.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/dabur.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/hockhard.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/jsw.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/hinduja.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
          <SwiperSlide className="max-w-fit  relative h-auto bg-white p-5">
                <Image src={"/adityabirla.png"} alt="Client Image" height={500} width={500} className="h-[50px] w-[100px] cursor-pointer "/>            
          </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ClientSection;
