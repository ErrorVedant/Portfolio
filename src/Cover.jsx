import React, { useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Lottie from 'lottie-react';
import Buffer from './Buffer.json';
import Name from './name.png';
import { useNavigate } from 'react-router-dom';

const globalStyles = {
  body: {
    margin: 0,
  },
};

export default function Cover() {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/portfolio")
    }, 4000); 

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ backgroundColor: 'black'}}>
    <Container sx={{ backgroundColor: 'black', width: '100%', padding: 0, }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width:'100%',
          justifyContent: 'center',
          minHeight: '100vh',
          overflow: 'hidden',
          margin: 0,
        }}
      >
        <Lottie animationData={Buffer} style={{ width: '500px', height: '500px' }} />
        <img src={Name} style={{ width: '300px' }} alt="name" />
      </Box>
    </Container>
    </Box>
  );
}

// Apply global styles
Object.assign(document.body.style, globalStyles.body);
