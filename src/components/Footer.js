"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className="flex flex-col">
            <span className="font-serif text-2xl tracking-[0.3em] uppercase text-white leading-none">
              GENISTA
            </span>
            <span className="font-script text-gold text-lg italic leading-none mt-1">
              Inn
            </span>
          </div>

          <div className="flex justify-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/30">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>

          <div className="flex flex-col md:items-end gap-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">© 2026 Genista Inn</p>
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 italic">Crafting Silence</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
