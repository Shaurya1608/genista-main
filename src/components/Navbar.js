"use client";
import React from 'react';

export default function Navbar({ isScrolled }) {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? "bg-black/70 backdrop-blur-xl py-3" : "bg-transparent py-5 md:py-6"
    }`}>
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div className="flex flex-col cursor-pointer group">
          <span className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase text-white leading-none group-hover:text-gold transition-colors duration-300">
            GENISTA
          </span>
          <span className="font-script text-gold text-sm italic leading-none mt-0.5">
            Inn
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-medium text-white/50">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <span className="text-white/20">/</span>
          <a href="#rooms" className="hover:text-white transition-colors">Rooms</a>
          <span className="text-white/20">/</span>
          <a href="#services" className="hover:text-white transition-colors">Experience</a>
          <span className="text-white/20">/</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* CTA — plain text style matching the reference */}
        <button className="text-white text-[10px] uppercase tracking-[0.4em] font-bold hover:text-gold transition-colors duration-300">
          / BOOK A STAY /
        </button>

      </div>
    </nav>
  );
}
