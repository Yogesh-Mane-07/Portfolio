import React, { useState } from "react";
import { motion } from "framer-motion";

// Import project images - ensure these paths are correct relative to Projects.jsx
// If your images are hosted on GitHub, you can use the raw.githubusercontent.com links directly in the projectData.
import SGT from "../assets/images/test1.png"; // Placeholder
import eCommerceStore from "../assets/images/test1.png"; // Placeholder
import TripConnect from "../assets/images/test1.png"; // Placeholder
import FlowBuilder from "../assets/images/test1.png"; // Placeholder
import ShieldX from "../assets/images/shieldX.png";
import ShareMyRide from "../assets/images/ShareMyRide.png";
import tripPlaner from "../assets/images/tirpPlanner.png";
import TicTac from "../assets/images/Tic.png"; // Assuming TicTac is a placeholder for SMR image as well

const Projects = () => {
  // Your project data
  const projectData = [
    {
      "sourceCodeLink": "https://github.com/Yogesh-Mane-07/ShieldX_FrontEnd",
      "deployedLink": "https://shield-x-front-end.vercel.app/",
      "name": "SHIELDX",
      "description": "SHIELDX is an innovative digital application meticulously crafted to empower solo travelers, particularly girls and boys, and daily commuters relying on ride-sharing services like Ola and Uber, with advanced personal security features. Designed with a focus on intuitive user experience and robust backend functionality, SHIELDX leverages cutting-edge technologies to offer a comprehensive safety net. From real-time location sharing and emergency alerts to secure communication channels and automated safety checks, SHIELDX aims to provide unparalleled peace of mind on every journey. The application's design, initially conceptualized with tools like Canva, is brought to life using React.js for a dynamic frontend, Java Spring for a powerful and scalable backend, and integrated with various APIs, including Twilio for critical communication features, and Postman for streamlined API development and testing.",
      "languages": "React JS | Java | Spring Boot | Twilio API | Postman (for API development/testing)",
      "image": ShieldX,
      "projectType": "Advanced Personal Security Digital Application"
    },
    {
      "sourceCodeLink": "https://github.com/Yogesh-Mane-07/SMR",
      "deployedLink": "",
      "name": "Share My Ride (SMR)",
      "description": "Share My Ride (SMR) is a mobile application designed to connect solo travelers with passengers in need of intercity transportation, similar to a ride-sharing service but specifically tailored for longer distances. It aims to optimize travel by matching users and facilitating shared journeys.",
      "languages": "React Native | Java | MongoDB | Google Maps API",
      "image": ShareMyRide, // Assuming TicTac is a placeholder, consider using a specific SMR image if available
      "projectType": "Mobile Ride-Sharing Application"
    },
    {
      "sourceCodeLink": "https://github.com/Yogesh-Mane-07/AI_travel_planner",
      "deployedLink": "",
      "name": "AI Travel Planner",
      "description": "The AI Travel Planner is an intelligent web application designed to simplify trip planning by leveraging cutting-edge Artificial Intelligence. Users simply input their current location and desired destination, and the system instantly generates a comprehensive travel itinerary. This includes detailed suggestions for hotels tailored to various budgets (budget-friendly to luxury), estimated travel costs, and personalized recommendations for activities and attractions. Built with a responsive React.js frontend for an intuitive user experience and a robust Java Spring Boot backend for powerful AI and external API integrations (like Google Maps, hotel booking platforms, and flight APIs), it aims to be the ultimate companion for hassle-free travel.",
      "languages": "React JS | Java | Spring Boot | MongoDB | Google AI (Gemini/GPT) | Google Maps API | Hotel Booking APIs | Flight Booking APIs | Weather APIs",
      "image": tripPlaner, // Using the direct GitHub raw link
      "projectType": "AI-Powered Travel Planning Web Application"
    },
    {
      "sourceCodeLink": "https://github.com/yogesh-mane-07/tic-tac-toe",
      "deployedLink": "https://yogesh-mane-07.github.io/tic-tac-toe/",
      "name": "Tic-Tac-Toe Game",
      "description": "A simple and interactive Tic-Tac-Toe game developed to understand the fundamental concepts of web development using HTML, CSS, and JavaScript. It features basic game logic, turn management, and win condition checks.",
      "languages": "HTML | CSS | JavaScript",
      "image": TicTac,
      "projectType": "Web Development Basics"
    }
  ];

  // State to manage "Read More" functionality for each project
  // We'll use an object to store state for each project by its name
  const [showFullDescription, setShowFullDescription] = useState({});
  const maxDescriptionLength = 180; // Adjusted for smaller card size

  return (
    <section id="Projects" className="py-16 px-4 bg-[#13181c] sm:px-8 text-gray-800 dark:text-gray-200 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-700 dark:text-white">
        <i className="fas fa-project-diagram mr-3"></i> Projects
      </h2>

      {/* Projects container - now a responsive grid */}
      {/* gap-x-8 for horizontal, gap-y-16 for vertical between rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16 max-w-6xl mx-auto">
        {projectData.map((project, index) => {
          // Determine which part of the description to show
          const isDescriptionLong = project.description.length > maxDescriptionLength;
          const displayDescription =
            isDescriptionLong && !showFullDescription[project.name]
              ? `${project.description.substring(0, maxDescriptionLength)}...`
              : project.description;

          return (
            // Individual project card
            // Simplified flex-col layout for grid items, reduced padding, smaller max-width
            <motion.div
              key={`${project.name}-${index}`}
              className={`
                flex flex-col bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden
                w-full shadow-xl dark:shadow-2xl h-full
                transform transition-transform duration-300 ease-in-out hover:scale-[1.02]
              `}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Project Image Section - now at the top of the card */}
              <div className="w-full flex justify-center items-center p-4 bg-gray-200 dark:bg-gray-800 rounded-t-2xl overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.name} Screenshot`}
                  className="block w-full h-48 object-cover rounded-md shadow-md
                             transition-transform duration-400 ease-in-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Details Section - now below the image */}
              <div className="flex flex-col flex-grow p-6 text-center"> {/* Reduced padding */}
                <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold mb-2"> {/* Smaller font size */}
                  — {project.projectType}
                </p>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white"> {/* Smaller font size */}
                  {project.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-gray-700 dark:text-gray-300 flex-grow"> {/* Smaller font size, flex-grow to push buttons to bottom */}
                  {displayDescription}
                  {isDescriptionLong && (
                    <button
                      onClick={() => setShowFullDescription(prev => ({ ...prev, [project.name]: !prev[project.name] }))}
                      className="ml-1 text-gray-600 dark:text-gray-400 hover:underline focus:outline-none"
                    >
                      {showFullDescription[project.name] ? "Show Less" : "Read More"}
                    </button>
                  )}
                </p>
                {/* Technology Tags */}
                <div className="mb-4 flex flex-wrap justify-center"> {/* Reduced margin-bottom */}
                  {project.languages.split("|").map((lang, tagIndex) => (
                    <motion.span
                      key={lang.trim()}
                      className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200
                                 px-2 py-0.5 m-0.5 rounded-full text-xs font-medium border border-gray-300 dark:border-gray-600
                                 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + tagIndex * 0.03 }} // Slightly faster stagger
                    >
                      {lang.trim()}
                    </motion.span>
                  ))}
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-3 mt-auto"> {/* mt-auto pushes buttons to bottom */}
                  <motion.a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-bold text-sm transition-all duration-300 ease-out rounded-full shadow-md
                      bg-gray-900 dark:bg-white text-white dark:text-gray-900
                      ring-2 ring-gray-900 dark:ring-gray-300 hover:ring-gray-700 dark:hover:ring-gray-200
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">GitHub ↗</span>
                  </motion.a>
                  {project.deployedLink && ( // Conditionally render Live Demo button if deployedLink exists
                    <motion.a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        group relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-bold text-sm transition-all duration-300 ease-out rounded-full shadow-md
                        bg-transparent dark:bg-transparent text-gray-900 dark:text-white
                        ring-2 ring-gray-900 dark:ring-white hover:ring-gray-700 dark:hover:ring-gray-300
                        hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-200
                      `}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Live Demo ↗</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
