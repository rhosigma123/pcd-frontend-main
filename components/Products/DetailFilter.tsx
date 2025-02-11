"use client";
import React, { useEffect, useState } from "react";



function DetailFilter() {
  const [sectionName, serSectionName] = useState("descri");

  useEffect(() => {
    const section = document.querySelector(`#${sectionName}`);
    console.log(section, "filter data");
    section?.scrollIntoView({behavior:"smooth"});
  }, [sectionName]);

  return (
    <section className="w-full relative bg-[#F5F5F5] py-2 h-auto ">
      <div className="w-full relative h-auto grid grid-cols-2 lg:grid-cols-4  flow-container gap-10">
        <span
          className={` text-p20 font-medium border-b-2 py-2  cursor-pointer hover:border-webaccent flex items-center justify-center  text-webaccent ${sectionName=="description"  ? "border-webaccent":"border-transparent"}  `}
          onClick={() => serSectionName("description")}
        >
          Description
        </span>
        <span
          className={` text-p20 font-medium border-b-2 border-transparent cursor-pointer hover:border-webaccent  flex items-center justify-center  text-webaccent ${sectionName=="features"  ? "border-webaccent":"border-transparent"} `}
          onClick={() => serSectionName("features")}
        >
          Features
        </span>
        <span
          className={` text-p20 font-medium border-b-2 border-transparent cursor-pointer hover:border-webaccent  flex items-center justify-center  text-webaccent`}
          onClick={() => serSectionName("specification")}
        >
          Specifications
        </span>
        <span
          className=" text-p20 font-medium border-b-2 border-transparent cursor-pointer hover:border-webaccent  flex items-center justify-center  text-webaccent"
          onClick={() => serSectionName("parameters")}
        >
          Process parameters
        </span>
      </div>
    </section>
  );
}

export default DetailFilter;
