"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const rooms = [
  {
    title: "Celestial Suite",
    desc: "Panoramic views of the horizon with floor-to-ceiling glass.",
    img: "/landing/hotel-imagges/Executive Room 2.jpg.jpeg"
  },
  {
    title: "Onyx Lounge",
    desc: "Deep textures and ambient lighting for the ultimate retreat.",
    img: "/landing/hotel-imagges/Premium Room (2).jpg.jpeg"
  },
  {
    title: "Ivory Sanctuary",
    desc: "Minimalist design meeting maximum comfort in white marble.",
    img: "/landing/hotel-imagges/_DSC0122.jpg.jpeg"
  },
  {
    title: "Midnight Terrace",
    desc: "Private outdoor space with a plunge pool and fireplace.",
    img: "/landing/hotel-imagges/_DSC0147.jpg.jpeg"
  }
];

export default function HorizontalRooms() {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    const scrollWidth = scrollRef.current.offsetWidth;
    const amountToScroll = scrollWidth - window.innerWidth;

    gsap.to(scrollRef.current, {
      x: -amountToScroll,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${amountToScroll}`, // Exact match to scroll distance
        pin: true,
        scrub: true,
        invalidateOnRefresh: true,
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-hidden bg-olive">
      <div ref={scrollRef} className="flex h-screen w-max items-center px-[10vw]">
        
        {/* Intro Slide */}
        <div className="w-[80vw] md:w-[40vw] flex flex-col justify-center pr-24 text-beige">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-widest uppercase mb-8">Rooms <br/>& Suites</h2>
          <p className="font-sans text-beige/40 tracking-[0.3em] uppercase text-xs md:text-sm">
            Scroll to explore our private collection
          </p>
          <div className="mt-12 h-[1px] w-full bg-beige/10" />
        </div>

        {/* Room Slides */}
        {rooms.map((room, i) => (
          <div key={i} className="w-[80vw] md:w-[60vw] lg:w-[45vw] h-[70vh] flex flex-col px-8 relative group text-beige">
            <div className="relative flex-1 overflow-hidden shadow-2xl">
              <Image
                src={room.img}
                alt={room.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-olive/20 group-hover:bg-transparent transition-all duration-700" />
            </div>
            <div className="pt-8">
              <span className="text-beige/60 font-script text-2xl mb-2 block">0{i + 1}</span>
              <h3 className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-4">{room.title}</h3>
              <p className="font-sans text-beige/40 text-sm tracking-widest leading-relaxed max-w-sm">
                {room.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Closing Slide */}
        <div className="w-[60vw] flex flex-col items-center justify-center">
            <button className="border border-beige/20 px-12 py-5 text-[11px] uppercase tracking-[0.5em] text-beige hover:bg-beige hover:text-olive transition-all duration-700">
                View All Rooms
            </button>
        </div>

      </div>
    </div>
  );
}
