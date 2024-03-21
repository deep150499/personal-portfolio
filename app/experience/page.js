"use client";

import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";

let link = [
  {
    date: "July 2021 - December 2021",
    imgLink: "/img/experiencelogo.jpg",
    title: "Front End Developer",
    sub: "MountOwl",
    subTitle: "As a Front End Developer, I consistently enhance user experiences by proficiently implementing responsive designs, optimizing performance, and integrating innovative features."
  },
  {
    date: "January 2021 - June 2021",
    imgLink: "/img/experiencelogo.jpg",
    title: "Front End Developer Intern",
    sub: "MountOwl",
    subTitle:
    "As a Front End Developer Intern, I supported the development team by assisting in the implementation of responsive web designs, troubleshooting front end issues, and contributing to the optimization of user interfaces."
  },
];

function Expage() {

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="relative max-w-5xl mx-auto px-8"
    >
      <div className="relative mt-14">
        <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
          Experience
        </h2>
        <Link href={"/"}>
          <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
            <TbArrowBackUp className="dark:text-white  text-black text-xl" />
          </div>
        </Link>
      </div>

      <div className="mt-10">
        <div className=" ">
          {link.map((each) => (
            <div key={each.title} className="my-8  p-2 rounded-md ">
              <div className="border border-neutral-700 rounded-full  w-fit px-2 p-1 flex items-center ">
                <span className="text-xs text-neutral-700 dark:text-neutral-300 ">
                  {each.date}
                </span>
              </div>

              <div>
                <div className="flex gap-x-4 my-6">
                  <div>
                    <motion.h1
                      initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.2, delay: 0.3 },
                      }}
                      className="font-InterBold  text-lg "
                    >
                      {each.title}
                    </motion.h1>
                    <Link className="font-semibold hover:underline" href={"https://www.linkedin.com/company/mountowl/"}>
                      {each.sub}
                    </Link>
                  </div>
                </div>
                <motion.p
                  initial={{ x: -200 }}
                  animate={{ x: 0 }}
                  className=" text-neutral-500  text-sm  max-w-3xl"
                >
                  {each.subTitle}
                </motion.p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Expage;
