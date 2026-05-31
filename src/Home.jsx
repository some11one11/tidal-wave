import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioTidalBackground from './PortfolioTidalBackground';
import somelle from './assets/somelle.png';
export default function Home() {
  const [activeTab, setActiveTab] = useState('sobre');


  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const jumpInVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    show: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.5, duration: 0.6 } }
  };


  const skills = [
    { name: "React / Next.js", level: "90%" },
    { name: "Tailwind CSS", level: "95%" },
    { name: "JavaScript", level: "95%" },
    { name: "Motion Frame", level: "75%" },
  ];

  const projects = [
    { title: "Cardápio", desc: "App de cardápio digital para uma Escola", tags: ["React Native"], link: "https://github.com/some11one1/Trabalho-Card-pio" },
    { title: "Wiki Furina", desc: "Wiki Sobre a Furina  de Genshin Impact com animações e estética Hydro.", tags: ["React", "Tailwind CSS", "Framer Motion"], link: "https://github.com/some11one1/All-The-Worlds-A-Stage" },
    { title: "Knight Adventures", desc: "Jogo de aventura em desenvolvimento.", tags: ["JavaScript", "Canvas", "HTML"], link: "https://github.com/some11one1/knight-adventuresIndev" }
  ];

  return (
    <PortfolioTidalBackground>
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-12 flex flex-col gap-16 min-h-screen">
        
    
        <motion.header 
          className="text-center flex flex-col items-center gap-4 pt-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >

          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-orange-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] tracking-tight">
           Gustavo K. Dos Santos
          </h1>
          <p className="text-cyan-200/80 font-medium text-base md:text-xl max-w-xl">
            Full Stack Developer focado em criar aplicações velozes, responsivas e com efeitos visuais de alto impacto.
          </p>
        </motion.header>

     
        <div className="flex justify-center border-b border-cyan-500/20 sticky top-4 z-50 bg-slate-950/60 backdrop-blur-md p-2 rounded-xl max-w-lg mx-auto w-full shadow-[0_10px_30px_rgba(2,6,23,0.5)]">
          {['sobre', 'skills', 'projetos', 'contato'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider rounded-lg transition-all relative ${
                activeTab === tab ? 'text-white font-black' : 'text-cyan-400/60 hover:text-cyan-300'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div 
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border border-cyan-400 rounded-lg -z-10 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

      
        <div className="flex-1 w-full relative min-h-[450px]">
          <AnimatePresence mode="wait">
            
      
            {activeTab === 'sobre' && (
              <motion.section
                key="sobre"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
              >
                <motion.div variants={jumpInVariants} className="md:col-span-1 flex justify-center">
           
                  <div className="relative w-48 h-48 rounded-2xl bg-gradient-to-tr from-cyan-500 to-orange-500 p-[3px] shadow-[0_0_30px_rgba(34,211,238,0.4)] animate-pulse">
                    <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center text-5xl font-black text-cyan-400">
                      <img src={somelle} alt="Gustavo K. Dos Santos" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={jumpInVariants} className="md:col-span-2 space-y-4 bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20">
                  <h2 className="text-2xl font-black text-white uppercase tracking-wide border-b border-cyan-500/20 pb-2">Sobre mim</h2>
                  <p className="text-cyan-100/90 leading-relaxed text-sm md:text-base">
                    Sou um desenvolvedor fascinado por desafios complexos, animações fluídas e  otimização de performance. 
                  </p>
                  <p className="text-cyan-100/90 leading-relaxed text-sm md:text-base">
                    Atuo criando soluções que unem designs bonitos com códigos sólidos e fáceis de manter.
                  </p>
                </motion.div>
              </motion.section>
            )}

           
            {activeTab === 'skills' && (
              <motion.section
                key="skills"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20 }}
                className="max-w-2xl mx-auto w-full bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 space-y-6"
              >
                <h2 className="text-2xl font-black text-white uppercase tracking-wide border-b border-cyan-500/20 pb-2 text-center">Habilidades Técnicas</h2>
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div key={index} variants={jumpInVariants} className="space-y-1.5">
                      <div className="flex justify-between text-xs md:text-sm font-bold uppercase tracking-wider text-cyan-300">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden border border-cyan-900/50 p-[2px]">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: skill.level }}
                          transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            )}

          
            {activeTab === 'projetos' && (
              <motion.section
                key="projetos"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {projects.map((proj, index) => (
                  <motion.div
                    key={index}
                    variants={jumpInVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      borderColor: "#f97316",
                      boxShadow: "0 15px 30px -10px rgba(249,115,22,0.3)" 
                    }}
                    className="p-6 rounded-2xl border border-cyan-500/20 bg-slate-900/40 backdrop-blur-md flex flex-col gap-4 transform-gpu transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 flex items-center justify-center text-sm font-black text-cyan-300">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight">{proj.title}</h3>
                    <p className="text-cyan-200/70 text-xs md:text-sm leading-relaxed flex-1">{proj.desc}</p>
                    <div className="flex flex-wrap gap-1.5 py-2">
                      {proj.tags.map((t, i) => (
                        <span key={i} className="text-[10px] uppercase font-extrabold tracking-wider bg-slate-950/80 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/10">{t}</span>
                      ))}
                    </div>
                    <a href={proj.link} className="block text-center text-xs font-black uppercase tracking-widest text-white bg-gradient-to-r from-cyan-500 to-blue-600 py-2.5 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:brightness-110 transition-all">
                      Abrir Projeto
                    </a>
                  </motion.div>
                ))}
              </motion.section>
            )}

         
            {activeTab === 'contato' && (
              <motion.section
                key="contato"
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20 }}
                className="max-w-md mx-auto w-full bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-cyan-500/20 text-center space-y-6"
              >
                <motion.h2 variants={jumpInVariants} className="text-2xl font-black text-white uppercase tracking-wide">Contato</motion.h2>
                <motion.p variants={jumpInVariants} className="text-sm text-cyan-200/80">
                 Tem algum projeto em mente ou quer apenas dizer oi? sinta-se á vontade para entrar em contato! Estou sempre aberto a novas oportunidades e colaborações.
                </motion.p>
                <motion.div variants={jumpInVariants} className="flex flex-col gap-3">
                  <a href="mailto:Gustavokaulesantos@gmail.com" className="py-3 px-4 rounded-xl border border-cyan-500/30 bg-slate-950/50 font-bold hover:border-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    ✉️ Gustavokaulesantos@gmail.com
                  </a>
                  <a href="https://github.com/some11one1" target="_blank" rel="noreferrer" className="py-3 px-4 rounded-xl border border-cyan-500/30 bg-slate-950/50 font-bold hover:border-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    🐙 GitHub
                  </a>
                </motion.div>
              </motion.section>
            )}

          </AnimatePresence>
        </div>

       
        <footer className="text-center text-[11px] font-bold tracking-widest text-cyan-500/40 uppercase pt-4 border-t border-cyan-500/10">
          Portólio • Desenvolvido com React & Tailwind
        </footer>

      </div>
    </PortfolioTidalBackground>
  );
}