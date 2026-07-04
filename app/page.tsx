"use client";

import { Inter, JetBrains_Mono, Syne, Tac_One } from "next/font/google";
import styles from "./page.module.css";

import Awards from "../components/Awards/Awards";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Experience from "../components/Experience/Experience";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Contact from "@/components/Contact/Contact";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const tacOne = Tac_One({ subsets: ["latin"], weight: "400", variable: "--font-tac-one" });

export default function Home() {
  return (
    <main className={`${styles.page} ${inter.variable} ${jetBrainsMono.variable} ${syne.variable} ${tacOne.variable}`}>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Experiences */}
      <Experience />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Awards */}
      <Awards />

      {/* Contact */}
      <Contact />

    </main>
  );
}
