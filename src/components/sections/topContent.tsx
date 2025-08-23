"use client";

import { useEffect, useRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function TopContent() {
  gsap.registerPlugin(useGSAP);
  const sectionRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(sectionRef);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      q(".text-animation"),
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 }
    )
      .fromTo(
        q(".bio-animation"),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        q(".contact-animation"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(
        q(".image-animation"),
        { rotateY: -30, opacity: 0 },
        { rotateY: 0, opacity: 1, duration: 1 },
        "-=0.4"
      );
  }, [q]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative z-50 min-h-screen bg-baseBackground flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-16 pt-16 md:pt-12"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left">
        <div className="overflow-hidden">
          <h1 className="text-animation text-4xl md:text-6xl font-bold leading-tight dark:bg-[linear-gradient(#fff,rgba(255,255,255,.6))] bg-clip-text text-transparent dark:text-transparent">
            Hi! I&apos;m{" "}
            <span className="text-accentColor">Er. Sandip Subedi</span>
          </h1>
        </div>

        <div className="overflow-hidden">
          <h2 className="text-animation text-2xl md:text-4xl font-semibold">
            A <span className="text-accentColor">Fullstack</span>{" "}
            <span className="bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-400 text-transparent bg-clip-text">
              Developer
            </span>
          </h2>
        </div>

        <p className="bio-animation text-sm md:text-base max-w-md mx-auto md:mx-0 opacity-80">
          Passionate and detail-oriented developer with years of experience in
          web development with<b>.NET</b>, <b>JavaScript</b>,<b>jQuery</b>,{" "}
          <b>Nodejs</b>, and many more modern technologies. Where creativity
          meets functionality.
        </p>

        <Link
          href="#contact"
          aria-label="Contact Me"
          className="contact-animation bg-accentColor px-6 py-2 rounded-md shadow-md mt-4 flex items-center gap-2 group w-fit mx-auto md:mx-0 transition-transform hover:scale-105"
        >
          <span className="dark:text-black text-sm relative z-10">
            Contact Me
          </span>
          <ArrowRightIcon className="text-black relative z-10 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Right Content - Image */}
      <div className="flex-1 flex justify-center items-center">
        <div className="image-animation relative w-72 h-72 md:w-96 md:h-96 perspective-1000">
          <div className="absolute inset-0 shadow-xl overflow-hidden transform transition-transform hover:rotate-y-6 hover:scale-105 duration-500 rounded-full">
            <img
              src="/Sandip.jpeg"
              alt="Sandip Subedi"
              className="w-full h-full object-cover rounded-full mix-blend-multiply bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
