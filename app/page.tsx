"use client";
import Contact from "@/components/main/Contact";
import Cursor from "@/components/main/Cursor";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import MiniProjects from "@/components/main/MiniProjects";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <MiniProjects />
        <Contact />
      </div>
    </main>
  );
}
