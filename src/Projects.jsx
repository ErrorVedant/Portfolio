import React from 'react';
import { Box, Button } from '@mui/material';
import to from './To_do_list.png'
import educare from './EduCare.png';
import portfolio from './Portfolio.png'

export default function Projects() {
  
    return (
        <Box sx={{ display: 'flex', alignContent:'center' ,justifyContent:'center', flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap' }}>
            {/* Project 1 */}
            <Box
                sx={{
                    height: '400px',
                    width: { xs: '100%', sm: '30%' },
                    display: 'flex',
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
                    width: { xs: '100%', sm: '30%' },
                    height: '400px',
                    display: 'flex',
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
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                </div>
            </Box>

            {/* Project 3 */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '30%' },
                    height: '400px',
                    display: 'flex',
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
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                </div>
            </Box>

            {/* Project 4 */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '30%' },
                    height: '400px',
                    display: 'flex',
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
                <h2>ML</h2>
                <img src={educare} alt="Project 4" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                </div>
            </Box>

            {/* Project 5 */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '30%' },
                    height: '400px',
                    display: 'flex',
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
                <h2>ML</h2>
                <img src={educare} alt="Project 5" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                <div>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Website</Button>
                    <Button variant="contained" sx={{ m: '10px', color: 'black', backgroundColor: 'cyan', borderRadius: '20px', '&:hover': { backgroundColor: 'none', color: '#070707' } }}>Code</Button>
                </div>
            </Box>
            
        </Box>
    );
}
