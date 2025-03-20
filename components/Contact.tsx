import Link from "next/link";
import React from "react";
import { GitHub, Instagram } from "react-feather";

export default function Contact() {
  return (
    <section className="my-16">
      <div className="container mx-auto max-w-(--breakpoint-lg) px-4">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl text-gray-500 dark:text-white">
            <span className="text-primary">#</span>Contacts
          </h2>
          <span className="border border-primary w-32 md:w-60 lg:w-[200px]"></span>
        </div>
        <div className="flex items-center md:items-stretch justify-between flex-col md:flex-row gap-4">
          <p className="font-normal text-base dark:text-gray text-gray-500 max-w-[505px] text-center md:text-left">
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
                className="flex gap-2 items-center dark:text-gray text-gray-500"
              >
                <GitHub size={25} />
                takayums
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://instagram.com/yumszdev"
                rel="noopaner noreferrer"
                className="flex gap-2 items-center dark:text-gray text-gray-500"
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
