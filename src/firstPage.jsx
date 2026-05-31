import { useState, useEffect } from 'react';
import TidalWaveBackground from './fundo';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimacaoMetades from './Transicao';
import { useAudio } from './AudioContext';
export default function FirstPage() {
  const { playAudio, isPlaying } = useAudio();
  const [activeTransition, setActiveTransition] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isNavigating && activeTransition) {
      const timer = setTimeout(() => {
        setActiveTransition(false);
        setIsNavigating(false);
        navigate('/home');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isNavigating, activeTransition, navigate]);
  const timeCycle = {
    duration: 20,
    repeat: Infinity,
    ease: "easeInOut"
  };
    

  return (
    
    <div className="w-screen h-screen flex items-center justify-center relative overflow-hidden">
      
     
      <TidalWaveBackground onEnter={() => setActiveTransition(true)} />
      <div className="absolute z-50"> 
        <AnimacaoMetades rodar={activeTransition} />
      </div>
  
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          borderColor: ["rgba(6,182,212,0.4)", "rgba(34,211,238,0.5)", "rgba(249,115,22,0.5)", "rgba(6,182,212,0.4)"],
          boxShadow: [
            "0 0 50px rgba(6,182,212,0.25)",
            "0 0 50px rgba(34,211,238,0.35)",
            "0 0 50px rgba(249,115,22,0.35)",
            "0 0 50px rgba(6,182,212,0.25)"
          ]
        }}
        transition={{
          opacity: { duration: 0.6, ease: "easeOut" },
          scale: { duration: 0.6, ease: "easeOut" },
          y: { duration: 0.6, ease: "easeOut" },
          borderColor: timeCycle,
          boxShadow: timeCycle
        }}
        className="absolute z-40 text-center p-10 rounded-2xl backdrop-blur-md bg-slate-950/75 border max-w-sm w-full mx-4"
      >
        

        <div className="flex items-center justify-center gap-3 mb-2 overflow-hidden">
          <motion.span 
            animate={{ 
              x: [-4, 4, -4],
              color: ["#22d3ee", "#22d3ee", "#f97316", "#22d3ee"]
            }}
            transition={{ 
              x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              color: timeCycle
            }}
            className="font-mono text-xl tracking-tighter opacity-70"
          >
            {"<<<"}
          </motion.span>
           {/* <<<<<<<<<<TIDAL<<<<<<<<<<<<*/}
          <h1 className="text-4xl font-black tracking-wider text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Tidal
          </h1>
          <motion.span 
            animate={{ 
              x: [4, -4, 4],
              color: ["#22d3ee", "#22d3ee", "#f97316", "#22d3ee"]
            }}
            transition={{ 
              x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
              color: timeCycle
            }}
            className="font-mono text-xl tracking-tighter opacity-70"
          >
          
            {"<<<<<<"}
          </motion.span>
        </div>

      
        <div className="flex items-center justify-center gap-3 mb-8 overflow-hidden">
          <motion.span 
            animate={{ 
              x: [-4, 4, -4],
              color: ["#22d3ee", "#22d3ee", "#f97316", "#22d3ee"]
            }}
            transition={{ 
              x: { repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 },
              color: timeCycle
            }}
            className="font-mono text-xl tracking-tighter opacity-70"
          >
            {">>>>>>>>"}
          </motion.span>
          
         {/* >>>>>>>> Wave >>>>>>>>>>>*/}
          <motion.h1 
            animate={{
              backgroundImage: [
                "linear-gradient(to right, #22d3ee, #2563eb)",
                "linear-gradient(to right, #22d3ee, #06b6d4)",
                "linear-gradient(to right, #f97316, #dc2626)",
                "linear-gradient(to right, #22d3ee, #2563eb)"
              ]
            }}
            transition={timeCycle}
            className="text-4xl font-black tracking-widest text-transparent bg-clip-text uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          >
            Wave
          </motion.h1>
          
          <motion.span 
            animate={{ 
              x: [4, -4, 4],
              color: ["#22d3ee", "#22d3ee", "#f97316", "#22d3ee"]
            }}
            transition={{ 
              x: { repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 },
              color: timeCycle
            }}
            className="font-mono text-xl tracking-tighter opacity-70"
          >
            {">>>"}
          </motion.span>
        </div>

      
        <motion.button 
          onClick={() => {
            if (isNavigating) return;
            playAudio();
            setIsNavigating(true);
            setActiveTransition(true);
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.98 }}
          animate={{
            backgroundImage: [
              "linear-gradient(to right, #06b6d4, #2563eb)",
              "linear-gradient(to right, #22d3ee, #06b6d4)",
              "linear-gradient(to right, #ea580c, #dc2626)",
              "linear-gradient(to right, #06b6d4, #2563eb)"
            ]
          }}
          transition={timeCycle}
          className="w-full py-4 rounded-xl font-black tracking-[0.2em] text-sm text-white uppercase border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-shadow duration-300 pointer-events-auto"
          disabled={isNavigating}
        >
          Entrar
        </motion.button>
      </motion.div>
    </div>
  );
}