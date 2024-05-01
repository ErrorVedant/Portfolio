import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ThButton from './ThemeButton';
import Name from './name.png';

export default function Navbar({ toggleBackgroundImage, toggleTextColor }) { // Receive toggleTextColor function as a prop
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <img src={Name} style={{ width: '175px', paddingTop: '7px' }} alt="name" />

          <ThButton toggleBackgroundImage={toggleBackgroundImage} toggleTextColor={toggleTextColor} /> {/* Pass toggleTextColor function as a prop */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
