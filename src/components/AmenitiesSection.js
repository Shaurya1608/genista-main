"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Utensils, Wifi, Tv, HeartPulse, Sparkles, Shield, Zap, Car, ChefHat } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const amenities = [
  { icon: <Utensils size={32}/>, title: "Restaurants", desc: "Fully Equipped" },
  { icon: <ChefHat size={32}/>, title: "Kitchen", desc: "Fully Equipped" },
  { icon: <Wifi size={32}/>, title: "Wi-fi", desc: "Free Wifi" },
  { icon: <Tv size={32}/>, title: "Tv", desc: "Satellite Tv" },
  { icon: <HeartPulse size={32}/>, title: "Doctor on Call", desc: "Emergency service" },
  { icon: <Sparkles size={32}/>, title: "Cleaning", desc: "Daily Cleaning" },
  { icon: <Shield size={32}/>, title: "Security", desc: "24 x 7 security" },
  { icon: <Zap size={32}/>, title: "Electricity", desc: "Power Back Up" },
  { icon: <Car size={32}/>, title: "Parking", desc: "Car Parking" },
];

export default function AmenitiesSection() {
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    const items = gridRef.current.querySelectorAll('.amenity-item');
    gsap.fromTo(items, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
        }
      }
    );

    gsap.from(".amenities-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
        }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-beige py-16 md:py-20 border-t border-olive/5 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="overflow-hidden mb-12">
            <h2 className="amenities-title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-olive">
                Amenities
            </h2>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-olive/10"
        >
          {amenities.map((item, i) => (
            <div 
              key={i}
              className="amenity-item border-r border-b border-olive/10 p-8 md:p-10 flex flex-col items-center group hover:bg-olive transition-all duration-700"
            >
              <div className="text-olive group-hover:text-beige mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl uppercase tracking-widest text-olive group-hover:text-beige transition-colors duration-500 mb-1">
                {item.title}
              </h3>
              <p className="font-sans text-olive/40 group-hover:text-beige/40 text-[9px] uppercase tracking-[0.4em] transition-colors duration-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
