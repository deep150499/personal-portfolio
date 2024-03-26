"use client";

import Status from "@/app/Status/page";

import React from "react";
import Link from "next/link";
import Image from "next/image";

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

        <Link href={'https://drive.google.com/file/d/1RCUP6j8aG_ZPNEg5EAOJgSoE92mfqZqb/view?usp=sharing'} target="_blank"><button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-44 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
          View resume
        </button>
        </Link>
      </div>
      </div>


     
  );
}

export default Frpage;


