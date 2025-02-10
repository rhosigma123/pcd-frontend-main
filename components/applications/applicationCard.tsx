import React from "react";

import Image from "next/image";

type applicationtype={
  title:string,
  image:string,
  description:string,
}
function ApplicationCard( {title,image,description}:applicationtype ) {
  return (
    <section className="  max-w-[400px]  sm:max-w-full relative  grid h-fit   grid-cols-1 mx-auto md:grid-cols-[.6fr_2fr] p-3 rounded-xl transition-all duration-300 cursor-pointer hover:bg-websecondary gap-3">
      <Image
        src={image}
        alt="Compressed Air"
        height={400}
        width={400}
        className=" relative  object-cover h-[250px] md:h-full   w-full rounded-xl cursor-pointer"
      />
      <span className="w-full relative flex flex-col items-start gap-1">
        <h2 className="text-p22 font-semibold w-full text-webaccent ">
          {title}
        </h2>
        <p className="w-full relative h-auto text-p18 text-webtext font-normal line-clamp-4">
          {description}
        </p>
      </span>
    </section>
  );
}

export default ApplicationCard;
