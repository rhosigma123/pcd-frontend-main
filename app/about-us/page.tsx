import React from 'react'
import Aboutbanner from '@/components/about/Aboutbanner'
import StorySection from '@/components/about/StorySection'
import OurCertifications from '@/components/about/OurCertifications'
import Pcdsection from '@/components/Home/pcdsection'
import ConnectSection from '@/components/Home/ConnectSection'
import NewsLetter from '@/components/common/NewsLetter'

import { mergeMetadata } from '../layout'
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

    <Aboutbanner title={'Our Story'} image='/aboutimage2.png' isaboutBanner={false}/>
    <StorySection/>
    <OurCertifications/>
    <Pcdsection/>
    <ConnectSection title={'feel free to contact us for any quries'} isProductBanner={false}/>
    <NewsLetter/>
    </>
  )
}

export default page