import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
//import Achievements from "./components/Achievements";
import BackgroundEffect from "./components/BackgroundEffect"; // Import BackgroundEffect
import { ThemeProvider } from "./ThemeContext"; // Import ThemeProvider
import ScrollTopToBottom from "./components/ScrollTopToBottom"; // Import the ScrollTopToBottom component

export default function App() {
  return (
    // Wrap your entire application with ThemeProvider.
    // This ensures that all child components (like Navbar, BackgroundEffect) can access the theme context.
    <ThemeProvider>
      {/* Render BackgroundEffect here as a self-closing component.
          It should be directly inside ThemeProvider and typically before your main content div
          so that it appears behind all other content due to its fixed positioning and z-index. */}
      <BackgroundEffect />

      {/* This is your main content container.
          It should have a background color (bg-gray-50/dark:bg-black) to cover the particles
          where content is, and a relative z-index to layer properly above BackgroundEffect. */}
      <div className="bg-gray-50 dark:bg-black text-gray-900 dark:text-white min-h-screen relative z-0">
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience/>
        <Contact />

        {/* Render the ScrollTopToBottom component here.
            Since it uses 'position: fixed', its placement within this div
            doesn't affect its visual position on the screen, but it should
            be within the ThemeProvider. */}
        <ScrollTopToBottom />
      </div>
    </ThemeProvider>
  );
}
