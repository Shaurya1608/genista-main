"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=300%", // Scroll for 3 lengths of the viewport
        scrub: true,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Frame 1: Text 1 fades in
    tl.to(text1Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(text1Ref.current, { opacity: 0, y: -50, duration: 1, delay: 0.5 })

    // Frame 2: Text 2 fades in + Image scale
    tl.to(text2Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(imageRef.current, { scale: 1.1, duration: 2, ease: "none" }, "<")
      .to(text2Ref.current, { opacity: 0, y: -50, duration: 1, delay: 0.5 })

    // Frame 3: Text 3 fades in
    tl.to(text3Ref.current, { opacity: 1, y: 0, duration: 1 })

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative h-screen w-full bg-charcoal overflow-hidden">
      
      {/* Fixed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          ref={imageRef}
          src="/landing/hotel-imagges/landing-hotel-2.png" 
          alt="Luxury Interior"
          fill
          className="object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 h-full container mx-auto flex items-center justify-center">
        <div className="max-w-4xl text-center px-6">
          
          {/* Frame 1 Content */}
          <div ref={text1Ref} className="opacity-0 translate-y-12 absolute inset-0 flex flex-col items-center justify-center p-8">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase">The Art of Silence</h2>
            <p className="font-sans text-white/60 text-lg md:text-xl tracking-widest leading-relaxed max-w-2xl font-light">
              In a world that never sleeps, Genista Inn offers a sanctuary where time slows down. 
              Discover the profound elegance of stillness.
            </p>
          </div>

          {/* Frame 2 Content */}
          <div ref={text2Ref} className="opacity-0 translate-y-12 absolute inset-0 flex flex-col items-center justify-center p-8">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase">Refined Luxury</h2>
            <p className="font-sans text-white/60 text-lg md:text-xl tracking-widest leading-relaxed max-w-2xl font-light">
              Every detail is curated to evoke a sense of heritage and modern sophistication. 
              Hand-crafted interiors meet world-class service.
            </p>
          </div>

          {/* Frame 3 Content */}
          <div ref={text3Ref} className="opacity-0 translate-y-12 absolute inset-0 flex flex-col items-center justify-center p-8">
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase">Beyond Stay</h2>
            <p className="font-sans text-white/60 text-lg md:text-xl tracking-widest leading-relaxed max-w-2xl font-light italic">
              "It's not just a room, it's a chapter in your story."
            </p>
            <div className="mt-12 h-[1px] w-24 bg-gold" />
          </div>

        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-12 left-12 border-l border-t border-white/20 w-12 h-12" />
      <div className="absolute bottom-12 right-12 border-r border-b border-white/20 w-12 h-12" />
    </section>
  );
}
