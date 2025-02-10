import ConnectSection from "@/components/Home/ConnectSection";
import React from "react";
import CareersSection from "@/components/careers/CareersSection";
import NewsLetter from "@/components/common/NewsLetter";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata({
  title: "About Us | Learn More About Our Journey | Sovorun",
  description:
    "Explore our story, mission, and values. Offering a glimpse into how we’ve become a india's trusted IT partner dedicated to driving innovation.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About Us | Learn More About Our Journey | Sovorun",
    description:
      "Explore our story, mission, and values. Offering a glimpse into how we’ve become a india's trusted IT partner dedicated to driving innovation.",
    url: "/about",
  },
  alternates: {
    canonical: `/about`,
  },
});

function page() {
  return (
    <>
      <ConnectSection
        title={"Careers"}
        css="text-p50 font-semibold h-[200px] flex items-center justify-center "
        isProductBanner={true}
      />
       
      <CareersSection/>
      <ConnectSection
        title={"Careers"}
        isProductBanner={false}
      />
      <NewsLetter/>
    </>
  );
}

export default page;
