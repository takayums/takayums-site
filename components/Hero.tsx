import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 flex items-center gap-5 max-w-screen-lg">
        <div className="grow">
          <h1 className="font-semibold text-white text-[38px] leading-normal mb-8">
            Yums is a <span className="text-primary">React Js Developer</span>{" "}
            and <span className="text-primary">MERN Stack Developer</span>
          </h1>
          <p className="text-base text-gray font-normal mb-6 leading-6 max-w-[463px]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <button className="font-medium text-base text-white border border-primary px-4 py-2 hover:font-bold">
            Contact me!!
          </button>
        </div>
        <div className="w-[500px] h-[350px] relative">
          <Image
            src="/yums-profile.png"
            width={500}
            height={500}
            alt="Profile picture"
            className="absolute inset-0"
          />
          <div className="absolute bottom-5 inset-x-0 border border-white p-2 flex items-center gap-2 bg-background">
            <div className="w-4 h-4 bg-primary"></div>
            <p className="text-base text-gray">
              Currently working at{" "}
              <span className="font-bold text-white">Home</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
