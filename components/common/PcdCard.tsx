import Image from "next/image";
import React from "react";
type pcdcard = {
  color: string;
  image ?: string;
  facts?: string;
  title: string;
  descriprion: string;
  titlecss?:string
};
function PcdCard({ color, image, facts, title, descriprion ,titlecss }: pcdcard) {
  return (
    <section
      className={`flex items-start flex-col border border-secondary rounded-lg gap-2 px-10 py-10 ${color} `}
    >
      <span className="w-full relative flex items-start  gap-4 ">
        {image && (
          <Image
            src={image}
            alt="Logo"
            height={300}
            width={300}
            className="w-[100px] h-[70px] object-contain"
          />
        )}

        <span className="flex flex-col w-full realtive h-auto">
          <h2 className="text-p32 font-semibold text-webtext">{facts}</h2>
          <p className={`font-semibold text-webtext uppercase ${titlecss ? titlecss : "text-p20"} `}>
            {" "}
            {title}
          </p>
        </span>
      </span>
      <p className="text-p18 font-normal text-webtext">{descriprion}</p>
    </section>
  );
}

export default PcdCard;
