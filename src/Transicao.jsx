import React from 'react';
import { motion } from 'framer-motion';
import imagemTransicao from './assets/tidalWaveTransicao.png';

export default function AnimacaoMetades({ rodar }) {
  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 999,
    pointerEvents: rodar ? 'auto' : 'none',
  };

  const metadeBaseStyle = {
    position: 'absolute',
    width: '100%',
    height: '50%',
    overflow: 'hidden',
    backgroundColor: '#0f172a',
    backgroundImage: `url(${imagemTransicao})`,
    backgroundSize: '100vw 100vh', 
    backgroundRepeat: 'no-repeat',
  };

  const metadeSuperiorStyle = {
    ...metadeBaseStyle,
    top: 0,
    backgroundPosition: 'top center' 
  };

  const metadeInferiorStyle = {
    ...metadeBaseStyle,
    bottom: 0,
    backgroundPosition: 'bottom center' 
  };

  return (
    <div style={containerStyle}>
      {/* Metade Superior: Entra imediatamente da direita para o meio, depois desaparece */}
      <motion.div
        style={metadeSuperiorStyle}
        initial={{ x: '100vw', opacity: 1 }}
        animate={{
          x: rodar ? ['100vw', '0%', '0%'] : '100vw',
          opacity: rodar ? [1, 1, 0] : 0
        }}
        transition={
          {
            x: rodar ? {
              times: [0, 0.5, 1],
              duration: 0.8,
              ease: "easeOut"
            } : { duration: 0 },
            opacity: rodar ? {
              times: [0, 0.69, 1],
              duration: 3.2,
              ease: "easeInOut"
            } : { duration: 0 }
          }
        }
      />

      {/* Metade Inferior: Aguarda 0.7s, entra da esquerda para o meio, depois desaparece */}
      <motion.div
        style={metadeInferiorStyle}
        initial={{ x: '-100vw', opacity: 1 }}
        animate={{
          x: rodar ? ['-100vw', '-100vw', '0%', '0%'] : '-100vw',
          opacity: rodar ? [1, 1, 1, 0] : 0
        }}
        transition={
          {
            x: rodar ? {
              times: [0, 0.46, 0.80, 1],
              duration: 0.8,
              ease: "easeOut"
            } : { duration: 0 },
            opacity: rodar ? {
              times: [0, 0.69, 0.69, 1],
              duration: 3.2,
              ease: "easeInOut"
            } : { duration: 0 }
          }
        }
      />
    </div>
  );
}