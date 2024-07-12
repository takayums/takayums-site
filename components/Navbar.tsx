"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(false);
  const menu = [
    { href: "/", title: "home" },
    { href: "/projects", title: "works" },
    { href: "/about", title: "about me" },
    { href: "/contacts", title: "contacts" },
  ];

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="py-8">
      <div className="container px-4 mx-auto max-w-screen-lg">
        <nav className="flex items-center justify-between relative">
          <Link href="/" className="text-white font-bold text-base">
            yums_
          </Link>
          <div className="md:hidden">
            <button onClick={handleToggleMenu}>
              {toggleMenu ? (
                <Bars3BottomLeftIcon className="size-5 text-white" />
              ) : (
                <XMarkIcon className="size-5 text-white" />
              )}
            </button>
          </div>
          <ul
            className={`text-base absolute top-10 right-0 py-2 bg-background md:static md:flex md:flex-row border border-gray md:border-none ${toggleMenu ? "hidden" : "top-[-100]"}`}
          >
            {menu.map((item, index) => (
              <li key={index} onClick={handleToggleMenu}>
                <Link
                  href={item.href}
                  className={`text-gray hover:font-medium hover:text-white hover:underline px-4 py-1.5 ${pathname === item.href ? "font-medium text-white" : ""}`}
                >
                  <span className="text-primary">#</span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
