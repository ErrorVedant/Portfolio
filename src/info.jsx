import React, { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Box } from '@mui/material';
export default function Info() {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        observer.observe(footerRef.current);

        return () => {
            observer.unobserve(footerRef.current);
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            style={{
                textAlign: 'center',
                marginTop: '50px',
                transition: 'transform 0.5s ease',
                transform: isVisible ? 'translateY(0)' : 'translateY(100%)', // Slide up animation
            }}
        >
            <p>Name: Vedant Khade</p>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
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
            <p>Phone Number: 7977905844</p>
            <p>Address: Bhandup(West) Mumbai,India</p>
        </footer>
    );
}
