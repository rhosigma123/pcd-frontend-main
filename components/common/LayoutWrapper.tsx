"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation"; // Import usePathname()
import Navbar from "./Navbar";
import FooterSection from "../Home/FooterSection";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current page route

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.section
          key={pathname} // Changing key forces re-render on page change
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        //   exit={{ y: -100, opacity: 0 }}
          transition={{
            type: "spring",
            duration: 1.5,
            ease:"easeOut"
          }}
          className="w-full relative h-auto"
        >
          {children}
        </motion.section>
      </AnimatePresence>
      <FooterSection />
    </>
  );
}

export default LayoutWrapper;
