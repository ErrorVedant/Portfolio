import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles'; // Import styled from Material-UI
import Container from '@mui/material/Container';

// Define custom colors for text
const lightTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#070707', // Primary text color in light theme
      secondary: '#fff'
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: '#070707', // Primary text color in dark theme
      secondary: '#000'
    },
  },
});

// Override Switch style to adjust text color based on theme mode
const ThemedSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-thumb': {
    color: theme.palette.text.primary, // Set thumb color based on theme text color
  },
}));

export default function ThButton({ toggleBackgroundImage, toggleTextColor }) { // Receive toggleTextColor function as a prop
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleToggle = () => {
    toggleDarkMode();
    toggleBackgroundImage(); // Call toggleBackgroundImage when the button is clicked
    toggleTextColor(); // Call toggleTextColor when the button is clicked
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container>
        <ThemedSwitch size='xl' checked={darkMode} onChange={handleToggle} />
      </Container>
    </ThemeProvider>
  );
}
