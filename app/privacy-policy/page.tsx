import ConnectSection from "@/components/Home/ConnectSection";
import React from "react";
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
        title={"Privacy Policy"}
        css="text-p50 font-semibold h-[200px] flex   items-center justify-center "
        isProductBanner={true}
      />

      <div className="w-full realtive h-auto flow-container pt-20 pb-20 ">
        <p className="text-semnibold text-p20 text-primaryColor">
          This Privacy Policy outlines how Sovorun {' "we," "our" or "us" '}{" "}
          collects, uses, and protects personal information obtained from users
          of the Sovorun website. By accessing and using our website, you
          consent to the practices described in this Privacy Policy.
        </p>

        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Information We Collect:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              Personal Information: We may collect personally identifiable
              information, such as names, email addresses, and contact details,
              when voluntarily submitted by users through forms or interactions
              on the website.
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              Personal Information: We may collect personally identifiable
              information, such as names, email addresses, and contact details,
              when voluntarily submitted by users through forms or interactions
              on the website.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            How We Use Collected Information:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              We use personal information to respond to user inquiries, send
              newsletters, and provide requested information.
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              Non-personal information is utilized for website analytics,
              optimizing user experience, and identifying areas for improvement.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Cookies and Tracking Technologies:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              Sovorun may use cookies to enhance user experience and track
              website usage. Users can control cookie preferences through their
              browser settings.
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              Third-party analytics tools may be employed to collect
              non-personal information for statistical analysis.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Third-Party Disclosure:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              We do not sell, trade, or transfer personally identifiable
              information to external parties.
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              Trusted third parties, such as website hosting and analytics
              providers, may access user information to assist in website
              operations.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Security Measures:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              Sovorun employs industry-standard security measures to protect
              user information from unauthorized access or disclosure.
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              While we strive to protect personal information, users acknowledge
              that internet security cannot be guaranteed.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Links to External Websites:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              Our website may contain links to external sites. Sovorun is not
              responsible for the content or privacy practices of these
              third-party websites.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Updates to Privacy Policy:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              Sovorun reserves the right to update this Privacy Policy. Users
              will be notified of any significant changes.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            User Choices and Opt-Out:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              Users can choose not to provide personal information, but this may
              limit access to certain features.
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              Opt-out options for newsletters or communications are provided in
              accordance with applicable laws.
            </li>
          </ul>
        </span>
        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            GDPR Compliance:
          </h2>
          <ul className="w-full relative flex flex-col gap-2 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              If you are a resident of the European Economic Area (EEA), Sovorun
              complies with the General Data Protection Regulation (GDPR)
              regarding the processing of personal information.
            </li>
          </ul>
        </span>

        <span className="flex flex-col gap-4 w-full relative h-auto mt-10">
          <h2 className="text-p32 text-webaccent  font-semibold ">
            Contact Information:
          </h2>
          <ul className="w-full relative flex flex-col gap-5 list-disc  h-auto px-5 ">
            <li className="text-p18 font-normal text-primaryColor">
              For questions or concerns regarding the Sovorun Website Privacy
              Policy, please contact via email{" "}
              <a href="milto:info@sovorun.com">info@sovorun.com</a> , or call on{" "}
              <a href="tel:+91 79779 07989">+91 79779 07989</a>, or write to:
            </li>
            <li className="text-p18 font-normal text-primaryColor ">
              <p>601, VBC, Dawat Hall Bldg.,</p>
              <p>Above Torrent Power, Opp. Bharat Gear Ltd., NH48 Highway,</p>
              <p>Shil, Thane, Maharashtra – 400612, India.</p>
            </li>
            <li className="text-p18 font-normal text-primaryColor">
              This Privacy Policy is effective as of June 7th, 2023. Users are
              encouraged to review it periodically for updates. Continued use of
              the Sovorun website signifies acceptance of this Privacy Policy.
            </li>
          </ul>
        </span>
      </div>
      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter/>
    </>
  );
}

export default page;
