import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="pt-8 pb-2">
      <div className="container px-4 mx-auto max-w-screen-lg">
        <nav className="flex justify-between">
          <Link href="/" className="text-white font-bold text-base">
            yums_
          </Link>
          <ul className="text-base flex gap-8">
            <li>
              <Link
                href="/"
                className="text-gray hover:font-medium hover:text-white"
              >
                <span className="text-primary">#</span>home
              </Link>
            </li>
            <li>
              <Link
                href="/works"
                className="text-gray hover:font-medium hover:text-white"
              >
                <span className="text-primary">#</span>works
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray hover:font-medium hover:text-white"
              >
                <span className="text-primary">#</span>about-me
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="text-gray hover:font-medium hover:text-white"
              >
                <span className="text-primary">#</span>contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
