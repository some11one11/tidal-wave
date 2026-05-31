import React from 'react';
import { motion } from 'framer-motion';

export default function TidalWaveBackground({ children }) {
  const particles = Array.from({ length: 25 });

  // DEFINIÇÃO DO CICLO DE TEMPO (20 segundos por loop)
  // Estado 1: Escuro/Noite Inicial
  // Estado 2: Claro/Ciano Intenso
  // Estado 3: Entardecer Laranja/Pôr do sol
  // Estado 4: Retorno ao Escuro
  const timeCycle = {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    // Fundo mudando de tom (Azul escuro -> Azul oceano -> Roxo/Céu de pôr do sol)
    <motion.div 
      className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center font-sans select-none"
      animate={{
        backgroundColor: ["#020617", "#083344", "#1e1b4b", "#020617"]
      }}
      transition={timeCycle}
    >
      
      {/* ================= EFEITOS DE BORDA DINÂMICOS ================= */}
      
      {/* 1. Brilho do Topo mudando de cor */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none mix-blend-screen blur-md"
        animate={{ 
          opacity: [0.4, 0.7, 0.8, 0.4],
          background: [
            "linear-gradient(to bottom, #06b6d4, rgba(6,182,212,0.1), transparent)",
            "linear-gradient(to bottom, #22d3ee, rgba(34,211,238,0.2), transparent)",
            "linear-gradient(to bottom, #f97316, rgba(249,115,22,0.2), transparent)",
            "linear-gradient(to bottom, #06b6d4, rgba(6,182,212,0.1), transparent)"
          ]
        }}
        transition={timeCycle}
      />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[3px] z-20" 
        animate={{
          backgroundColor: ["#22d3ee", "#22d3ee", "#f97316", "#22d3ee"],
          boxShadow: [
            "0 0 20px #22d3ee",
            "0 0 30px #22d3ee",
            "0 0 30px #f97316",
            "0 0 20px #22d3ee"
          ]
        }}
        transition={timeCycle}
      />

      {/* 2. Laser Lateral Esquerdo mudando de cor e pulsando */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none mix-blend-screen blur-sm z-20"
        animate={{
          background: [
            "linear-gradient(to right, #2563eb, transparent)",
            "linear-gradient(to right, #06b6d4, transparent)",
            "linear-gradient(to right, #ea580c, transparent)",
            "linear-gradient(to right, #2563eb, transparent)"
          ],
          opacity: [0.3, 0.8, 0.6, 0.3]
        }}
        transition={timeCycle}
      />
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-[4px] z-30"
        animate={{ 
          background: [
            "linear-gradient(to bottom, #22d3ee, #2563eb)",
            "linear-gradient(to bottom, #22d3ee, #06b6d4)",
            "linear-gradient(to bottom, #f97316, #dc2626)",
            "linear-gradient(to bottom, #22d3ee, #2563eb)"
          ]
        }}
        transition={timeCycle}
      />

      {/* 3. Laser Lateral Direito mudando de cor e pulsando */}
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none mix-blend-screen blur-sm z-20"
        animate={{
          background: [
            "linear-gradient(to l, #2563eb, transparent)",
            "linear-gradient(to l, #06b6d4, transparent)",
            "linear-gradient(to l, #ea580c, transparent)",
            "linear-gradient(to l, #2563eb, transparent)"
          ],
          opacity: [0.3, 0.8, 0.6, 0.3]
        }}
        transition={timeCycle}
      />
      <motion.div 
        className="absolute right-0 top-0 bottom-0 w-[4px] z-30"
        animate={{ 
          background: [
            "linear-gradient(to bottom, #2563eb, #22d3ee)",
            "linear-gradient(to bottom, #06b6d4, #22d3ee)",
            "linear-gradient(to bottom, #dc2626, #f97316)",
            "linear-gradient(to bottom, #2563eb, #22d3ee)"
          ]
        }}
        transition={timeCycle}
      />

      {/* Vinheta escura nos cantos da tela */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(2,6,23,0.7)_100%)] pointer-events-none z-10" />

      {/* ================= ELEMENTOS DO MEIO / FUNDO ================= */}

      {/* Partículas Quadradas mudando de cor de acordo com o clima */}
      <div className="absolute inset-0 pointer-events-none opacity-60 z-10">
        {particles.map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-sm"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 90 + 5}%`,
              bottom: `-20px`,
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: ['0px', `${Math.random() * 60 - 30}px`],
              backgroundColor: ["#67e8f9", "#22d3ee", "#fdba74", "#67e8f9"],
              boxShadow: [
                "0 0 12px #22d3ee",
                "0 0 12px #22d3ee",
                "0 0 12px #f97316",
                "0 0 12px #22d3ee"
              ]
            }}
            transition={{
              y: { duration: Math.random() * 5 + 3, repeat: Infinity, ease: "linear", delay: Math.random() * 4 },
              x: { duration: Math.random() * 5 + 3, repeat: Infinity, ease: "linear", delay: Math.random() * 4 },
              backgroundColor: timeCycle,
              boxShadow: timeCycle
            }}
          />
        ))}
      </div>

      {/* Lanterna de Luz Central Suave mudando de tom */}
      <motion.div 
        className="absolute w-[700px] h-[700px] rounded-full blur-[160px] mix-blend-screen pointer-events-none"
        animate={{
          scale: [1, 1.1, 1.2, 1],
          opacity: [0.3, 0.6, 0.5, 0.3],
          backgroundColor: ["#06b6d4", "#22d3ee", "#ea580c", "#06b6d4"]
        }}
        transition={timeCycle}
      />

      {/* ================= ONDAS DO RODAPÉ (TRANSIÇÃO CYAN -> LARANJA) ================= */}
      <motion.div 
        className="absolute bottom-0 w-full leading- z-20"
        animate={{
          filter: [
            "drop-shadow(0 -15px 20px rgba(34,211,238,0.5))",
            "drop-shadow(0 -15px 30px rgba(34,211,238,0.7))",
            "drop-shadow(0 -15px 30px rgba(249,115,22,0.7))",
            "drop-shadow(0 -15px 20px rgba(34,211,238,0.5))"
          ]
        }}
        transition={timeCycle}
      >
        <svg className="relative block w-full h-[180px]" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          
          {/* Onda de trás (Mais escura) */}
          <motion.g 
            animate={{ 
              x: [-90, 85],
              fill: ["#083344", "#0e7490", "#7c2d12", "#083344"]
            }} 
            transition={{ 
              x: { repeat: Infinity, duration: 9, ease: "linear" },
              fill: timeCycle
            }}
          >
            <use href="#wave-path" x="48" y="0" />
          </motion.g>

          {/* Onda do meio */}
          <motion.g 
            animate={{ 
              x: [85, -90],
              fill: ["#0e7490", "#06b6d4", "#ea580c", "#0e7490"]
            }} 
            transition={{ 
              x: { repeat: Infinity, duration: 6, ease: "linear" },
              fill: timeCycle
            }}
          >
            <use href="#wave-path" x="48" y="3" />
          </motion.g>

          {/* Onda da frente (Brilhante principal) */}
          <motion.g 
            animate={{ 
              x: [-90, 85],
              fill: ["#22d3ee", "#22d3ee", "#f97316", "#22d3ee"]
            }} 
            transition={{ 
              x: { repeat: Infinity, duration: 4, ease: "linear" },
              fill: timeCycle
            }}
          >
            <use href="#wave-path" x="48" y="5" />
          </motion.g>
        </svg>
      </motion.div>

      {/* Conteúdo externo */}
      <div className="z-30 relative w-full h-full flex flex-col items-center justify-center">
        {children}
      </div>

    </motion.div>
  );
}