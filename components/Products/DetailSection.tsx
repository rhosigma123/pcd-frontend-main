"use client";
import React from "react";
import CommonFrom from "../common/CommonFrom";
import Image from "next/image";
import Faqs from "../common/Faqs";
import { CgCheckO } from "react-icons/cg";
import DetailFilter from "./DetailFilter";
function DetailSection() {
  // const [sectioName, setSectionName] = useState("description");

  // useEffect(() => {
  //   console.log(sectioName, "ayfkfbhksdhf");
  // }, [sectioName]);

  return (
    <>
      <DetailFilter />
      <section className="w-full relative grid  grid-cols-1  gap-6 flow-container py-20">
        <div
          className="grid  grid-cols-1 md:grid-cols-2 gap-5  p-5  w-full  "
          id="description"
        >
          <div className="w-full relative h-auto flex flex-col gap-3">
            <h2 className="w-full relative h-auto text-p32 font-medium text-webaccent">
              Description
            </h2>
            <p className=" text-base font-medium text-webtext mt-5">
              Burak’s BA-Series thermal dispersion mass flow meters are
              accurate, easy to install, have no moving parts, and best suitable
              solution for measuring compressed air, oxygen, nitrogen, natural
              gas, LPG gas, propane, and most common gases
            </p>
            <p className=" text-base font-medium text-webtext ">
              Burak’s BA-Series thermal dispersion mass flow meters are
              accurate, easy to install, have no moving parts, and best suitable
              solution for measuring compressed air, oxygen, nitrogen, natural
              gas, LPG gas, propane, and most common gases
            </p>
            <p className=" text-base font-medium text-webtext ">
              Burak’s BA-Series thermal dispersion mass flow meters are
              accurate, easy to install, have no moving parts, and best suitable
              solution for measuring compressed air, oxygen, nitrogen, natural
              gas, LPG gas, propane, and most common gases
            </p>
          </div>
          <div className="w-full relative h-auto flex flex-col gap-3">
            <h2 className="w-full relative h-auto text-p32 font-medium text-webaccent">
              Working Principle
            </h2>
            <Image
              src={"/productDetailpage.png"}
              alt="Product image"
              height={600}
              width={700}
              className="w-full relative h-auto object-cover mt-5"
            />
            <p className=" text-base font-medium text-webtext mt-5">
              Burak’s BA-Series thermal flow sensor works on the thermal
              dispersion method and uses constant measuring technology. It
              operates by observing the cooling effect over a heated transducer
              because of the passage of gas molecules through a closed conduit
              pipe.
            </p>
            <p className=" text-base font-medium text-webtext ">
              There are two sensors one is a temperature sensor and the other is
              the heater sensor. The temperature sensor monitors the particular
              gas temperature whilst the heater transducer is maintained at a
              constant differential temperature by utilizing the specified
              current from the system to take care of its differential
              temperature.
            </p>
            <p className=" text-base font-medium text-webtext ">
              he thermal meter measures the direct mass flow of gas regardless
              of the change in temperature and pressure within the pipe.
            </p>
          </div>
        </div>

        <div
          className=" grid  grid-cols-1 md:grid-cols-2 gap-5  p-5  w-full  "
          id="features"
        >
          <div className="w-full realtive h-auto flex flex-col gap-2 items-start bg-[#FAFAFA] p-10  ">
            <h2 className="text-p32 font-medium text-webaccent">FEATURES</h2>
            <ul className="w-full relative flex flex-col gap-9 mt-5 ">
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base  text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base  text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
            </ul>
          </div>
          <div className="w-full realtive h-auto flex flex-col gap-2 items-start bg-[#FAFAFA] p-10 ">
            <h2 className="text-p32 font-medium text-webaccent">BENEFITS</h2>
            <ul className="w-full relative flex flex-col gap-9 mt-5 ">
              <li
                className="flex text-base  text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                It measures direct gas mass flow
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                It offers higher accuracy
              </li>
              <li
                className="flex text-base text-webtext  font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base  text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
            </ul>
          </div>
        </div>

        <div
          className=" grid  grid-cols-1 md:grid-cols-2 gap-5  p-5  w-full  "
          id="specification"
        >
          <div className="w-full realtive h-auto flex flex-col gap-2 items-start bg-[#FAFAFA] p-10  ">
            <h2 className="text-p32 font-medium text-webaccent">
              Mechanical Specification
            </h2>
            <ul className="w-full relative flex flex-col gap-9 mt-5 ">
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base  text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base  text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
              <li
                className="flex text-base text-webtext font-medium items-center gap-3
              w-full relative"
              >
                <CgCheckO className="text-[20px] text-green-500 cursor-pointer" />
                Large OLED Graphical display to see the mass and volumetric flow
                of gas
              </li>
            </ul>
          </div>
          <div className="w-full realtive h-auto flex flex-col gap-2 items-start  p-10 ">
            <h2 className="text-p32 font-medium text-webaccent">
              Electronics/Electrical Specifications
            </h2>
            <table className="w-full relative h-auto  flex flex-col gap-4 ">
              <tr className="w-full relative bg-[#FAFAFA] py-4 rounded-2xl  text-base text-webtext  px-4 grid grid-cols-2 ">
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
              </tr>
              <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl  text-base text-webtext grid grid-cols-2">
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
              </tr>
              <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl  text-base text-webtext grid grid-cols-2">
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
              </tr>
              <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl  text-base text-webtext grid grid-cols-2 ">
                <td>Island Trading</td>
                <td>Helen Bennett</td>
              </tr>
              <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl text-base text-webtext  grid grid-cols-2">
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
              </tr>
            </table>
          </div>
        </div>

        <div
          className="w-full realtive h-auto flex flex-col gap-2 items-start  p-10 "
          id="parameters"
        >
          <h2 className="text-p32 font-medium text-webaccent">
            Process parameters
          </h2>
          <table className="w-full relative h-auto  flex flex-col gap-4 ">
            <tr className="w-full relative bg-[#FAFAFA] py-4 rounded-2xl  text-base text-webtext  px-4 grid grid-cols-2 ">
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
            </tr>
            <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl  text-base text-webtext grid grid-cols-2">
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
            </tr>
            <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl  text-base text-webtext grid grid-cols-2">
              <td>Ernst Handel</td>
              <td>Roland Mendel</td>
            </tr>
            <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl  text-base text-webtext grid grid-cols-2 ">
              <td>Island Trading</td>
              <td>Helen Bennett</td>
            </tr>
            <tr className="w-full relative bg-[#FAFAFA] py-4 px-4 rounded-2xl text-base text-webtext  grid grid-cols-2">
              <td>Laughing Bacchus Winecellars</td>
              <td>Yoshi Tannamuri</td>
            </tr>
          </table>
        </div>

        <div className="w-full  gap-10  lg:grid-cols-[2fr_1fr] grid  h-fit ">
          <Faqs />

          <div className="w-full sticky top-20 h-fit ">
            <CommonFrom
              title={"Contact Us Today for"}
              css="bg-websecondary "
              subtitle="Thermal Mass Flow Meter"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailSection;
