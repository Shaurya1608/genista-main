"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Banknote, CalendarX, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: <Banknote size={40} strokeWidth={1} />,
    title: "Best Price Guarantee",
    desc: "Get budget-friendly prices with the best accommodation options."
  },
  {
    icon: <CalendarX size={40} strokeWidth={1} />,
    title: "Free Cancellation",
    desc: "Smooth cancellation process at one's convenience."
  },
  {
    icon: <Clock size={40} strokeWidth={1} />,
    title: "Late Check-out",
    desc: "We provide late check-outs for our guests' convenience on request."
  }
];

export default function AdvantagesSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    const cards = cardsRef.current.querySelectorAll('.adv-card');
    gsap.fromTo(cards, 
      { opacity: 0, scale: 0.9, y: 30 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 1.2, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 90%",
        }
      }
    );

    gsap.from(".adv-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
        }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-beige py-24 md:py-32 overflow-hidden border-t border-olive/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-olive/60 font-script text-2xl italic block mb-4">
            Why Choose Hotel Genista Inn
          </span>
          <div className="overflow-hidden">
            <h2 className="adv-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-widest text-olive">
                The Advantages
            </h2>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="adv-card group p-12 border border-olive/10 hover:border-olive transition-all duration-700 text-center flex flex-col items-center bg-beige hover:shadow-2xl hover:shadow-olive/10"
            >
              <div className="text-olive mb-8 group-hover:scale-110 transition-transform duration-500">
                {adv.icon}
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-widest text-olive mb-4">
                {adv.title}
              </h3>
              <p className="font-sans text-olive/50 text-sm tracking-widest leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
