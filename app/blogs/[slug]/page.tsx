import React from "react";
import BlogBanner from "@/components/blogs/BlogBanner";
import BlogsLayout from "@/components/blogs/BlogsLayouts";
import FlowMeterSection from "@/components/Home/FlowMeterSection";
import BlogsSection from "@/components/Home/BlogsSection";

function page() {
  return (
    <>
      <BlogBanner />
      <BlogsLayout />
      <FlowMeterSection title="Related Products" titlecss=""/>
      <BlogsSection titlecss="text-start" title="Related Blog" css=" bg-white"/>

    </>
  );
}

export default page;
