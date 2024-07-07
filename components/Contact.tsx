import Link from "next/link";
import React from "react";
import { GitHub, Instagram } from "react-feather";

export default function Contact() {
  return (
    <section className="my-16">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-medium text-4xl text-white">
            <span className="text-primary">#</span>Contacts
          </h2>
          <span className="border border-primary w-[200px]"></span>
        </div>
        <div className="flex justify-between">
          <p className="font-medium text-base text-gray max-w-[505px]">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
          <ul className="border border-gray p-4 inline-block">
            <li className="font-medium text-base text-white mb-4">
              Message me here
            </li>
            <li className="mb-2">
              <Link
                href="https://github.com/takayums"
                rel="noopaner noreferrer"
                target="_blank"
                className="flex gap-2 items-center text-gray"
              >
                <GitHub size={25} />
                takayums
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="https://instagram.com/yumszdev"
                rel="noopaner noreferrer"
                className="flex gap-2 items-center text-gray"
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
