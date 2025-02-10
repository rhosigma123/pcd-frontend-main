'use clinet'
import LeftSection from "@/components/Enviromental/LeftSection";
import ConnectSection from "@/components/Home/ConnectSection";
import React from "react";
import NewsLetter from "@/components/common/NewsLetter";


const Leftsectiondata=[
    {
        title:"",
    },
    {
        title:"",
    },
    {
        title:"",
    },
    {
        title:"",
    },

]

function ChooseUsPage() {
  return (
    <>
      <ConnectSection
        title={"Our Products"}
        css="text-p50 font-semibold h-[200px] flex items-center justify-center "
        isProductBanner={true}
      />
      <section className="w-full relative h-auto flex items-start flex-col gap-5  py-20 flow-container">
        <LeftSection isLeftSection={false} headingtitle="Customized Solutions" items={Leftsectiondata} />
        <LeftSection isLeftSection={true}   headingtitle="Customized Solutions"  items={Leftsectiondata}/>
      </section>
      <ConnectSection title={"feel free to contact us for any quries"} isProductBanner={false} />
      <NewsLetter />
    </>
  );
}

export default ChooseUsPage;