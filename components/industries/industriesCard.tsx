import React from "react";
import Link from "next/link";

type industriesCardtype = {
  imageSrc: string;
  title: string;
  description: string;
  links?: string;
};

function IndustriesCard2({
  // links,
  description,
  title,
  imageSrc,
}: industriesCardtype) {
  return (
    <Link className=" h-[350px] sm:h-[350px] w-full relative group " href={` `}>
      <div
        className="flex-col flex  gap-[10px] bg-cover bg-no-repeat   overflow-hidden  rounded-[12px] h-[300px] sm:h-[350px]"
        style={{
          backgroundImage: `linear-gradient( 0deg, #000000 10.48%, #00000000 30.26%), 
                          linear-gradient(180deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
                          url(${imageSrc})`,
        }}
      >
        <h3 className="text-p22 px-[30px] text-white  font-medium absolute bottom-5 ">
          {title}
        </h3>

        <div className="w-full z-40 transition-all duration-500 group-hover:translate-y-0 p-[20px] justify-between translate-y-96   bg-[#5c7e80f5] flex items-start  flex-col h-full ">
          <span className="w-full relative h-full flex flex-col gap-5">
            <h2 className="text-p22 font-medium text-white  ">{title}</h2>
            <p className="text-p18 font-medium text-white line-clamp-4 ">
              {description}
            </p>
          </span>
          <Link
            href={"/"}
            className="text-p18 font-medium text-white border-b border-white  "
          >
            Learn More
          </Link>
        </div>
      </div>
    </Link>
  );
}

export default IndustriesCard2;
