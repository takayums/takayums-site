import React from "react";
import Image from "next/image";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

export default function CardProject() {
  return (
    <div className="min-w-80 border border-gray bg-background">
      <div className="relative max-h-[200px]">
        <Image
          src="/thumbnail.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "200px" }}
          alt="Thumbnail"
          className="object-center object-cover"
        />
      </div>
      <div className="p-4">
        <p className="font-medium text-2xl text-white mb-4">ChertNodes</p>
        <p className="font-normal text-base text-gray mb-4">
          Minecraft servers hosting
        </p>
        <div className="font-normal text-sm border border-gray text-gray flex gap-2 p-2">
          <p className="border-r-2 border-gray pr-2">NodeJs</p>
          <p className="border-r-2 border-gray pr-2">VueJs</p>
          <p className="border-r-2 border-gray pr-2">CSS</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-1 px-4 py-2 border-primary border font-medium text-base text-white">
            Live
            <div className="flex items-center">
              <ChevronDoubleLeftIcon className="w-4 h-4 text-gray" />
              <span>~</span>
              <ChevronDoubleRightIcon className="w-4 h-4 text-gray" />
            </div>
          </button>
          <button className="flex gap-1 items-center border border-gray px-4 py-2 text-gray">
            Cached <ChevronDoubleRightIcon className="text-gray w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
