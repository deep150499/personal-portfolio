"use client";

import React, { useEffect } from "react";
import { TbArrowBackUp } from "react-icons/tb";

import Status from "@/app/Status/page";
import Link from "next/link";

import { useAnimate, stagger, motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    imgLink: "/img/e-commerce.jpg",
    title: "Comfort Kicks",
    subT: "An e-commerce project leveraging HTML, CSS, JavaScript, and React to create a dynamic and visually appealing online shopping platform with seamless user experience and interactive functionalities.",
    tech : [
      'React JS',
      'Javascript',
      'Tailwind CSS',
    ],
    src : 'https://comfortkicks.netlify.app/',
    github : 'https://github.com/deep150499/shoes-ecommerce',
  },
  {
    imgLink: "/img/dice-game.jpg",
    title: "Dice Luck",
    subT: "Developed a dynamic dice game application leveraging React with Vite for efficient bundling, Javascript and Tailwind CSS for sleek styling.",
    tech : [
      'React + Vite',
      'Javascript',
      'Tailwind CSS',
    ],
    src : 'https://diceluck.netlify.app/',
    github : 'https://github.com/deep150499/dicegame',
  },
  {
    imgLink: "/img/trip-planner.jpg",
    title: "Trip planner",
    subT: "Crafted an intuitive trip planner application using React, powered by JavaScript, and styled with Tailwind CSS for seamless user experience.",
    tech : [
      'Javascript',
      'React',
      'Tailwind CSS',
    ],
    src : 'https://github.com/deep150499/trip-planner-react',
    github : 'https://github.com/deep150499/trip-planner-react'
},
];

function Projpage() {
  const [scope, animate] = useAnimate();
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      ".box",

      { opacity: 1, scale: 1, filter: "blur(0px)", x: 0 },

      {
        duration: 0.2,
      }
    );
  }, []);
  return (
    <div ref={scope} className="relative max-w-5xl mx-auto px-8">
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          Projects
        </h2>
        <Link href={"/"}>
          <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
            <TbArrowBackUp className="dark:text-white  text-black text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-10">
        {projects.map((each, i) => (
          <div key={i}>
            <div className="flex flex-col lg:flex-row  gap-x-8 my-6">
              <motion.div
                initial={{ opacity: 0, scale: 0, filter: "blur(0px)", x: 0 }}
                className="h-36 box w-64"
              >
                <Image
                  width={600}
                  height={600}
                  alt={each.subT}
                  className="md:w-64 object-cover rounded-md mt-4"
                  src={each.imgLink}
                />
              </motion.div>

              <div>
                <div>
                  <h1 className="font-InterBold text-lg max-w-lg mt-4">
                    {each.title}
                  </h1>
                  <p className="text-base mt-3 font-InterMedium dark:text-neutral-400 max-w-lg">
                    {each.subT}
                  </p>
                   <div className="w-fit flex items-center mt-2">
                  <div className="px-2 py-1 mr-2 text-xs font-semibold border rounded-full dark:border-neutral-700">
                    <span>{each.tech[0]}</span>
                  </div>
                  <div className="px-2 py-1 mr-2 text-xs font-semibold border rounded-full dark:border-neutral-700">
                    <span>{each.tech[1]}</span>
                  </div>
                  <div className="px-2 py-1 text-xs font-semibold border rounded-full dark:border-neutral-700">
                    <span>{each.tech[2]}</span>
                  </div>
                </div>

                  <Link href={{pathname:each.src}} target="_blank"><button className="mt-11 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                    View
                  </button></Link>
                  <Link href={{pathname:each.github}} target="_blank"><button className="mt-11 mx-5 border border-neutral-700/30 rounded-xl p-2 px-7 lg:w-44 bg-white dark:bg-neutral-800/10 text-sm dark:text-neutral-400 font-semibold shadow-md">
                    Github
                  </button></Link>
                </div>
              </div>
            </div>
            <div className="border my-16 border-neutral-300 dark:border-neutral-800  h-[1px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projpage;
