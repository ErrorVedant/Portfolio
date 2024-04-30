import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Resume({ color_1 }) { // Receive color_1 as a prop
  const openPDF = () => {
    window.open('https://drive.google.com/file/d/1tl3wx-PpcUN2PBtIpgOlCZK_AMSqlGZ7/view?usp=sharing', '_blank');
  };

  return (
    <Box>
      <Button
        sx={{
          backgroundColor: 'cyan',
          mr: '20px',
          borderRadius: '20px',
          color: 'black',
          '&:hover': { backgroundColor: 'none', color: color_1 },
        }}
        onClick={openPDF} // Call openPDF function when the button is clicked
      >
        RESUME
      </Button>
    </Box>
  );
}
