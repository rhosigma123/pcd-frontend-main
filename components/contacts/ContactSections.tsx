"use client";
import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { motion } from "motion/react";
function Contactsection() {
  return (
    <section className="w-full relative h-auto grid grid-cols-1 lg:grid-cols-2  flow-container py-10 md:py-20  gap-5 lg:gap-20 2xl:gap-40 ">
      <ContactForm />

      <motion.div
        initial={{
          transform: "translatex(100px)",
          opacity: 0,
          pathLength: 0,
        }}
        whileInView={{
          transform: "translatex(0px)",
          opacity: 1,
          pathLength: 1,
        }}
        transition={{ type: "spring", ease: "easeOut", duration: 2 }}
        className="w-full relative flex flex-col gap-2 md:gap-4 h-auto "
      >
        <h2 className="w-full relative text-p32 text-webaccent font-medium ">
          Head Office
        </h2>

        <span className="w-full relative h-auto flex flex-col gap-1 ">
          <h2 className="w-full text-p22 font-medium text-webtext  ">
            Address :
          </h2>
          <p className=" text-p18 font-normal text-webtext ">
            Plot No. 22, Rautara Industrial Estate, Beside Hanuman Hotel,
            Shil-Mahape Road, Shilphata, Thane 400 612
          </p>
        </span>
        <span className="w-full relative h-auto flex flex-col gap-1 ">
          <h2 className="w-full text-p22 font-medium text-webtext  ">
            Contact :
          </h2>
          <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
            <Link
              href={"tel:(+91) 9773141989"}
              className="text-p18 font-medium text-webtext "
            >
              (+91) 9773141989
            </Link>
            /
            <Link
              href={"tel:(+91) 9773141989"}
              className="text-p18 font-medium text-webtext "
            >
              (+91) 9773141989
            </Link>
          </div>
        </span>

        <div className="w-full relative flex  flex-wrap items-centergap-3 md:gap-5 ">
          <Link href={"/"} className="text-p20 font-medium text-webtext ">
            sales@pcd-flowmeter.com
          </Link>
          /
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p20 font-medium text-webtext "
          >
            sales.pcdpl@gmail.com
          </Link>
        </div>

        <div className="w-full relative flex  flex-wrap items-center gap-5 ">
          <Link
            href={"/"}
            className="text-p18 font-medium bg-webaccent rounded-full p-2 text-webtext "
          >
            <FaFacebook className="text-white text-[25px]" />
          </Link>
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-webaccent p-2 rounded-full text-webtext "
          >
            <FaTwitter className="text-[25px] text-white " />
          </Link>

          <Link
            href={"/"}
            className="text-p18 font-medium bg-webaccent rounded-full p-2 text-webtext "
          >
            <FaInstagram className="text-white text-[25px]" />
          </Link>
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-webaccent p-[10px] rounded-full text-webtext "
          >
            <BsLinkedin className="text-[20px] text-white " />
          </Link>
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-webaccent p-2 rounded-full text-webtext "
          >
            <FaYoutube className="text-[25px] text-white " />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Contactsection;
