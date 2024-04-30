// Portfolio.jsx
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import back1 from './b1.jpg';
import back2 from './b2.jpg'; // Import the second background image
import vedant from './Vedant.jpg';
import { ThemeProvider, useTheme } from '@mui/material/styles'; // Import ThemeProvider and useTheme hooks
import Lottie from 'lottie-react';
import Hi from './Hi.json';
import Typewriter from './word_word';
import Resume from './Resume'; // Import Resume component
import { Button } from '@mui/material';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Work from './Work.json'
import About from './Abou_me';
import Info from './info';
import Projects from './Projects';
import Sleep from './Sleep.json';
import Pc from './PC.json';

const globalStyles = {
  body: {
    margin: 0,
  },
};

const Portfolio = () => {
  const [backgroundImage, setBackgroundImage] = useState(back2); // Set initial background image
  const [color_1, setColor] = useState('#fff');
  const theme = useTheme(); // Access the current theme

  // Function to toggle background image
  const toggleBackgroundImage = () => {
    setBackgroundImage(backgroundImage === back2 ? back1 : back2);
  };
  const toggleTextColor = () => {
    setColor(color_1 === '#fff' ? '#070707' : '#fff');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          minWidth: '527px',
          backgroundImage: `url(${backgroundImage})`, // Using the backgroundImage state variable as the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          m: '0px',
        }}
      >
        <Navbar toggleBackgroundImage={toggleBackgroundImage} toggleTextColor={toggleTextColor} /> {/* Pass toggleTextColor function as a prop */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column-reverse', sm: 'row' },
            justifyContent: 'center',
            height: '600px',
            color: `${color_1}`,
            p: {
              md: '100px',
              sm: '20px',
              xs: '10px',
            },
          }}
        > {/* Use secondary text color */}
          <Box sx={{ width: { sm: '60%', xs: '100%' }, alignContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px' }}>
              <h1 style={{ marginRight: '10px' }}>VEDANT KHADE</h1>
              <Lottie animationData={Hi} style={{ width: '100px', height: '100px' }} />
            </div>
            <Box sx={{ height: '45px', my: '10px' }}>
              <Typewriter />
            </Box>
            <Box>
              With my diverse experience in machine learning, public speaking leadership, front-end development and autonomous vehicle projects, I bring a blend of technical skills and projects knowledge, making me an ideal candidate to contribute effectively as an intern in this role.
            </Box>
            <Box sx={{ mt: '20px', display: 'flex' }}>
              <Resume color_1={color_1} /> {/* Pass color_1 as a prop to Resume component */}
              <Button href="#info" sx={{ backgroundColor: 'cyan', borderRadius: '20px', color: `black`, '&:hover': { backgroundColor: 'none', color: `${color_1}` } }}>CONTACT</Button> {/* Redirect to info section */}
            </Box>
          </Box>

          <Box
            sx={{
              width: { sm: '40%', xs: '100%' },
              justifyContent: 'center',
              alignContent: 'center',
              borderRadius: '50%',
            }}
          >
            <center>
              <Box sx={{ width: { md: '300px', sm: '250px', xs: '200px' } }}>
                <img src={vedant} style={{ width: '100%', height: '100%', borderRadius: '50%' }} alt="Vedant" />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <a href="https://www.linkedin.com/in/vedant-khade-3a6406260/">
                  <FaLinkedin style={{ color: 'blue', height: '50px', marginRight: '10px', marginLeft: '10px' }} />
                </a>
                <a href="https://github.com/ErrorVedant">
                  <FaGithub style={{ color: 'purple', height: '50px', marginRight: '10px', marginLeft: '10px' }} />
                </a>
                <a href="https://www.instagram.com/_vedant_khade?igsh=MWFjdDhzcHZkNDludA==">
                  <FaInstagramSquare style={{ color: 'pink', height: '50px', marginRight: '10px', marginLeft: '10px' }} />
                </a>
              </Box>
            </center>

          </Box>

        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column', sm: 'row' },
          justifyContent: 'center',
          height: '500px',
          mt: { xs: '60px' },
          color: `${color_1}`,
          p: {
            md: '30px',
            sm: '20px',
            xs: '20px',
          },
        }}
      > {/* Use secondary text color */}


        <About />
      </Box>

      <Box
        id='info'
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column', sm: 'row' },
          justifyContent: 'center',
          color: `${color_1}`,
          mt: { xs: '60px' },
          p: {
            md: '30px',
            sm: '20px',
            xs: '20px',
          },
        }}
      > {/* Use secondary text color */}
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <Box sx={{ display: 'flex',flexDirection: 'row', alignItems: 'center', mb:'0px' , mt: { xs: '60px' } }}>
        <p style={{ marginRight: '10px', fontSize: '50px', fontWeight: 'bold' }}>PROJECTS</p>
          <Lottie animationData={Pc} style={{ width: '100px', height: '100px' }} />
        </Box>
        <Projects />
        </div>
      </Box>


      <Box
        id='info'
        sx={{
          display: 'flex',
          flexDirection: { md: 'row', xs: 'column', sm: 'row' },
          justifyContent: 'center',
          color: `${color_1}`,
          mt: { xs: '60px' },
          p: {
            md: '30px',
            sm: '20px',
            xs: '20px',
          },
        }}
      > {/* Use secondary text color */}
        <Box>
          <Info />
        </Box>
      </Box>




    </ThemeProvider>
  );
}

// Apply global styles
Object.assign(document.body.style, globalStyles.body);

export default Portfolio;
