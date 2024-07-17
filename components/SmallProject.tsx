import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

export default function SmallProject() {
  return (
    <div className="min-w-80 border border-gray">
      <div className="p-2 border-b border-gray">
        <ul className="flex gap-2 text-gray">
          <li>Lua</li>
          <li>Typescript</li>
        </ul>
      </div>
      <div className="p-4 space-y-4">
        <p className="font-medium text-2xl text-white">My blog</p>
        <p className="font-normal text-base text-gray">
          Start creating scalable discord.js bot with typescript in seconds
        </p>
        <button className="flex items-center gap-1 px-4 py-2 border-primary border font-medium text-base text-white">
          Live
          <div className="flex items-center">
            <ChevronDoubleLeftIcon className="w-4 h-4 text-gray" />
            <span>~</span>
            <ChevronDoubleRightIcon className="w-4 h-4 text-gray" />
          </div>
        </button>
      </div>
    </div>
  );
}
