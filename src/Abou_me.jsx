import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Lottie from 'lottie-react';
import Work from './Work.json';
import Hi from './Hi.json';

export default function About() {
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = document.getElementById('trigger').offsetTop;

      if (scrollPosition > triggerPosition - window.innerHeight / 2) {
        setAnimationVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<>
      {/* First Inner Box - Animates from Left */}
      <Box
        sx={{
          width: { sm: '40%', xs: '100%' },
          justifyContent: 'center',
          alignContent: 'center',
          borderRadius: '50%',
          transition: 'transform 0.5s',
          transform: animationVisible ? 'translateX(0)' : 'translateX(-100%)', // Slide in from left
        }}
      >
        <center>
          <Lottie animationData={Work} style={{ width: '100%', height: '100%' }} />
        </center>
      </Box>

      {/* Second Inner Box - Animates from Right */}
      <Box
        id="trigger" // Element used as trigger for animation visibility
        sx={{
          width: { sm: '60%', xs: '100%' },
          alignContent: 'center',
          fontSize: '20px',
          transition: 'transform 0.5s',
          transform: animationVisible ? 'translateX(0)' : 'translateX(100%)', // Slide in from right
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
        <p style={{ marginRight: '10px', fontSize: '50px', fontWeight: 'bold' }}>ABOUT ME</p>
          <Lottie animationData={Hi} style={{ width: '100px', height: '100px' }} />
        </div>
        ⚡ Crafting dynamic and engaging front-end interfaces for both web and mobile platforms.
        <br />
        ⚡ Seamlessly integrating applications with the power of Artificial Intelligence and Machine Learning.
        <br />
        ⚡ Delving into the realms of research and development to explore innovative solutions.
        <br />
        ⚡ Pursuing personal interests in coding, swimming, and maintaining a healthy lifestyle through gym activities.
      </Box>
      </> 
       );
}
