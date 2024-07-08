import React from "react";

export default function About() {
  return (
    <section className="my-16">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <h1 className="font-semibold text-3xl text-white mb-3.5">
          <span className="text-primary">/</span>about-me
        </h1>
        <p className="text-white font-base">Who i'm</p>
        <div className="text-base text-center font-normal text-gray leading-8 mt-10">
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
        </div>

        <div className="my-10">
          <h2 className="font-medium text-white text-3xl mb-12">
            <span className="text-primary">#</span>skills
          </h2>
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

        <div className="my-16">
          <h2 className="font-medium text-white text-3xl mb-12">
            <span className="text-primary">#</span>my-fun-facts
          </h2>
          <div className="gap-4 max-w-[700px] flex flex-wrap">
            <p className="p-2 text-white border border-gray inline-block">
              I like winter more than summer
            </p>
            <p className="p-2 text-white border border-gray inline-block">
              I often bike with my friends
            </p>
            <p className="p-2 text-white border border-gray inline-block">
              I like fried rice
            </p>
            <p className="p-2 text-white border border-gray inline-block">
              I was in Jember, East Java
            </p>
            <p className="p-2 text-white border border-gray inline-block">
              My favorite movie is Kung Fu Panda
            </p>
            <p className="p-2 text-white border border-gray inline-block">
              I am still in school
            </p>
            <p className="p-2 text-white border border-gray inline-block">
              I have one sister
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
