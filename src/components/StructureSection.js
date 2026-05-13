"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Rooms", value: 45 },
  { label: "Suites", value: 13 },
  { label: "Floor", value: 6 },
  { label: "Staff", value: 75 },
];

const progressBars = [
  { label: "Room Service", percentage: 82 },
  { label: "Breakfast Included", percentage: 55 },
  { label: "Laundry & Ironing", percentage: 73 },
];

export default function StructureSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const barsRef = useRef(null);

  useGSAP(() => {
    const counters = statsRef.current.querySelectorAll('.stat-value');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-value'));
        gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power2.out",
            scrollTrigger: {
                trigger: counter,
                start: "top 90%",
            }
        });
    });

    const bars = barsRef.current.querySelectorAll('.bar-inner');
    bars.forEach(bar => {
        const target = bar.getAttribute('data-target');
        gsap.to(bar, {
            width: `${target}%`,
            ease: "power2.out",
            scrollTrigger: {
                trigger: bar,
                start: "top 95%",
                end: "top 70%",
                scrub: 1,
            }
        });
    });

    gsap.to(".structure-img-1", {
        y: window.innerWidth < 768 ? -30 : -100,
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-beige text-olive py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Stats Bar */}
        <div ref={statsRef} className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="text-4xl md:text-6xl font-serif text-olive mb-2">
                <span className="stat-value" data-value={stat.value}>0</span>
              </div>
              <div className="text-[9px] uppercase tracking-[0.5em] text-olive/40">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Progress Bars & Text */}
          <div ref={barsRef} className="order-2 lg:order-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="text-olive font-script text-xl mb-3 block italic opacity-60">Hotel Facilities</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 uppercase tracking-widest leading-tight">The Structure</h2>
            <p className="font-sans text-olive/50 text-sm tracking-widest leading-relaxed mb-12 max-w-lg font-light">
              All the well-appointed deluxe, executive, premium, and suite rooms in our hotel are meticulously designed to assure the guests feel pampered. 
              Designed for luxury and great comfort.
            </p>

            <div className="space-y-8 w-full max-w-lg">
              {progressBars.map((bar, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[9px] uppercase tracking-[0.4em] font-bold">{bar.label}</span>
                    <span className="text-olive font-serif italic text-lg">{bar.percentage}%</span>
                  </div>
                  <div className="h-[1.5px] w-full bg-olive/10 relative">
                    <div 
                      className="bar-inner absolute inset-0 bg-olive w-0"
                      data-target={bar.percentage}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Images Grid with Parallax */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[40vh] sm:h-[50vh]">
            <div className="structure-img-1 relative overflow-hidden rounded-sm translate-y-6 shadow-xl">
              <Image src="/landing/hotel-imagges/_DSC0145.jpg.jpeg" alt="Detail 1" fill className="object-cover brightness-90 scale-110" />
            </div>
            <div className="relative overflow-hidden rounded-sm shadow-xl">
              <Image src="/landing/hotel-imagges/_DSC0146.jpg.jpeg" alt="Detail 2" fill className="object-cover brightness-90" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
