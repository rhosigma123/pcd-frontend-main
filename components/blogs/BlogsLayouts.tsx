import React from "react";
import TableContent from "./TableContent";
import CustomBreadcrumb from "../common/CustomBreadcrumb";
function BlogsLayout() {
  return (
    <section className="w-full relative h-auto grid grid-cols-1 xl:grid-cols-[1fr_3fr] flow-container py-10 gap-10  ">
      <TableContent />
      <section className="w-full relative h-auto flex flex-col items-start gap-4 justify-start ">
        <CustomBreadcrumb />
        <div className="w-full reltive h-auto flex items-start ">
          
        </div>
      </section>
    </section>
  );
}

export default BlogsLayout;
