"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function ResumeBtn() {
  const topTween = useRef(null);
  const rightTween = useRef(null);
  const bottomTween = useRef(null);
  const leftTween = useRef(null);

  return (
    <a
      role="button"
      href="/sandipSubediResumeWord.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Resume"
      className="group hidden duration-150 lg:flex md:justify-center md:items-center relative h-[34px] w-[100px] overflow-hidden border-[.01px] border-gray-800 bg-accentColor"
    >
      <div className="dark:text-black relative z-[3] text-sm">Resume</div>
      <div className="sr-only">Contact Me</div>
      <div className="contact_me_btn_overlay group-hover:opacity-100" />
      {/* animated border line */}
      <span className="absolute inset-0 pointer-events-none">
        <span className="absolute top-0 left-0 w-full h-[2px] bg-pink-800 animate-border-top" />
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-800 animate-border-bottom" />
        <span className="absolute top-0 left-0 h-full w-[2px] bg-pink-800 animate-border-left" />
        <span className="absolute top-0 right-0 h-full w-[2px] bg-pink-800 animate-border-right" />
      </span>
    </a>
  );
}
