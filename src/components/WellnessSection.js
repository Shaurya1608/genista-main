"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function WellnessSection() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // 1. Image Clip Path Reveal (Expands on scroll)
    gsap.fromTo(imageWrapperRef.current, 
      { clipPath: "inset(20% 20% 20% 20%)" },
      { 
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: true,
        }
      }
    );

    // 2. Title Line Wipe
    const titleLines = titleRef.current.querySelectorAll('.line-inner');
    gsap.to(titleLines, {
      y: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 90%",
      }
    });

    // 3. Text Fade Up
    gsap.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 85%",
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[80vh] bg-beige text-olive py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <span className="text-olive font-script text-2xl mb-3 block">Tranquility</span>
          
          <h2 ref={titleRef} className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 uppercase tracking-widest leading-tight overflow-hidden">
            <div className="overflow-hidden mb-1">
              <span className="line-inner inline-block translate-y-[100%]">Relaxation &</span>
            </div>
            <div className="overflow-hidden">
              <span className="line-inner inline-block translate-y-[100%] text-olive/60">Wellness</span>
            </div>
          </h2>

          <div ref={textRef} className="opacity-0 translate-y-6">
            <p className="font-sans text-olive/70 text-base md:text-lg tracking-widest leading-relaxed max-w-lg mb-10 font-light">
              Discover the perfect blend of tranquility and rejuvenation with our relaxation and wellness offerings. 
              Whether you're seeking a peaceful escape or therapeutic treatments.
            </p>
            <button className="group relative overflow-hidden bg-olive text-beige px-8 py-3.5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 shadow-xl">
              <span className="relative z-10 group-hover:text-olive transition-colors duration-500">View Prices</span>
              <div className="absolute inset-0 bg-beige translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* Right Image with Clip Path Reveal */}
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[70vh]">
          <div ref={imageWrapperRef} className="relative w-full h-full overflow-hidden shadow-2xl">
            <Image
              src="/landing/hotel-imagges/Premium Room (4).jpg.jpeg"
              alt="Wellness"
              fill
              className="object-cover scale-110"
            />
          </div>
          {/* Floating border decor */}
          <div className="absolute -inset-3 border border-olive/20 -z-10 translate-x-3 translate-y-3" />
        </div>

      </div>
    </section>
  );
}
