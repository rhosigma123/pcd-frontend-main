"use client";
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"

function CustomBreadcrumb() {
  return (
    <Breadcrumb className="w-full relative h-auto flex items-center gap-1">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/blogs" className="text-p22 font-medium text-webtext ">BLogs</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/components" className="text-p22 font-medium text-webtext ">Components</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default CustomBreadcrumb;
