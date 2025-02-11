"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function StorySection() {
  return (
    <section className="w-full Relative h-auto flex flex-col gap-3 items-center justify-center   py-10 md:py-20 flow-container">
      <motion.h2
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ type: "spring", ease: "easeOut", duration: 1 }}
        className="text-p50 font-medium text-webaccent text-center "
      >
        OUR STORY
      </motion.h2>
      <motion.p
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}

        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="text-p18 font-medium text-webtext text-center"
      >
       Founded in 2014, <strong>Process Control Devices</strong>  has established itself as a leading manufacturer and supplier of high-quality Measuring Instruments for the process industry. With a strong commitment to precision and innovation, we offer a diverse product range that includes digital flow meters, rotameters, level gauges, sight glasses, and strainers. Each product is meticulously crafted using premium-quality materials and manufactured in strict adherence to industry-approved standards, ensuring accuracy, durability, and reliability.
      </motion.p>
      {/* <p className='text-p18 font-medium text-webtext text-center
        '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione itaque perspiciatis nemo exercitationem, ex laudantium tenetur quasi commodi dolores animi delectus cum dolorum fugiat quo corporis modi ullam quis.</p> */}

      <Image
        src={"/OurStory.png"}
        alt="Our Story"
        height={400}
        width={400}
        className="w-full mt-3 mb-3 relative h-auto rounded-xl "
      />

      <motion.p
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}

        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="text-p18 font-medium text-webtext text-center"
      >
       Our mission is to provide solutions that meet the diverse demands of industries such as <strong> oil & gas </strong> , chemical processing, pharmaceuticals, water treatment, and manufacturing. We take pride in our ability to deliver customized and high-performance instruments that optimize operational efficiency for our clients.
      </motion.p>
      <motion.p
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}

        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="text-p18 font-medium text-webtext text-center
        "
      >
       At the core of our success is the visionary leadership of <strong>Saeed Lanjekar (left)</strong>  and <strong>  Sajid Sayyed (right) </strong> , whose expertise and dedication have propelled the company forward. Their unwavering commitment to quality, customer satisfaction, and technological advancement has earned us a strong reputation in the market. Under their guidance, Process Control Devices continues to expand its reach, gaining the trust of businesses across industries.
      </motion.p>
      <motion.p
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}

        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="text-p18 font-medium text-webtext text-center
        "
      >
      With a relentless pursuit of excellence, we remain focused on <strong>delivering superior products</strong> , <strong> maintaining transparent business practices, and fostering long-term relationships</strong> with our clients. As we move forward, we are dedicated to innovation, growth, and setting new standards in the field of industrial measuring instruments.
      </motion.p>
    </section>
  );
}

export default StorySection;
