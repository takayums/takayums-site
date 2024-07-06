import React from "react";

export default function Skills() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="mb-12">
          <div className="flex items-center gap-4">
            <h2 className="font-medium text-4xl text-white">
              <span className="text-primary">#</span>Skills
            </h2>
            <span className="border border-primary w-[250px]"></span>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="max-w-52 border border-gray inline-block text-base text-gray">
            <h3 className="border-b border-gray p-2 font-semibold">
              Languages
            </h3>
            <ul className="p-2 flex flex-wrap">
              <li className="mr-2">TyeScript</li>
              <li className="mr-2">Javascript</li>
              <li className="mr-2">Python</li>
            </ul>
          </div>
          <div className="max-w-52 border border-gray inline-block text-base text-gray">
            <h3 className="border-b border-gray p-2 font-semibold">
              Databases
            </h3>
            <ul className="p-2 flex flex-wrap">
              <li className="mr-2">SQLite</li>
              <li className="mr-2">MongoDB</li>
              <li className="mr-2">Mysql</li>
            </ul>
          </div>
          <div className="max-w-52 border border-gray inline-block text-base text-gray">
            <h3 className="border-b border-gray p-2 font-semibold">Tools</h3>
            <ul className="p-2 flex flex-wrap">
              <li className="mr-2">Linux</li>
              <li className="mr-2">Neovim</li>
              <li className="mr-2">Figma</li>
            </ul>
          </div>
          <div className="max-w-52 border border-gray inline-block text-base text-gray">
            <h3 className="border-b border-gray p-2 font-semibold">
              Frameworks
            </h3>
            <ul className="p-2 flex flex-wrap">
              <li className="mr-2">ReactJs</li>
              <li className="mr-2">ExpressJs</li>
              <li className="mr-2">NextJs</li>
              <li className="mr-2">Flask</li>
              <li className="mr-2">Django</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
