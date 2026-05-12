"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const titleRef = useRef(null);
  const scriptRef = useRef(null);
  const taglineRef = useRef(null);

  useGSAP(() => {
    // Background Zoom on Scroll
    gsap.to(bgRef.current, {
      scale: 1.2,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Parallax Depth for Text
    gsap.to(titleRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(scriptRef.current, {
      y: -50,
      x: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(taglineRef.current, {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: containerRef });

  // Word-by-word reveal for title
  const titleWords = "GENISTA".split("");

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col">
      
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="/landing/hotel-imagges/landing-hotel.png"
          alt="Genista Inn Atmosphere"
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        
        {/* Brand Name with staggered letter reveal */}
        <div ref={titleRef} className="flex">
          {titleWords.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 1, 
                delay: i * 0.1, 
                ease: [0.215, 0.61, 0.355, 1] 
              }}
              className="font-serif text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] uppercase tracking-[0.25em] text-white leading-none font-light inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Script subtext */}
        <motion.div
          ref={scriptRef}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="font-script text-olive italic text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.2rem] leading-none -mt-1 md:-mt-2 ml-6 md:ml-8"
        >
          Inn
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 md:mt-16"
        >
          <button className="relative overflow-hidden border border-beige/40 text-beige px-12 py-4 text-[10px] md:text-[11px] uppercase tracking-[0.5em] font-bold transition-all duration-700 group shadow-2xl">
            <span className="relative z-10 group-hover:text-olive transition-colors duration-500">
                Explore The Inn
            </span>
            <div className="absolute inset-0 bg-beige translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          </button>
        </motion.div>
      </div>

      {/* Bottom tagline */}
      <motion.div
        ref={taglineRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="relative z-10 w-full overflow-hidden pb-12"
      >
        <p className="font-serif uppercase text-white/60 whitespace-nowrap text-[1.1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.6vw] leading-none tracking-[0.4em] text-center">
          Sanctuary of Refined Living
        </p>
      </motion.div>

    </section>
  );
}
