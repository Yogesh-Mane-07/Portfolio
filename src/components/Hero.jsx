import React, { useRef } from "react"; // Removed useEffect as Typed.js is no longer used
import Typewriter from "./Typewriter"; // Import your custom Typewriter component
import profilePic from "../assets/images/profilePic.jpg"; // Ensure this path is correct
import resumeFile from "../assets/Yogesh_Mane_Resume.pdf"; // Ensure this path is correct
import { motion } from "framer-motion"; // Assuming Framer Motion is used for other animations

const Hero = () => {
  // No need for typedRef if Typed.js is removed.
  // The Typewriter component manages its own internal state and refs.

  return (
    // Main section container: full width, min-height for viewport, flexbox for centering content.
    // Uses a subtle gradient background for better aesthetics and dark mode compatibility.
    <section
      id="Hero" // Add an ID for potential navigation
      className="w-full min-h-screen flex items-center justify-center px-6 py-16
                bg-[#13181c]
                  text-gray-800 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Optional: Add some subtle background shapes/decorations */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400 dark:bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-400 dark:bg-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-pink-400 dark:bg-pink-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>


      {/* Content wrapper: max-w, responsive flex layout (column on mobile, row on desktop). */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:justify-between z-10">

        {/* Text Content Section */}
        {/* Uses Framer Motion for a subtle slide-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center md:text-left space-y-6 md:w-1/2 lg:w-2/3 p-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight">
            Hello, I’m <span className="text-blue-700 dark:text-blue-400 drop-shadow-md">Yogesh Mane</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 font-semibold drop-shadow-sm">
            I am a{" "}
            {/* Integrate the custom Typewriter component */}
            <Typewriter    text={[
                { word: "Developer", color: "text-[#E14434]" },     // Deep Blue
                { word: "Designer", color: "text-[#FFCC00]" },      // Teal/Cyan
                { word: "Coder", color: "text-[#FF2DD1]" },         // Medium Blue
                { word: "Problem Solver", color: "text-[#FF7D29]" } // Orange/Red
              ]} // Array of strings for typing
              typeSpeed={100}
              deleteSpeed={60}
              delayBetweenWords={1500}
              loop={true}
              cursorColor="text-blue-900 dark:text-blue-400" // Tailwind class for cursor color
            />
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
            <a
              href={resumeFile}
              download="Yogesh_Mane_Resume.pdf" // Added download attribute
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-blue-600 dark:text-white transition-all duration-300 ease-out rounded-full shadow-lg
                         bg-white dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white dark:hover:text-white
                         ring-2 ring-blue-600 dark:ring-blue-400 hover:ring-blue-700 dark:hover:ring-blue-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-full h-full border border-blue-600 dark:border-blue-400 rounded-full"></span>
              <span className="relative">Download Resume</span>
            </a>
            <a
              href="#Projects" // Corrected href to match the ID of the Projects section
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white dark:text-blue-400 transition-all duration-300 ease-out rounded-full shadow-lg
                         bg-blue-600 dark:bg-transparent hover:bg-white dark:hover:bg-blue-700 hover:text-blue-600 dark:hover:text-white
                         ring-2 ring-white dark:ring-blue-400 hover:ring-blue-600 dark:hover:ring-blue-500"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-blue-400 dark:from-blue-700 dark:to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 w-full h-full border border-white dark:border-blue-400 rounded-full"></span>
              <span className="relative">View Projects</span>
            </a>
          </div>
        </motion.div>

        {/* Image Content Section */}
        {/* Uses Framer Motion for a subtle slide-in animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, delay: 0.2 }}
          className="mt-10 md:mt-0 md:w-1/2 lg:w-1/3 flex justify-center"
        >
          <img
            src={profilePic}
            alt="Yogesh Mane"
            draggable="false"
            className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl
                       border-4 border-white dark:border-blue-500 transform transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
