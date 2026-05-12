"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Components
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WellnessSection from "@/components/WellnessSection";
import StorySection from "@/components/StorySection";
import StructureSection from "@/components/StructureSection";
import HorizontalRooms from "@/components/HorizontalRooms";
import AmenitiesSection from "@/components/AmenitiesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Ensure GSAP triggers are correctly calculated
    ScrollTrigger.refresh();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative w-full bg-beige text-olive">
        <Navbar isScrolled={isScrolled} />
        <main>
          {/* 1. The Entrance */}
          <Hero />

          {/* 2. The Philosophy */}
          <WellnessSection />

          {/* 3. The Deep Narrative */}
          <StorySection />

          {/* 4. The Craftsmanship */}
          <StructureSection />

          {/* 5. The Private Collection (Rooms) */}
          <HorizontalRooms />

          {/* 6. The Lifestyle Details */}
          <AmenitiesSection />

          {/* 7. The Trust Layer */}
          <AdvantagesSection />
        </main>
        
        {/* 8. The Closing */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
