import React, { useState, useEffect, useCallback } from 'react';

const Typewriter = ({
  text, // Now expected to be a string OR an array of { word: string, color: string } objects
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 1500, // Delay before deleting/after typing a word
  loop = false, // Set to true for continuous delete/rewrite
  cursorColor = 'text-gray-800' // Tailwind class for cursor color
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Current index within the current word's string
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0); // Index for the array of words
  const [currentWordColor, setCurrentWordColor] = useState(''); // State to hold the current word's color class

  // Always treat 'text' as an array of objects internally for consistency
  // If it's a plain string, convert it to the object format
  const wordsToType = Array.isArray(text)
    ? text // Already in the correct format
    : [{ word: text, color: '' }]; // Convert single string to object format (no color by default)

  const currentWordObject = wordsToType[wordIndex];
  const currentWordString = currentWordObject.word; // Extract the actual word string
  const nextWordColor = currentWordObject.color;    // Extract the color class

  // Update color when the word changes or when component mounts
  useEffect(() => {
    setCurrentWordColor(nextWordColor);
  }, [wordIndex, nextWordColor]);


  // Memoize the typing/deleting logic to prevent unnecessary re-creations
  const handleTypingEffect = useCallback(() => {
    if (!isDeleting) {
      // TYPING LOGIC
      if (currentIndex < currentWordString.length) {
        // Type one character
        setDisplayedText(prev => prev + currentWordString[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        // Finished typing the current word
        if (loop) {
          // If looping, wait, then start deleting
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
        // If not looping, it just stops after typing the last word
        // No else needed here, as the useEffect's timeout will not run again
      }
    } else {
      // DELETING LOGIC
      if (currentIndex > 0) {
        // Delete one character
        setDisplayedText(prev => prev.substring(0, prev.length - 1));
        setCurrentIndex(prev => prev - 1);
      } else {
        // Finished deleting the current word
        setIsDeleting(false); // Switch to typing mode
        if (loop) {
          // Move to the next word in the array, or loop back to the first
          setWordIndex(prev => (prev + 1) % wordsToType.length);
        }
        // If not looping, it stops after deleting the last word
        // No else needed here, as the useEffect's timeout will not run again
      }
    }
  }, [
    currentIndex,
    isDeleting,
    wordIndex,
    wordsToType,
    loop,
    delayBetweenWords,
    currentWordString // Added currentWordString as a dependency
  ]);


  useEffect(() => {
    let timeoutId;

    // Only run if there's text to type
    if (wordsToType.length > 0 && (loop || wordIndex < wordsToType.length)) {
      if (!isDeleting) {
        timeoutId = setTimeout(handleTypingEffect, typeSpeed);
      } else {
        timeoutId = setTimeout(handleTypingEffect, deleteSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [handleTypingEffect, isDeleting, typeSpeed, deleteSpeed, wordIndex, wordsToType.length, loop]);


  return (
    <span className={`inline-block relative ${currentWordColor} transition-colors duration-300 ease-in-out`}>
      {displayedText}
      {/* Tailwind's animation utility configured in tailwind.config.js */}
      <span className={`typewriter-cursor ${cursorColor}`}>|</span>
    </span>
  );
};

export default Typewriter;