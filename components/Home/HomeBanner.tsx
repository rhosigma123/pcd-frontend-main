import React from "react";
import Image from "next/image";
import CommonFrom from "../common/CommonFrom";
import BannerContent from "../common/BannerContent";
function HomeBanner() {
  return (
    <section className="w-full relative h-[90vh] flex items-center flex-col justify-center bg-black ">
      <Image
        src={"/homebanner.jpg"}
        alt="Banner Imagen | flow Device"
        height={1500}
        width={1500}
        className="w-full relative h-full object-cover "
      />
      <section className="w-full absolute top-0 h-full flex flex-col items-center  justify-center bg-black/60 ">
        <div className="w-full grid lg:grid-cols-[2fr_1fr] gap-5 2xl:gap-32 items-center justify-center flow-container ">
          <BannerContent />

          <CommonFrom
            title={"Get a Free Quote"}
            fromtitlecss="text-p32 font-medium text-webaccent"
          />
          
        </div>
      </section>
    </section>
  );
}

export default HomeBanner;
