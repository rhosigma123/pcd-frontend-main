"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdShare } from "react-icons/io";


const data = [
  {
    slug: "",
    position: "",
    createdAt: "",
    location: "",
    experience: "",
  },
  {
    slug: "",
    position: "",
    createdAt: "",
    location: "",
    experience: "",
  },
  {
    slug: "",
    position: "",
    createdAt: "",
    location: "",
    experience: "",
  },
];

function CareersSection() {
  const router = useRouter();
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 w-full grid-cols-1 xl:grid-cols-3 py-20 gap-[20px] flow-container">
      {data.map((career, index) => (
        <div
          className="h-auto cursor-pointer relative bg-[#FFF] border border-[#E8E8E8] rounded-[10px] shadow-sm p-[20px] group"
          key={index}
        >
          <h2
            className="text-p20 font-semibold text-primaryColor"
            onClick={() => router.push(`/careers/${career.slug}`)}
          >
            {career.position}
          </h2>

          <span
            className="flex items-center justify-between py-3 border-b border-primaryColor"
            onClick={() => router.push(`/careers/${career.slug}`)}
          >
            <p className="text-[16px] font-normal text-primaryColor">
              Posted On:{" "}
              {career.createdAt
                ? new Date(career.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
            <p className="text-[16px] font-semibold text-primaryColor">
              {career.location}
            </p>
          </span>

          <span
            className="flex items-center gap-5 py-3 border-b border-primaryColor"
            onClick={() => router.push(`/careers/${career.slug}`)}
          >
            <p className="text-[16px] font-semibold text-primaryColor">
              Required Experience:
            </p>
            <p className="text-[16px] font-semibold text-primaryColor">
              {career.experience}
            </p>
          </span>

          <div className="flex items-center gap-[10px] w-full h-[70px] bg-yellow py-3 group transition-all duration-100">
            <button
              className="w-[50%] py-2 px-5 bg-webaccent h-full text-p20 font-medium text-[#FFF] text-center rounded-sm transition-all duration-300 ease-in-out group-hover:w-[70%]"
              onClick={() => router.push(`/careers/${career.slug}`)}
            >
              Apply
            </button>

            <span className="w-[50%]  px-4 transition-all duration-300 ease-in-out rounded-sm flex items-center justify-center  border border-webaccent h-full group-hover:w-[30%] bg-websecondary">
              <IoMdShare className="text-[25px] text-primaryColor " />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CareersSection;
