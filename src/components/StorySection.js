"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", 
        scrub: 1,
        pin: pinRef.current,
        pinSpacing: true,
        invalidateOnRefresh: true,
      }
    });

    // Reset initial states
    gsap.set([text1Ref.current, text2Ref.current, text3Ref.current], { opacity: 0, y: 30 });
    gsap.set(text1Ref.current, { opacity: 1, y: 0 }); 

    // Timeline steps
    tl.to({}, { duration: 1 }) 
      .to(text1Ref.current, { opacity: 0, y: -30, duration: 1 })
      .fromTo(text2Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .to({}, { duration: 1 }) 
      .to(text2Ref.current, { opacity: 0, y: -30, duration: 1 })
      .fromTo(text3Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .to({}, { duration: 1 }); 

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full">
      <section ref={pinRef} className="h-screen w-full bg-olive overflow-hidden flex items-center justify-center">
        <div className="relative z-10 container mx-auto text-beige">
            <div className="relative w-full max-w-4xl mx-auto text-center flex items-center justify-center min-h-[300px]">
            
            {/* Frame 1 Content */}
            <div ref={text1Ref} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase">The Art of Silence</h2>
                <p className="font-sans text-beige/60 text-lg md:text-xl tracking-widest leading-relaxed max-w-2xl font-light">
                In a world that never sleeps, Genista Inn offers a sanctuary where time slows down. 
                Discover the profound elegance of stillness.
                </p>
            </div>

            {/* Frame 2 Content */}
            <div ref={text2Ref} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase">Refined Luxury</h2>
                <p className="font-sans text-beige/60 text-lg md:text-xl tracking-widest leading-relaxed max-w-2xl font-light">
                Every detail is curated to evoke a sense of heritage and modern sophistication. 
                Hand-crafted interiors meet world-class service.
                </p>
            </div>

            {/* Frame 3 Content */}
            <div ref={text3Ref} className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase">Beyond Stay</h2>
                <p className="font-sans text-beige/60 text-lg md:text-xl tracking-widest leading-relaxed max-w-2xl font-light italic">
                "It's not just a room, it's a chapter in your story."
                </p>
                <div className="mt-12 h-[1px] w-24 bg-beige/30 mx-auto" />
            </div>

            </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-12 left-12 border-l border-t border-white/10 w-12 h-12" />
        <div className="absolute bottom-12 right-12 border-r border-b border-white/10 w-12 h-12" />
      </section>
    </div>
  );
}
