import React from "react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

function header() {
  return (
    <header className="w-full relative  h-auto flex items-center justify-between py-2  ">
      <div className="w-full relative h-auto flex items-center justify-between">
        <div className="w-full relative h-auto flex items-center gap-2">
          <Link href={"tel:+91 86555 87403"} className="flex items-center gap-1 w-fit relative ">
            <BsTelephone className="text-[30px] relative text-black" />
            +91 86555 87403
          </Link>
          <Link href={"melto:sales@pcd-flowmeter.com"} className="flex items-center gap-1 w-fit relative ">
            <MdOutlineEmail className="text-[30px] relative text-white" />
            sales@pcd-flowmeter.com
          </Link>
        </div>
      </div>
    </header>
  );
}

export default header;
