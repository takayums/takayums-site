import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="dark:bg-background bg-white my-16">
      <div className="container mx-auto px-4 flex items-center flex-col md:flex-row gap-5 max-w-(--breakpoint-lg)">
        <div className="grow">
          <h1 className="font-semibold  text-gray-500 dark:text-white text-3xl md:text-[38px] leading-normal md:mb-8 mb-5">
            Yums is a <span className="text-primary">React Js Developer</span>{" "}
            and <span className="text-primary">MERN Stack Developer</span>
          </h1>
          <p className="text-base dark:text-gray text-gray-500 dark:dark:text-gray text-gray-500-300 font-normal mb-6 leading-6 max-w-[463px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="md:block hidden font-medium text-base dark:bg-background bg-white dark:text-white  text-gray-500 border border-primary px-4 py-2 hover:font-bold">
            Contact me!!
          </button>
        </div>
        <div className="w-72 md:w-[500px] h-auto md:h-[350px] relative">
          <Image
            src="/yums-profile.png"
            width={0}
            height={0}
            alt="Profile picture"
            sizes="100vw"
            className="w-full h-auto object-contain relative"
          />
          <div className="absolute bottom-0 md:bottom-5 inset-x-0 border border-primary darK:border-white p-2 flex items-center gap-2 dark:bg-background bg-white">
            <div className="w-4 h-4 bg-primary"></div>
            <p className="text-base dark:text-gray text-gray-500">
              Currently working at{" "}
              <span className="font-bold dark:text-gray text-gray-500">
                Home
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
