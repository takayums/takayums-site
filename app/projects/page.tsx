import CardProject from "@/components/CardProject";
import SmallProject from "@/components/SmallProject";
import React from "react";

export default function Projects() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h1 className="font-semibold text-3xl text-white mb-3.5">
          <span className="text-primary">/</span>projects
        </h1>
        <p className="text-white font-base">List of my projects</p>

        <div className="my-10">
          <h2 className="font-medium text-3xl text-white mb-5">
            <span className="text-primary">#</span>complete-apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </div>

        <div className="my-10">
          <h2 className="font-medium text-3xl text-white mb-5">
            <span className="text-primary">#</span>small-projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <SmallProject />
            <SmallProject />
            <SmallProject />
          </div>
        </div>
      </div>
    </section>
  );
}
