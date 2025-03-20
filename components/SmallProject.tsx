import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SmallProject({
  label,
  deskripsi,
  tools,
  link,
}: {
  label: string;
  deskripsi: string;
  tools: string[];
  link: string;
}) {
  return (
    <div className="min-w-80 border border-gray">
      <div className="p-2 border-b border-gray">
        <ul className="flex gap-2 dark:text-gray text-gray-500">
          {tools.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="p-4 space-y-4">
        <p className="font-medium text-2xl text-gray-500 dark:text-white">
          {label}
        </p>
        <p className="font-normal text-base dark:text-gray text-gray-500">
          {deskripsi}
        </p>
        <Link
          href={link}
          className="flex w-fit items-center gap-1 px-4 py-2 border-primary border font-medium text-base text-gray dark:text-white"
        >
          Live
          <div className="flex items-center">
            <ChevronDoubleLeftIcon className="w-4 h-4 dark:text-gray text-gray-500" />
            <span>~</span>
            <ChevronDoubleRightIcon className="w-4 h-4 dark:text-gray text-gray-500" />
          </div>
        </Link>
      </div>
    </div>
  );
}
