"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isScrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Rooms", href: "#rooms" },
    { name: "Experience", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-4 sm:px-6 md:px-12 py-3 md:py-4 ${
      isScrolled ? 'bg-beige/80 backdrop-blur-xl py-2 md:py-2.5 shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col cursor-pointer group"
        >
          <span className={`font-serif text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase transition-colors duration-500 ${
            isScrolled ? 'text-olive' : 'text-white'
          }`}>
            GENISTA
          </span>
          <span className="font-script text-olive text-xs sm:text-sm italic leading-none mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Inn
          </span>
        </motion.div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative text-[10px] uppercase tracking-[0.4em] font-bold transition-colors duration-300 group ${
                isScrolled ? 'text-olive/60 hover:text-olive' : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-500 group-hover:w-full ${
                isScrolled ? 'bg-olive' : 'bg-white'
              }`} />
            </motion.a>
          ))}
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 sm:gap-8">
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`hidden md:flex items-center justify-center px-6 py-2 border transition-all duration-500 group relative overflow-hidden ${
                isScrolled ? 'border-olive/20 text-olive' : 'border-white/20 text-white'
            }`}
          >
            <span className="relative z-10 text-[9px] uppercase tracking-[0.4em] font-bold group-hover:text-beige transition-colors duration-500">
                Book A Stay
            </span>
            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ${
                 isScrolled ? 'bg-olive' : 'bg-white/20'
            }`} />
          </motion.button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 p-2 -mr-2 ${
                isScrolled ? 'text-olive' : 'text-white'
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-beige border-t border-olive/5 overflow-hidden lg:hidden shadow-2xl"
          >
            <div className="py-12 px-6 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-olive text-sm sm:text-base uppercase tracking-[0.5em] font-bold hover:text-olive-light transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-4 bg-olive text-beige px-10 py-4 text-[10px] uppercase tracking-[0.4em] font-bold w-full max-w-[280px]">
                Book a Stay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

  );
}
