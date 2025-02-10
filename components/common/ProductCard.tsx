import React from "react";
import Image from "next/image";
import Link from "next/link";


type ProductTypes={
  css?:string ,
  name:string,
  productId:string,
  description:string,
  link:string,
  image:string,
  tags?:string[]
  
}

function ProductCard({css,name,productId,description,link}:ProductTypes ) {
  return (
    <div className={`flex items-start justify-start max-w-[400px]  self-center justify-self-center md:max-w-full md:w-full flex-col relative h-auto   ${css ? css : 'bg-white p-4'}`}>
      <Image
        src={"/productimage.png"}
        alt="product image"
        height={300}
        width={400}
        className="h-[270px] w-full relaitve border border-[#E8E8E8] rounded-xl cursor-pointer"
      />
      <div className="w-full relative flex flex-col gap-2 mt-5 ">
        <span className="text-base px-4 py-1 rounded-full w-fit text-white bg-webaccent">
          {productId}
        </span>
        <h2 className="text-p22 text-webaccent font-semibold w-full relative">
          {name}
        </h2>
        <p className="text-p18 font-normal text-[#666] line-clamp-3 ">
          {description}
        </p>

        <Link
          href={`/${link}`}
          className="text-base font-medium text-webaccent border-b  border-webaccent w-fit"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
