import React from "react";
import Link from "next/link";
import { GitHub, Instagram } from "react-feather";

export default function Contacts() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 max-w-(--breakpoint-lg)">
        <h1 className="font-semibold text-3xl text-gray-500 dark:text-white mb-3.5">
          <span className="text-primary">/</span>contacts
        </h1>
        <div className="flex justify-between flex-col md:flex-row items-center md:items-stretch mt-10 gap-4">
          <p className="font-normal text-base text-gray-500 dark:text-gray text-center md:text-start max-w-[505px]">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <ul className="border border-gray p-4 inline-block">
            <li className="font-medium text-base text-gray-500 dark:text-white mb-4">
              Message me here
            </li>
            <li className="mb-2">
              <Link
                href="https://github.com/takayums"
                rel="noopaner noreferrer"
                target="_blank"
                className="flex gap-2 items-center text-gray-500 dark:text-gray"
              >
                <GitHub size={25} />
                takayums
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://instagram.com/yumszdev"
                rel="noopaner noreferrer"
                className="flex gap-2 items-center text-gray-500 dark:text-gray"
                target="_blank"
              >
                <Instagram size={25} />
                @yumsdev
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
