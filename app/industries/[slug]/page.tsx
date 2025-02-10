import React from "react";
import ConnectSection from "@/components/Home/ConnectSection";
import IndustriesCard2 from "@/components/industries/industriesCard";
import Navbar from "@/components/common/Navbar";
import NewsLetter from "@/components/common/NewsLetter";
import FooterSection from "@/components/Home/FooterSection";
import Aboutbanner from "@/components/about/Aboutbanner";
function page() {
  return (
    <>
      <Navbar />
      <Aboutbanner title={"Oil & Gas Industry"} image="/industriesimage.png" isaboutBanner={false} />
      <section className="w-full relative  h-auto flex flex-col gap-5 flow-container py-10 md:py-10">
        <p className="text-p18 font-medium text-webtext text-center ">
          At Process Control Devices (PCD), we cater to a wide range of
          industries by providing high-precision flow measurement and process
          control solutions. Our products are designed to enhance efficiency,
          accuracy, and reliability across multiple industrial applications.
        </p>

        <section className="w-full relative h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-10  ">
          <IndustriesCard2
            imageSrc={"/industriesimage.png"}
            title={"Automotive Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industriesimage.png"}
            title={"Automotive Industry"}
            description={""}
          />
          <IndustriesCard2
            imageSrc={"/industriesimage.png"}
            title={"Automotive Industry"}
            description={""}
          />
         
        </section>
      </section>
      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter />
      <FooterSection />
    </>
  );
}

export default page;
