import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import to from './To_do_list.png'
import educare from './EduCare.png';
import portfolio from './Portfolio.png';
import lang_detection from './Language_detection.png';
import eng_fr from './Eng_fr.png';


export default function Projects() {
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
        <Box
            sx={{
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                flexDirection: { sm: 'column', md: 'row' },
                flexWrap: 'wrap',
                transition: 'transform 0.5s',
          transform: animationVisible ? 'translateX(0)' : 'translateX(-100%)', // Slide in from left
            }}
        >
            {/* Project 1 */}
            <Box
                sx={{
                    height: '400px',
                    width: { sm: '100%', md: '30%' },
                    display: 'flex',
                    my:{ sm:'30px'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    p: '20px',
                    mx: '10px',
                    mb: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
                }}
            >
                <h2>To-DoList</h2>
                <img src={to} alt="Project 1" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                    <a href="https://rad-torte-7399a2.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    </a>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                </div>
            </Box>

            {/* Project 2 */}
            <Box
                sx={{
                    width: { sm: '100%', md: '30%' },
                    height: '400px',
                    display: 'flex',
                    my:{ sm:'30px'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    mx: '10px',
                    p: '20px',
                    mb: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
                }}
            >
                <h2>Portfolio</h2>
                <img src={portfolio} alt="Project 2" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                <a href="https://portfolio-woad-sigma-75.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    </a>  
                    <a href="https://github.com/ErrorVedant/Portfolio" target="_blank" rel="noopener noreferrer">                 
                     <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                     </a>
                </div>
            </Box>

            {/* Project 3 */}
            <Box
                sx={{
                    width: { sm: '100%', md: '30%' },
                    height: '400px',
                    display: 'flex',
                    my:{ sm:'30px'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    p: '20px',
                    mx: '10px',
                    mb: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
                }}
            >
                <h2>EduCare</h2>
                <img src={educare} alt="Project 3" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                <a href="https://edu-care-q5c6.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    </a>  
                    <a href="https://github.com/ErrorVedant/EduCare" target="_blank" rel="noopener noreferrer">                 
                     <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                     </a>
                    </div>
            </Box>

            {/* Project 4 */}
            <Box
                sx={{
                    width: { sm: '100%', md: '30%' },
                    height: '400px',
                    display: 'flex',
                    my:{ sm:'30px'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    p: '20px',
                    mx: '10px',
                    mb: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
                }}
            >
                <h2>Language_Detection</h2>
                <img src={lang_detection} alt="Project 4" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                <a href="https://www.kaggle.com/code/vedantkhade/language-detection" target="_blank" rel="noopener noreferrer">                 
                     <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                     </a>                
                     </div>
            </Box>

            {/* Project 5 */}
            <Box
                sx={{
                    width: { sm: '100%', md: '30%' },
                    height: '400px',
                    display: 'flex',
                    my:{ sm:'30px'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    p: '20px',
                    mx: '10px',
                    mb: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
                }}
            >
                <h2>English_French</h2>
                <img src={eng_fr} alt="Project 5" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                <a href="https://www.kaggle.com/code/vedantkhade/english-to-french" target="_blank" rel="noopener noreferrer">                 
                     <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                     </a> 
                </div>
            </Box>
            
            <Box
                sx={{
                    width: { sm: '100%', md: '30%' },
                    height: '400px',
                    display: 'flex',
                    my:{ sm:'30px'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    p: '20px',
                    mx: '10px',

                    mb: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow
                }}
            >
                <h2>Emotion_Detection</h2>
                <img src={educare} alt="Project 5" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                </div>
            </Box>

        </Box>
    );
}
