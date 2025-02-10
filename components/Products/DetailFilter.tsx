import React from "react";

function DetailFilter() {
  return (
    <section className="w-full relative bg-[#F5F5F5] py-2 h-auto ">
      <div className="w-full relative h-auto grid grid-cols-2 lg:grid-cols-4  flow-container gap-10">
        <span className=" text-p20 font-medium border-b-2 py-2 border-transparent cursor-pointer hover:border-webaccent flex items-center justify-center  text-webaccent">
          Description
        </span>
        <span className=" text-p20 font-medium border-b-2 border-transparent cursor-pointer hover:border-webaccent  flex items-center justify-center  text-webaccent">
          Features
        </span>
        <span className=" text-p20 font-medium border-b-2 border-transparent cursor-pointer hover:border-webaccent  flex items-center justify-center  text-webaccent">
          Specifications
        </span>
        <span className=" text-p20 font-medium border-b-2 border-transparent cursor-pointer hover:border-webaccent  flex items-center justify-center  text-webaccent">
          Process parameters
        </span>
      </div>
    </section>
  );
}

export default DetailFilter;
