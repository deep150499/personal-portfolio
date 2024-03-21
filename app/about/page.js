"use client";

import Link from "next/link";
import React from "react";
import { TbArrowBackUp } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt , FaReact, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

function Aboutpage() {

  return (
    <div>
      <div className="relative max-w-5xl mx-auto px-8">
        <div className="relative mt-14">
          <h2 className="text-xl text-center dark:text-neutral-400 font-InterBold uppercase ">
            About me
          </h2>
          <Link href={"/"}>
            <div className=" bg-neutral-700/10 rounded-md absolute -top-1  w-12 h-8 flex  items-center justify-center ">
              <TbArrowBackUp className="dark:text-white  text-black text-xl" />
            </div>
          </Link>
        </div>

        <div className="mt-10">
          <h4 className="my-11 font-InterBold">How it all started</h4>

          <p className="my-9">
          My journey into front end development began with a curiosity about how websites were built, leading me to explore HTML, CSS, and JavaScript. As I delved deeper into these languages and their applications, I discovered a passion for creating visually appealing and interactive user interfaces. Through formal education, self-guided learning, practice, and continuous exploration of emerging technologies, I honed my skills into fulfilling career as a front end developer.
          </p>

          <h4 className="font-InterBold">My Stack</h4>

          <div className="flex gap-x-8 justify-around mt-16">
          <IoLogoHtml5 className="text-[#e75823] text-2xl" />
          <FaCss3Alt className="text-[#2599f9] text-2xl" />
          <SiTailwindcss className="text-[#35bdf7] text-2xl"/>
          <IoLogoJavascript className="text-[#f1dc4c] text-2xl" />
          <SiTypescript className="text-[#2e78c7] text-2xl" />
          <FaReact className="text-[#5fdbfb] text-2xl" />
          <TbBrandNextjs className="text-2xl" />
          <FaGithub className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
