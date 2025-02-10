import React from "react";
import Aboutbanner from "@/components/about/Aboutbanner";

import NewsLetter from "@/components/common/NewsLetter";
import ConnectSection from "@/components/Home/ConnectSection";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: "About Us | Learn More About Our Journey | Sovorun",
  description:
    "Explore our story, mission, and values. Offering a glimpse into how we have become a india's trusted IT partner dedicated to driving innovation.",
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
      "Explore our story, mission, and values. Offering a glimpse into how we have become a india's trusted IT partner dedicated to driving innovation.",
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
        title={"Environmental Sustainability Efforts"}
        isaboutBanner={true} image={""}  
        />
      <section className="w-full flex flow-container flex-col py-10 md:py-20 items-center justify-center gap-4">
        <h2 className="w-full relative h-auto items-center font-medium text-p50 text-[#434343] text-center">
          Health & Safety
        </h2>

        <p className="text-p18 font-medium text-webtext text-center">
          PCD places safety at the forefront of its operations, embodying a
          steadfast commitment to the well-being of its workforce and the
          broader community. Employees undergo comprehensive safety training,
          and regular audits are conducted to assess and enhance safety
          protocols. Protective measures, including the use of state-of-the-art
          equipment and personal protective gear, are integral to our
          operational processes. Beyond compliance, our safety culture promotes
          continuous improvement and proactive hazard identification, fostering
          an environment where every team member actively contributes to
          maintaining the highest standards of safety. At Burak Metering, safety
          is not just a policy&rsquo;  it is a core value that shapes our daily
          practices and underscores our responsibility to our employees,
          clients, and the communities we serve.
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
