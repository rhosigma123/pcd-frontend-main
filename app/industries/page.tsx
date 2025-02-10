import React from 'react'
import IndustriesPage from '@/components/ourPages/Industriespage'
import { mergeMetadata } from '../layout';
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
    <IndustriesPage/>
  )
}

export default page