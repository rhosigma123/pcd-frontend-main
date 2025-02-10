"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { IoIosCall } from "react-icons/io";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa6";
function FooterSection() {
  return (
    <>
      <footer className="w-full relative h-auto bg-websecondary py-20 ">
        <div className="w-full relative grid  grid-cols-2 gap-x-10 gap-y-10 sm:grid-cols-3 xl:grid-cols-4 flow-container">
          <AnimatePresence>
            <motion.div
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
              className="w-full relative flex flex-col items-start gap-5 "
            >
              <Image
                src={"/logo.png"}
                alt="Logo"
                width={300}
                height={400}
                className=" h-[50px] w-[100px] lg:h-[100px] lg:w-[200px] object-contain relative "
              />
              <Link
                href={"/"}
                className="flex items-center gap-3 w-full relative flex-wrap"
              >
                <IoIosCall className="text-[30px] p-[5px] flex items-center gap-1 rounded-full bg-webaccent text-white cursor-pointer" />
                <p className="text-p18 font-medium text-webaccent">
                  +91 8655587403    /
                </p>
                <p className="text-p18 font-medium text-webaccent">
                  +91 9773141989
                </p>
              </Link>
              <Link
                href={"melto:sales@pcd-flowmeter.com"}
                className="flex items-center gap-3 w-full relative flex-wrap"
              >
                <MdEmail className="text-[30px] p-[7px] rounded-full bg-webaccent text-white cursor-pointer" />
                <p className="text-p18 font-medium text-webaccent">
                    sales@pcd-flowmeter.com
                </p>
              </Link>

              <Link
                href={"/"}
                className="flex flex-col md:flex-row items-start  gap-3 w-full relative "
              >
                <FaLocationDot className="text-[30px] w-fit md:w-[60px] p-[7px] rounded-full bg-webaccent text-white cursor-pointer" />
                <p className="text-p18 font-medium text-webaccent">
                  Plot No.17, Survey No 69, Hissa No 2, Sagar Market, Behind
                  Mukesh Hotel, Shilphata Mumbra Thane 400612
                </p>
              </Link>
            </motion.div>
            <motion.ul
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
              className="flex flex-col gap-3 relative self-start justify-self-start sm:justify-self-center "
            >
              <li className="text-p22 font-semibold text-webtext  ">Socials</li>
              <Link
                href={"https://www.facebook.com/processcontroldevicess"}
                rel="nofollow noindex"
                className="text-p18 flex items-center gap-2 font-medium text-webtext mt-4 "
              >
                <span className="text-p18 font-medium bg-webaccent rounded-full p-2 text-webtext ">
                  <FaFacebook className="text-white text-[18px]" />
                </span>
                Facebook
              </Link>
              <Link
                href={"/"}
                className="text-p18 font-medium text-webtext  flex items-center gap-2  "
              >
                <span className="text-p18 font-medium bg-webaccent p-2 rounded-full text-webtext ">
                  <FaTwitter className="text-[18px] text-white " />
                </span>
                Twitter
              </Link>
              <Link
                href={"/"}
                className="text-p18 font-medium text-webtext flex items-center gap-2 "
              >
                <span className="text-p18 font-medium bg-webaccent rounded-full p-2 text-webtext ">
                  <FaInstagram className="text-white text-[18px]" />
                </span>
                Instagram
              </Link>
              <Link
                href={"https://www.linkedin.com/in/lanjekar-saeed-a0408567"}
                className="text-p18 font-medium text-webtext flex items-center gap-2 "
              >
                <span className="text-p18 font-medium bg-webaccent rounded-full p-2 text-webtext ">
                  <BsLinkedin className="text-[18px] text-white " />
                </span>
                LinkendIn
              </Link>
              <Link
                href={"/"}
                className="text-p18 font-medium text-webtext flex items-center gap-2 "
              >
                <span className="text-p18 font-medium bg-webaccent rounded-full p-2 text-webtext ">
                  <FaWhatsapp className="text-[18px] text-white " />
                </span>
                WhatsApp
              </Link>
            </motion.ul>
            <motion.ul
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
              className="flex flex-col gap-3 relative  self-start justify-self-start sm:justify-self-center"
            >
              <li className="text-p22 font-semibold text-webtext  ">
                Products
              </li>
              <li className="text-p18 font-medium text-webtext mt-4 ">Steel</li>
              <li className="text-p18 font-medium text-webtext ">Soft</li>
              <li className="text-p18 font-medium text-webtext ">Cotton</li>
              <li className="text-p18 font-medium text-webtext ">Wooden</li>
              <li className="text-p18 font-medium text-webtext ">Rubber</li>

              <li className="text-p18 font-medium text-webtext mt-4 ">
                Granite
              </li>
              <li className="text-p18 font-medium text-webtext ">Cotton</li>
              <li className="text-p18 font-medium text-webtext ">Rubber</li>
              <li className="text-p18 font-medium text-webtext ">Frozen</li>
              <li className="text-p18 font-medium text-webtext ">Concrete</li>
            </motion.ul>
            <motion.ul
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
              className="flex flex-col gap-3 relative self-start justify-self-start sm:justify-self-center "
            >
              <li className="text-p22 font-semibold text-webtext  ">
                Quick Links
              </li>
              <li className="text-p18 font-medium text-webtext mt-4 ">
                Feedback
              </li>
              <Link
                href={"/contact-us"}
                className="text-p18 font-medium text-webtext "
              >
                Contact Us
              </Link>
              <Link
                href={"/about-us"}
                className="text-p18 font-medium text-webtext "
              >
                About Us
              </Link>
              <Link
                href={"/about-us"}
                className="text-p18 font-medium text-webtext "
              >
                Success Stories
              </Link>
              <Link href={"/careers"} className="text-p18 font-medium text-webtext ">
                Career
              </Link>

              <Link
                href={"/blogs"}
                className="text-p18 font-medium text-webtext "
              >
                Blogs
              </Link>
              <Link
                href={"/enviromental-safety"}
                className="text-p18 font-medium text-webtext "
              >
               Enviromental Safety
              </Link>
              <Link
                href={"/health-safety"}
                className="text-p18 font-medium text-webtext "
              >
               Health Safety
              </Link>
              <Link
                href={"/quality-policy"}
                className="text-p18 font-medium text-webtext "
              >
               Quality Policy
              </Link>
              <Link href={"/privacy-policy"} className="text-p18 font-medium text-webtext ">
                Privacy Policy
              </Link>
              <li className="text-p18 font-medium text-webtext ">
                Terms & Conditions
              </li>
            </motion.ul>
          </AnimatePresence>
        </div>
      </footer>
      <section className="w-full bg-[#C3E4E7] relative h-auto  text-p18 font-webtext">
        <div className="w-full flow-container   flex flex-col md:flex-row items-center py-3  justify-between text-center ">
          <p className="text-p18 font-medium text-webaccent">
            Copyright © 2025 Process Controll Devices - All Rights Reserved
          </p>
          <p className="text-p18 font-medium text-webaccent">
            Developed By{" "}
            <Link
              href={"/sovorun.com"}
              target="_blank"
              className="text-p22 uppercase font-medium text-blue-700"
            >
              SOVORUN
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

export default FooterSection;
