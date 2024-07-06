import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function AboutMe() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-medium text-4xl text-white">
            <span className="text-primary">#</span>About Me
          </h2>
          <span className="border border-primary w-[350px]"></span>
        </div>
        <div className="text-base text-center font-normal text-gray leading-8">
          <p className="mb-4">Hello I'm Yums!</p>
          <p className="mb-4">
            I’m a self-taught front-end developer based in Banyuwangi, East
            Java. I can develop responsive websites from scratch and raise them
            into modern user-friendly web experiences.
          </p>
          <p className="mb-4">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <button className="flex gap-3 items-center mx-auto border border-primary px-4 py-2 text-base font-normal hover:font-bold">
            Read more <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
