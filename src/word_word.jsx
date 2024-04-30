import { colors } from '@mui/material';
import React, { useState, useEffect } from 'react';

const words = ['ML DEVELOPER', 'FRONTEND DEVELOPER']; // Words to display

const Typewriter = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < words[currentWordIndex].length) {
        setCurrentWord(prevWord => prevWord + words[currentWordIndex][currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else {
        // Word completed, reset index and prepare for next word
        setCurrentIndex(0);
        setCurrentWord('');
        setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
      }
    }, 200); // Adjust the timing here for the speed of each letter appearance

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, currentWordIndex]);

  return (
    <div>
      <h1 style={{color:'cyan'}}>{currentWord}</h1>
    </div>
  );
};


export default Typewriter;
