import React from "react";
import { motion } from "framer-motion";
import testImage from "../assets/your-photo.png"; // Make sure this path is correct for your image

const About = () => {
  // Define animation variants for staggered appearance of content on the right side
  const contentContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // Delay for children animations
        delayChildren: 0.4,   // Delay before children start animating, after parent container appears
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  return (
    // Main container for the About section.
    // Uses flexbox for mobile (column) and grid for larger screens (1/3 image, 2/3 text).
    // Responsive padding, and text colors for light/dark mode.
    <section
      id="AboutMe"
      className="py-16 px-4 sm:px-8 bg-[#13181c] text-gray-800 dark:text-gray-300 overflow-hidden"
    >
      {/* Two-column layout container for large screens, single column for mobile */}
      <div className="flex flex-col lg:flex-row lg:items-center max-w-6xl mx-auto gap-12 lg:gap-16">

        {/* Image Section - Left column for large screens */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center items-center order-2 lg:order-1" // Order for mobile vs desktop
          initial={{ opacity: 0, x: -50 }} // Initial animation: starts hidden and slides from left
          whileInView={{ opacity: 1, x: 0 }} // Animates to visible position when in view
          viewport={{ once: true, amount: 0.3 }} // Animation plays only once
          transition={{ duration: 0.8, type: "spring", delay: 0.2 }} // Spring animation with a slight delay
        >
          <motion.img
            src={testImage}
            alt="Yogesh Mane Profile"
            draggable="false"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full rounded-full shadow-lg object-cover aspect-square transition-transform duration-300 ease-in-out border-4 border-gray-200 dark:border-gray-700"
            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }} // Scales up slightly and adds a stronger shadow on hover
            transition={{ type: "spring", stiffness: 150 }} // Spring transition for hover effect
          />
        </motion.div>

        {/* About Content Section - Right column for large screens */}
        <motion.div
          className="w-full lg:w-2/3 text-center lg:text-left order-1 lg:order-2" // Order for mobile vs desktop
          variants={contentContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* 'About Me' section label */}
          <motion.p
            className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2 tracking-wide uppercase"
            variants={itemVariants}
          >
            About Me
          </motion.p>

          {/* Main Heading as per the image */}
          <motion.h2
            className="text-2xl sm:text-5xl lg:text-3xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-white light:text-black"
            variants={itemVariants}
          >
            A passionate developer creating amazing digital experiences
          </motion.h2>

          {/* Reduced About Me text (original text) */}
          <motion.p
            className="text-lg sm:text-xl leading-relaxed mb-8 text-gray-700 dark:text-gray-300"
            variants={itemVariants}
          >
            Hi, I'm <b className="text-blue-600">Yogesh Mane</b>. I am a final year B.Tech
            student pursuing a Computer Science degree. I am passionate about exploring new technologies
            and improving my skills in software development. I specialize in Java and Spring Boot for
            backend development, with good knowledge of MySQL and API testing using Postman. I enjoy
            building full-stack applications with React.js and continuously seek opportunities to learn
            and grow in this fast-changing tech world.
          </motion.p>

          {/* Personal Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left mt-10">
            {/* Name */}
            <motion.div className="flex items-center" variants={itemVariants}>
              <span className="font-bold text-gray-900 dark:text-white mr-2 text-xl sm:text-lg">Name:</span>
              <span className="text-gray-700 dark:text-gray-300 text-xl sm:text-lg">Yogesh Mane</span>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-center" variants={itemVariants}>
              <span className="font-bold text-gray-900 dark:text-white mr-2 text-xl sm:text-lg">Email:</span>
              <a
                href="mailto:yogeshmane6251@gmail.com"
                className="text-blue-600 dark:text-blue-400 text-xl sm:text-lg hover:underline transition-colors duration-200"
              >
                yogeshmane6251@gmail.com
              </a>
            </motion.div>

            {/* Location - spans full width on medium screens and up */}
            <motion.div className="flex items-center md:col-span-2" variants={itemVariants}>
              <span className="font-bold text-gray-900 dark:text-white mr-2 text-xl sm:text-lg">Location:</span>
              <span className="text-gray-700 dark:text-gray-300 text-xl sm:text-lg">Solapur, Maharashtra, India</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;