"use client";
import React, { useState, useEffect } from "react";

// Components
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import HorizontalRooms from "@/components/HorizontalRooms";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative w-full bg-charcoal text-white overflow-x-hidden">
        <Navbar isScrolled={isScrolled} />
        <main>
          <Hero />
          <StorySection />
          <HorizontalRooms />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
