"use client";

import Status from "@/app/Status/page";

import React, { useState } from "react";
import Link from "next/link";
import { PiLockThin } from "react-icons/pi";
import Image from "next/image";

import { motion } from "framer-motion";

function Frpage() {

  return (
    <div className="mt-32">
      <div className="flex gap-x-4">
        <Image
          width={300}
          height={300}
          className="w-16 h-16 rounded-full object-cover"
          src="/img/memoji.jpg"
          alt="Profile"
        />
        <div>
          <h2 className="font-extrabold font-InterBlack dark:text-white text-3xl">
            Deep Nanavati
          </h2>
          <Link href={"https://www.linkedin.com/in/deepnanavati/"} target="_blank">
            <span className="text-neutral-500 ">@ LinkedIn</span>
          </Link>
          <Link href={"https://github.com/deep150499"} target="_blank">
            <span className="text-neutral-500 "> @ Github</span>
          </Link>
          <Status isAvailbale />
        </div>
      </div>

      <div className="mt-6 max-w-3xl">
        <h3 className="text-neutral-500 text-xs font-InterBold  uppercase ">
          Objective
        </h3>
        <p className="dark:text-neutral-300  font-InterMedium  mt-3">
        As a Front End Web Developer, my goal is to utilize my proficiency in HTML, CSS, Tailwind CSS JavaScript, Typescript, React Js, Next Js to create visually stunning and user-friendly websites. With a keen eye for design and a passion for coding, I am dedicated to delivering innovative solutions that enhance the digital presence of businesses and provide exceptional user experiences.
        </p>
        {/* <p className="mt-6 dark:text-neutral-300 max-sm:text-sm font-InterMedium">
          My objective is straightforward, to create exceptional things
          alongside exceptional individuals. By collaborating harmoniously, we
          can accomplish this goal.
        </p> */}

        <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
          View resume
        </button>
      </div>
      </div>


     
  );
}

export default Frpage;


