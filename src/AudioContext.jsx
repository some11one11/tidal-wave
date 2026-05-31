import React, { createContext, useContext, useRef, useState } from 'react';

const AudioContext = createContext();
import musica from '../public/TidalSong.mp3';
export const AudioProvider = ({ children }) => {

  const audioRef = useRef(new Audio(musica)); 
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(err => console.log("erro ao tocar musica:", err));
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, playAudio, pauseAudio, toggleAudio }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);