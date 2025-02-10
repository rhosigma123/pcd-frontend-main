'use client'
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

function OurCertifications() {
  return (
    <section className="w-full flow-container relative h-auto flex flex-col gap-5 py-10 md:py-20">
      <h2 className="text-h2 font-medium text-webaccent  text-center">
        Certifications
      </h2>

      <motion.div
        initial={{ transform: "translatey(100px)", opacity: 0, pathLength: 0 }}
        whileInView={{
          transform: "translatey(0px)",
          opacity: 1,
          pathLength: 1,
        }}
        viewport={{ once: true }}
        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="w-full h-auto justify-between items-center  grid grid-cols-3 gap-5 "
      >
        <div className="w-full relative h-full flex flex-col items-center justify-center gap-5">
          <p className="text-p22 font-meidu">ISO Certificate</p>
          <Image
            src={"/ISOCertificets.png"}
            alt="ISO Certificate"
            height={1000}
            width={1000}
            className="w-full relative h-auto object-cover"
          />
        </div>
        <div className="w-full relative h-full flex flex-col items-center justify-center gap-5">
          <p className="text-p22 font-meidu">MSME Certificate</p>
          <Image
            src={"/MSMECertificate.png"}
            alt="MSME Certificate"
            height={1000}
            width={1000}
            className="w-full relative h-auto object-cover"
          />
        </div>
        <div className="w-full relative h-full flex flex-col items-center justify-center gap-5">
          <p className="text-p22 font-meidu">IEC Certificate</p>
          <Image
            src={"/IECCertificate.png"}
            alt="IEC Certificate"
            height={1000}
            width={1000}
            className="w-full relative h-auto object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default OurCertifications;
