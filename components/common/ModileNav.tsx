"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
function ModileNav({ children }: { children: React.ReactNode }) {
  const route = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="w-fit  h-auto ">{children}</SheetTrigger>
      <SheetContent className=" md:max-w-[400px]  h-auto ">
        <SheetHeader>
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
          <SheetDescription className="w-full relative h-[100vh] flex flex-col items-center py-20  justify-between ">
            <ul className="w-full relative h-full flex-col flex items-center  gap-10 lg:gap-3 xl:gap-5">
              <Link
                href={"/"}
                className={`text-p18 font-medium text-[#434343] px-5 py-1 ${
                  route == "/"
                    ? "bg-webaccent  text-white rounded-full"
                    : "bg-transparent "
                }`}
              >
                Home
              </Link>
              <Link
                href={"/about-us"}
                className={`text-p18 font-medium text-[#434343] px-5 py-1  ${
                  route == "/about-us"
                    ? "bg-webaccent  text-white rounded-full"
                    : "bg-transparent "
                } `}
              >
                About
              </Link>
              <Link
                href={"/products"}
                className={`text-p18 font-medium text-[#434343] px-5 py-1  ${
                  route == "/products"
                    ? "bg-webaccent  text-white rounded-full"
                    : "bg-transparent "
                } `}
              >
                Products
              </Link>
              <Link
                href={"/industries"}
                className={`text-p18 font-medium text-[#434343] px-5 py-1  ${
                  route == "/industries"
                    ? "bg-webaccent  text-white rounded-full"
                    : "bg-transparent "
                }`}
              >
                Industries
              </Link>
              <Link
                href={"/applications"}
                className={`text-p18 font-medium text-[#434343] px-5 py-1 ${
                  route == "/applications"
                    ? "bg-webaccent  text-white rounded-full"
                    : "bg-transparent "
                } `}
              >
                Applications
              </Link>
            </ul>

            <Link
              href={"/contact-us"}
              className="w-fit relative   flex    h-auto rounded-full hover:text-white hover:bg-webaccent transition-all duration-300 px-10 py-[7px] text-p18 font-medium border border-webaccent  text-webaccent"
            >
              Contact
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default ModileNav;
