import React from "react";
import Image from "next/image";
import {
  ArrowLongRightIcon,
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
} from "@heroicons/react/24/solid";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 max-w-(--breakpoint-lg)">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl text-white">
              <span className="text-primary">#</span>Projects
            </h2>
            <span className="border border-primary w-32 md:w-60 lg:w-[500px]"></span>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-white font-medium text-base">view all</p>
            <ArrowLongRightIcon className="w-5 text-white" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center place-content-center">
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </div>
    </section>
  );
}
