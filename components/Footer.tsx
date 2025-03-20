import React from "react";
import Link from "next/link";
import { Figma, GitHub, Instagram } from "react-feather";

export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-background border-gray py-8">
      <div className="container mx-auto px-4 max-w-(--breakpoint-lg) flex flex-col md:flex-row gap-2 justify-between md:items-stretch items-center">
        <div className="">
          <Link
            href="/"
            className="md:text-left text-center text-gray-500 dark:text-white font-bold text-base block mb-4"
          >
            yums_
          </Link>
          <p className="font-normal text-gray-500 dark:text-white text-base md:text-left text-center">
            React Js Developer and MERN Stack Developer
          </p>
        </div>
        <div>
          <p className="font-medium text-lg text-center md:text-left md:text-2xl text-gray-500 dark:text-white mb-3">
            Media
          </p>
          <ul className="flex gap-2 dark:text-gray text-gray-500 flex-wrap">
            <li>
              <GitHub size={25} />
            </li>
            <li>
              <Figma size={25} />
            </li>
            <li>
              <Instagram size={25} />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-normal text-base dark:text-gray text-gray-500 mt-12">
        © Copyright 2024. Made by yums_
      </p>
    </footer>
  );
}
