import React from "react";
import Aboutbanner from "@/components/about/Aboutbanner";

import NewsLetter from "@/components/common/NewsLetter";
import ConnectSection from "@/components/Home/ConnectSection";
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
      <Aboutbanner
              title={"Quality Policy"}
              isaboutBanner={true} image={""}      />
      <section className="w-full flex flow-container flex-col py-10 md:py-20 items-center justify-center gap-4">
        <h2 className="w-full relative h-auto items-center font-medium text-p50 text-[#434343] text-center">
        Quality Policy
        </h2>

        <p className="text-p18 font-medium text-webtext text-center">
        Our unwavering commitment is directed towards attaining an Exceptional Quality Matrix across our products, solutions, and services. We are dedicated to upholding and advancing manufacturing standards by incorporating, Human Resource Development, Technology Upgrades and Process Automations. Burak Metering is an ISO 9001:2015 Certified company and, Burak Metering Calibration Lab is designed as per ISO17025.
        </p>
      </section>
      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter />

    </>
  );
}

export default page;
