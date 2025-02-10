import { NEXT_PUBLIC_BASE_URL } from "@/config";





export default async function sitemap() {

    
  const sitemap = [
    { url: `${NEXT_PUBLIC_BASE_URL}about-us` },
    { url: `${NEXT_PUBLIC_BASE_URL}contact-us` },
    // { url: `${NEXT_PUBLIC_BASE_URL}/privacy-policy` },
    { url: `${NEXT_PUBLIC_BASE_URL}industries` },  
    { url: `${NEXT_PUBLIC_BASE_URL}applications` },
    { url: `${NEXT_PUBLIC_BASE_URL}clients` },
    { url: `${NEXT_PUBLIC_BASE_URL}enviromental-safety` },
    { url: `${NEXT_PUBLIC_BASE_URL}health-safety` },
    { url: `${NEXT_PUBLIC_BASE_URL}products` },
    { url: `${NEXT_PUBLIC_BASE_URL}quality-policy` },
    { url: `${NEXT_PUBLIC_BASE_URL}choose-us` },
    { url: `${NEXT_PUBLIC_BASE_URL}careers` },
    { url: `${NEXT_PUBLIC_BASE_URL}blogs` },
  ];

  return sitemap;
}