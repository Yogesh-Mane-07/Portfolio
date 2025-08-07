// src/ThemeContext.js
import { createContext, useState, useEffect } from "react";

// Create the ThemeContext. This will be used by components to access the theme state and toggle function.
export const ThemeContext = createContext();

// ThemeProvider component. This wraps your entire application (or the parts that need theme access).
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme. Initialize directly from localStorage or default to "dark".
  // This prevents a brief flash of incorrect theme on initial load.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    // Ensure "dark" is the default if no theme is saved
    return saved || "dark";
  });

  // useEffect hook to apply the theme class to the <html> element.
  // This is crucial for Tailwind CSS's dark mode to work correctly.
  useEffect(() => {
    const root = window.document.documentElement; // Get the <html> element
    // Remove both 'light' and 'dark' classes first to ensure only the current theme is applied
    root.classList.remove("light", "dark");
    // Add the current theme class
    root.classList.add(theme);
    // Save the current theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]); // Re-run this effect whenever the 'theme' state changes

  // Function to toggle the theme between "light" and "dark".
  const toggleTheme = () => {
    // Determine the new theme based on the current theme
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the theme state, which triggers the useEffect above
  };

  // Provide the theme state and toggle function to all children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
