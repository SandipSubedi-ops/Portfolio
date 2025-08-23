"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "@/components/headers/navbar";
import TopContent from "@/components/sections/topContent";
import AboutSection from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import BlogMain from "@/components/sections/blogs/blogMain";
import Projects from "@/components/sections/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const topRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  // wait until client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (topRef.current) {
      gsap.from(topRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, [mounted]);

  if (!mounted) {
    // render SSR-safe static version (no GSAP yet)
    return (
      <div ref={topRef}>
        <Header />
        <TopContent />
        <AboutSection />
        <Experience />
        <BlogMain />
        <ContactSection />
      </div>
    );
  }

  // normal client render with GSAP
  return (
    <div ref={topRef}>
      <Header />
      <TopContent />
      <AboutSection />
      <Experience />
      <Projects />
      <BlogMain />
      <ContactSection />
    </div>
  );
}
