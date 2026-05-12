"use client";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Sync GSAP with Lenis's requestAnimationFrame
    const update = (time) => {
      ScrollTrigger.update();
    };
    
    gsap.ticker.add(update);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ 
      lerp: 0.05, 
      duration: 1.2, 
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    }}>
      {children}
    </ReactLenis>
  );
}
