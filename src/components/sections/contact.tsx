"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="max-h-max bg-gray-100 dark:bg-[#161D1F] py-[140px] px-10 lg:px-[5%]"
    >
      <div className="w-full max-w-[1100px] h-full m-auto flex flex-col gap-40 items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="overflow-hidden">
            <div className="title-animation dark:text-white text-lg">
              Want to collaborate?
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="title-animation text-5xl navlink text-accentColor">
              Contact me!
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center">
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/sandip-subedi-595794280/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact me on linkedin"
              className="rounded-full group hover:border-accentColor flex items-center gap-2 border py-[1px] px-4"
            >
              <div className="font-semibold group-hover:scale-105 dark:text-white">
                in
              </div>
              <div className="text-xs dark:text-white group-hover:scale-105">
                Linkedin
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-accentColor text-lg font-semibold">
              Er.Sandp Subedi
            </div>
            <div className="dark:text-white text-sm">
              IT Engineer||Software Developer
            </div>
          </div>
          <div className="overflow-hidden flex justify-center items-center">
            <div className="title-animation w-full md:max-w-[80%] text-center dark:text-gray-400">
              I&apos;m always excited to connect with like-minded professionals
              and potential collaborators. Whether you have a project in mind,
              need assistance, or just want to say hello, feel free to reach
              out! You can email me as well at{" "}
              <a
                href="mailto:subediees@gmail.com"
                title="click to mail"
                className="navlink"
              >
                subediees@gmail.com{" "}
              </a>{" "}
              or call me
              <a className="navlink"> +977-9862383294</a>
            </div>
          </div>
          <div className="end-title dark:text-white text-md">
            Unity is a Key.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
  );
}
