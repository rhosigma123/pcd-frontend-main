import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import FooterSection from "@/components/Home/FooterSection";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"], // Add the required font weights
});

export const metadata: Metadata = {
  title: "PCD Flow Meters | Precision Flow Measurement Solutions",
  description: "PCD (Process Control Devices) manufactures high-precision flow meters for various industries, ensuring accurate and reliable flow measurement solutions.",
  metadataBase: new URL("http://localhost:3000"),
  twitter: {
    card: "summary_large_image",
    images: "/opengraph-image.jpg",
    // site: "@pcd_flowmeter",
  },
  openGraph: {
    title: "PCD Flow Meters | Precision Flow Measurement Solutions",
    description: "Discover a wide range of high-quality flow meters from Process Control Devices (PCD), designed for industrial and commercial applications.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 4800,
        height: 2520,
      },
    ],
    url: "http://localhost:3000",
    locale: "en_US",
    siteName: "PCD Flow Meters",
  },
  // alternates: {
  //   canonical: "https://www.pcd-flowmeter.com",
  // },
};


export function mergeMetadata(pageMetadata: Metadata): Metadata {
  return {
    ...metadata, // Use global metadata as the base
    ...pageMetadata, // Merge with page-specific metadata
    openGraph: {
      ...metadata.openGraph,
      ...pageMetadata.openGraph,
      images: metadata.openGraph?.images, // Always use global Open Graph images
    },
    twitter: {
      ...metadata.twitter,
      ...pageMetadata.twitter,
      images: metadata.twitter?.images, // Always use global Twitter images
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSans.variable} antialiased`}
      >
        <Navbar />
          {children}
        <FooterSection />
      </body>
    </html>
  );
}
