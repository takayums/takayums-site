"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
  const pathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(true);

  const menu = [
    { href: "/", title: "home" },
    { href: "/projects", title: "porjects" },
    { href: "/about", title: "about me" },
    { href: "/contacts", title: "contacts" },
  ];

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="py-8 dark:bg-background bg-white">
      <div className="container px-4 mx-auto max-w-(--breakpoint-lg)">
        <nav className="flex items-center justify-between relative">
          <Link
            href="/"
            className="dark:text-white text-gray-500 font-bold text-base"
          >
            yums_
          </Link>
          <div className="md:hidden ml-auto mr-2">
            <button onClick={handleToggleMenu}>
              {toggleMenu ? (
                <Bars3BottomLeftIcon className="size-6 text-gray-500 dark:text-white" />
              ) : (
                <XMarkIcon className="size-6 text-gray-500 dark:text-white" />
              )}
            </button>
          </div>
          <ul
            className={`text-base bg-white dark:bg-background absolute top-10 right-0 py-2  md:static md:flex md:flex-row border border-gray md:border-none ${toggleMenu ? "hidden" : "top-<-100>"}`}
          >
            {menu.map((item, index) => (
              <li key={index} onClick={handleToggleMenu}>
                <Link
                  href={item.href}
                  className={`dark:dark:text-gray text-gray-500-300 dark:text-gray text-gray-500 hover:font-medium dark:hover:text-white hover:text-primary hover:underline px-4 py-1.5 ${pathname === item.href ? "font-medium text-primary dark:text-white" : ""}`}
                >
                  <span className="text-primary">#</span>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  );
}
