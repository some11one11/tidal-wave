import React from 'react';
import { motion } from 'framer-motion';
import TidalVideo from './assets/TidalVideo.mp4';
export default function PortfolioTidalBackground({ children }) {
  const bubbles = Array.from({ length: 55 }); 

  return (
    <div className="relative min-h-screen w-full bg-slate-950 font-sans text-white overflow-hidden">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#083344] to-[#020617]" />

        <div className="absolute inset-0 w-full h-full opacity-40 mix-blend-screen pointer-events-none blur-[1px] select-none scale-105">
        <video 
            className="w-full h-full object-cover"
            src={TidalVideo}
            autoPlay 
            loop 
            muted 
            playsInline
        />
        </div>

        <motion.div 
          className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen blur-[120px] opacity-40"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen blur-[120px] opacity-30"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

     
        <div className="absolute inset-0 opacity-50">
          {bubbles.map((_, index) => {
            const size = Math.random() * 12 + 4;
            return (
              <motion.div
                key={index}
                className="absolute rounded-full border border-cyan-400 bg-cyan-300/10 shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                style={{
                  width: size,
                  height: size,
                  left: `${Math.random() * 100}%`,
                  bottom: `-50px`,
                }}
                animate={{
                  y: ['0vh', '-120vh'],
                  x: ['0px', `${Math.random() * 40 - 20}px`, '0px'],
                }}
                transition={{
                  y: { duration: Math.random() * 12 + 6, repeat: Infinity, ease: "linear", delay: Math.random() * 5 },
                  x: { duration: Math.random() * 4 + 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            );
          })}
        </div>

   
        <div className="absolute bottom-0 w-full h-[220px] flex items-end">
          <svg className="w-full h-full" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <motion.g fill="#064e3b" animate={{ x: [-90, 85] }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
              <use href="#gentle-wave" x="48" y="0" />
            </motion.g>
            <motion.g fill="#0e7490" animate={{ x: [85, -90] }} transition={{ repeat: Infinity, duration: 5, ease: "linear" }}>
              <use href="#gentle-wave" x="48" y="3" />
            </motion.g>
            <motion.g fill="#22d3ee" filter="url(#glow)" animate={{ x: [-90, 85], y: [0, -2, 0] }} transition={{ x: { repeat: Infinity, duration: 3, ease: "linear" }, y: { repeat: Infinity, duration: 0.5, ease: "easeInOut" } }}>
              <use href="#gentle-wave" x="48" y="7" />
            </motion.g>
          </svg>
        </div>

   
   
        <div className="absolute inset-0 bg-slate-950/60 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col items-center p-8 md:p-16">
        {children}
      </div>
      
    </div>
  );
}