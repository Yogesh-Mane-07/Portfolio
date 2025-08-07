import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
// Corrected import: You need to import ThemeContext, not ThemeProvider, to use with useContext.
import { ThemeContext } from '../ThemeContext'; // Assuming ThemeContext.js is in the parent directory

const PARTICLE_COUNT = 100; // Number of particles to render

const BackgroundEffect = () => {
    const [particles, setParticles] = useState([]);
    // Access theme context for dark/light mode using ThemeContext
    const { theme } = useContext(ThemeContext);

    // Determine particle color based on theme
    const particleColorClass = theme === 'dark' ? 'bg-white' : 'bg-gray-800'; // White for dark mode, dark gray for light mode

    useEffect(() => {
        // Generate initial particle properties
        const newParticles = Array.from({ length: PARTICLE_COUNT }, () => ({
            id: Math.random(), // Unique ID for React key
            top: Math.random() * 100, // Initial top position (vh)
            left: Math.random() * 100, // Initial left position (vw)
            size: Math.random() * 3 + 2, // Size between 2px and 5px
            directionX: (Math.random() - 0.5) * 10, // Random horizontal movement factor
            directionY: (Math.random() - 0.5) * 10, // Random vertical movement factor
            duration: Math.random() * 10 + 10, // Animation duration between 10s and 20s
            delay: Math.random() * 5, // Random delay for staggered animation start
        }));

        setParticles(newParticles);
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        // Main container for the particles. Fixed position, covers full screen,
        // ensures particles are behind all content, and hides overflow.
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {particles.map((p) => (
                // Each individual particle, styled dynamically
                <motion.div
                    key={p.id}
                    className={`absolute rounded-full opacity-80 ${particleColorClass}`} // Apply dynamic color
                    initial={{ opacity: 0 }} // Start invisible
                    animate={{
                        x: [`${p.directionX * 5}vw`, `${p.directionX * 10}vw`], // Move in X direction
                        y: [`${p.directionY * 5}vh`, `${p.directionY * 10}vh`], // Move in Y direction
                        opacity: [0, 1, 0], // Fade in then fade out
                        scale: [0.5, 1, 0.5] // Scale up then down
                    }}
                    transition={{
                        duration: p.duration, // Use individual particle duration
                        repeat: Infinity, // Repeat animation infinitely
                        ease: 'easeInOut', // Smooth ease for movement
                        delay: p.delay, // Use individual particle delay
                    }}
                    style={{
                        top: `${p.top}vh`,    // Set initial top position
                        left: `${p.left}vw`,  // Set initial left position
                        width: `${p.size}px`, // Set particle width
                        height: `${p.size}px`,// Set particle height
                    }}
                />
            ))}
        </div>
    );
};

export default BackgroundEffect;
