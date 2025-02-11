import React from "react";
import ProductDetailBanner from "@/components/Products/ProductDetailBanner";
import DetailSection from "@/components/Products/DetailSection";
import ConnectSection from "@/components/Home/ConnectSection";
import NewsLetter from "@/components/common/NewsLetter";

function page() {
  return (
    <>
      <ProductDetailBanner />
      <DetailSection />
      <ConnectSection
        title={"feel free to contact us for any quries"}
        isProductBanner={false}
      />
      <NewsLetter />
    </>
  );
}

export default page;
