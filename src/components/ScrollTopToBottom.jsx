import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion for animations (ADDED/KEPT)

const ScrollTopToBottom = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Effect to toggle button visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if scrolled down more than 200 pixels
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", toggleVisibility);
    // Clean up event listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty dependency array ensures this runs only once on mount

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <>
      {/* Conditionally render the button if isVisible is true */}
      {isVisible && (
        <motion.button // Changed from <button> to <motion.button> for Framer Motion animations (ADDED/KEPT)
          onClick={scrollToTop}
          // Tailwind CSS classes for styling the button
          className="fixed bottom-5 left-5 w-10 h-10 p-2
                     bg-transparent border-2 border-blue-600 dark:border-blue-400
                     text-blue-600 dark:text-blue-400 rounded-full cursor-pointer text-xl
                     flex items-center justify-center z-50
                     transition-all duration-300 ease-in-out
                     hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white hover:scale-110 hover:rounded-lg" // Enhanced hover effects (ADDED/KEPT)
          initial={{ opacity: 0, scale: 0 }} // Initial state for animation (ADDED)
          animate={{ opacity: 1, scale: 1 }} // Animate in (ADDED)
          exit={{ opacity: 0, scale: 0 }} // Animate out (requires AnimatePresence if used in a parent) (ADDED)
          whileHover={{ scale: 1.1 }} // Framer Motion hover effect (ADDED)
          whileTap={{ scale: 0.9 }} // Framer Motion tap effect (ADDED)
        >
          {/* Font Awesome arrow icon */}
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
        </motion.button>
      )}
    </>
  );
};

export default ScrollTopToBottom;
