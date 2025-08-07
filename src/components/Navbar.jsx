import React, { useState, useRef, useEffect, useContext } from "react";
// Import necessary icons
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md"; // Icons for dark/light mode
import { motion } from "framer-motion";

// Assuming ThemeContext and Logo are correctly imported from their respective paths
import { ThemeContext } from "../ThemeContext";
import Logo from "../assets/images/Logo.png"; // Your updated Logo path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu visibility
  const menuRef = useRef(null); // Ref for the mobile menu to detect clicks outside
  const [currentSection, setCurrentSection] = useState(""); // State to track the active section
  // Access theme context for dark/light mode. This line requires ThemeProvider to be an ancestor.
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Toggles the mobile menu open/close state
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // Handles navigation link clicks, closes menu, and updates active section
  const handleLinkClick = (href) => {
    setMenuOpen(false); // Close mobile menu on link click
    // Extract section ID from href (e.g., "#AboutMe" becomes "AboutMe")
    setCurrentSection(href.replace("#", ""));
  };

  // Effect to update current section based on URL hash changes
  useEffect(() => {
    const updateCurrentSection = () => {
      const hash = window.location.hash.replace("#", "");
      setCurrentSection(hash);
    };

    updateCurrentSection(); // Initialize current section on component mount

    // Listen for hash changes in the URL
    window.addEventListener("hashchange", updateCurrentSection);
    // Cleanup: remove event listener on component unmount
    return () => window.removeEventListener("hashchange", updateCurrentSection);
  }, []); // Run only once on mount

  // Effect to close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and the click is outside the menuRef element
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    // Add event listener for mousedown
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup: remove event listener on component unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []); // Run only once on mount

  // Array of navigation links
  const links = [
    { label: "About Me", href: "#AboutMe" },
    { label: "Education", href: "#Education" },
    { label: "Skills", href: "#Skills" },
    { label: "Experience", href: "#Experience" },
    { label: "Projects", href: "#Projects" },
    // { label: "Achievement", href: "#Achievement" }, // This link remains commented out as per your input
    // { label: "Coding Profiles", href: "#Coding-profiles" }, // This link remains commented out as per your input
    { label: "Contact", href: "#Contact" },
  ];

  return (
    // Main navigation bar container
    // Fixed position, full width, high z-index, responsive padding, background color, and shadow
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-2 px-4 sm:px-8 lg:px-16 bg-[#13181c]">
      {/* Logo on the left */}
      <a className="flex-shrink-0" href="/Portfolio">
        <img
          src={Logo}
          alt="Logo"
          className="h-12 w-12 rounded-full object-cover cursor-pointer shadow-lg shadow-blue-500/50 dark:shadow-cyan-500/50 transition-shadow duration-300"
        />
      </a>

      {/* Right section of the navbar containing navigation links and icons */}
      <div className="flex items-center gap-4">
        {/* Navigation links container */}
        {/* Hidden on small screens, flex on large screens */}
        {/* For mobile, it's absolutely positioned as an overlay when active */}
        <div
          ref={menuRef} // Attach ref for click outside detection
          className={`
            hidden lg:flex flex-grow justify-center gap-4
            ${menuOpen ? "absolute top-16 left-0 w-full flex flex-col items-center py-4 bg-gray-50 dark:bg-gray-900 shadow-lg" : ""}
            transition-all duration-300 ease-in-out
          `}
        >
          {links.map((link, index) => (
            // Each navigation link
            <motion.a
              key={index}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              whileHover={{
                scale: 1.1,
                color: "#0dcaf0", // Tailwind's 'cyan-400' is close, but using exact hex for consistency with original
                textShadow: "0 0 8px rgba(13, 202, 240, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              // Tailwind classes for link styling, responsive text color, and active state
              className={`
                relative font-medium text-lg py-1 px-2 transition-colors duration-300
                ${currentSection === link.href.replace("#", "")
                  ? "text-blue-600 dark:text-cyan-400 font-bold drop-shadow-lg drop-shadow-blue-500/80 dark:drop-shadow-cyan-500/80"
                  // Changed dark:text-gray-300 to dark:text-gray-400 for non-active links to be less 'white'
                  : "text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400"
                }
              `}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Theme toggle and hamburger/close icons */}
        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <motion.div
            className="cursor-pointer p-2 rounded-full transition-colors duration-300
                       text-gray-700 dark:text-gray-300
                       hover:bg-gray-200 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"
            onClick={toggleTheme}
            whileHover={{ rotate: 20, scale: 1.2 }}
            whileTap={{ rotate: -20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {theme === "light" ? (
              <MdDarkMode className="text-3xl" title="Dark Mode" />
            ) : (
              <MdLightMode className="text-3xl" title="Light Mode" />
            )}
          </motion.div>

          {/* Hamburger/Close menu icon for mobile */}
          <div className="lg:hidden text-3xl cursor-pointer text-gray-700 dark:text-gray-300" onClick={handleMenuToggle}>
            {menuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;