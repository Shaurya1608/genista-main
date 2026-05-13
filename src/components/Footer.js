"use client";
import React from 'react';
import { Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-olive text-beige py-16 sm:py-20 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 sm:mb-20">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col mb-6 sm:mb-8">
              <span className="font-serif text-2xl tracking-[0.3em] uppercase">GENISTA</span>
              <span className="font-script text-beige/60 text-lg italic -mt-1">Inn</span>
            </div>
            <p className="font-sans text-beige/40 text-sm tracking-widest leading-relaxed font-light max-w-xs">
              A sanctuary of silence and refined luxury in the heart of Ranchi. 
              Discover the profound elegance of stillness.
            </p>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-serif text-lg uppercase tracking-widest mb-6 sm:mb-8">Phone Support</h4>
            <div className="space-y-4 font-sans text-beige/50 text-sm tracking-widest font-light">
              <p className="flex items-center justify-center sm:justify-start gap-3">
                <Phone size={14} className="text-beige/30" />
                +91 73600 66123
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-3">
                <Phone size={14} className="text-beige/30" />
                +91 61200 97014
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-3">
                <Phone size={14} className="text-beige/30" />
                +91 99735 13572
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-beige/20 mt-4">24 Hours a Day</p>
            </div>
          </div>

          {/* Address Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-serif text-lg uppercase tracking-widest mb-6 sm:mb-8">Location</h4>
            <div className="space-y-6 font-sans text-beige/50 text-sm tracking-widest font-light">
              <p className="flex items-start justify-center sm:justify-start gap-3">
                <MapPin size={16} className="text-beige/30 shrink-0 mt-1" />
                <span>Purulia Road, Kantatoli Chowk,<br />Ranchi - 834001, Jharkhand</span>
              </p>
              <div className="space-y-2 pt-4 border-t border-white/5 w-full">
                <p className="flex items-center justify-center sm:justify-start gap-3">
                  <Mail size={14} className="text-beige/30" />
                  hotelgenistainn@gmail.com
                </p>
                <p className="flex items-center justify-center sm:justify-start gap-3">
                  <Mail size={14} className="text-beige/30" />
                  gm@hotelgenistainn.com
                </p>
              </div>
            </div>
          </div>

          {/* Social Column */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-serif text-lg uppercase tracking-widest mb-6 sm:mb-8">Connect With Us</h4>
            <p className="text-[10px] uppercase tracking-[0.3em] text-beige/20 mb-6">Social Media Channels</p>
            <div className="flex gap-6">
              {[Globe, Globe, Globe].map((Icon, i) => (
                <a key={i} href="#" className="text-beige/40 hover:text-beige transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[9px] uppercase tracking-[0.5em] text-beige/20">
            &copy; 2024 Hotel Genista Inn. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a href="#" className="text-[9px] uppercase tracking-[0.5em] text-beige/20 hover:text-beige transition-colors">Privacy Policy</a>
            <a href="#" className="text-[9px] uppercase tracking-[0.5em] text-beige/20 hover:text-beige transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
