"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import navigation from "@/lib/navBarItems";
import { ModeToggle } from "@/components/headers/themeToggler";
import ResumeBtn from "../custom/resumeBtn";
import MobileNavigator from "./mobileNav";
export default function Header() {
  return (
    <header className="sticky z-[100] top-0 left-0 right-0 bg-transparent backdrop-blur-[6px]">
      <div className="w-full h-auto bg-gray-50 shadow-sm dark:bg-transparent min-h-[4.5rem] flex items-center px-[5%]">
        <div className="w-full grid items-center grid-cols-8 md:grid-cols-12">
          <div className="col-span-4">
            <Link href="/" className="text-xl">
              <span
                className={cn(
                  "dark:text-white hover:text-accentColor cursor-pointerdark:text-black navlink"
                )}
              >
                Er.Sandip Subedi
              </span>
            </Link>
          </div>
          <div className="col-span-4 hidden md:block m-auto">
            <div className="flex gap-[3rem] items-center">
              {navigation.map((link) => (
                <Link
                  //data-active={link.href === section}
                  key={link.title}
                  href={link.href}
                  //   className={cn(
                  //     "navlink",
                  //     section === "#project" && "dark:text-black"
                  //   )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4 flex items-center justify-end gap-2 md:gap-10">
            <ResumeBtn />
            <ModeToggle />
            <MobileNavigator />
          </div>
        </div>
      </div>
    </header>
  );
}
