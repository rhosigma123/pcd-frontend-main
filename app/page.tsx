import HomeBanner from "@/components/Home/HomeBanner";
import Pcdsection from "@/components/Home/pcdsection";
import FlowMeterSection from "@/components/Home/FlowMeterSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import BlogsSection from "@/components/Home/BlogsSection";
import ConnectSection from "@/components/Home/ConnectSection";
import NewsLetter from "@/components/common/NewsLetter";
import ClientSection from "@/components/Home/ClientSection";

export default function Home() {
  return (
    <>
      <HomeBanner />  
      <ClientSection/>
      <Pcdsection/>
      <FlowMeterSection title="Flow meters we manufacture"/>
      <IndustriesSection />
      <BlogsSection title="Blogs" css="" titlecss=""/>
      <ConnectSection title={"feel free to contact us for any quries"} isProductBanner={false}/>
      <NewsLetter/>
    </>
  );
}
