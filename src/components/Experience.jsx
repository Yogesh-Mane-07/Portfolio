import React, { useState } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    // {
    //   role: "🧑‍💻 Technical Member",
    //   organization: "Algorithmic and Programming Society, NIT Rourkela",
    //   duration: "Nov 2022 - Present",
    //   details:
    //     "As a dedicated member of the Algorithmic and Programming Society at NIT Rourkela, I have embraced the opportunity to contribute to the professional and technical development of students. My role involves mentoring and coaching a group of aspiring programmers, guiding their progress, and ensuring they remain focused on their goals. Additionally, I am an integral part of the core event management team, where I collaborate to organize events and workshops that enhance learning, foster collaboration, and inspire innovation among students. This experience has been deeply fulfilling, allowing me to blend my technical expertise with leadership skills while making a meaningful impact on the academic and professional journeys of my peers.",
    // },
    {
  "role": "Backend Developer",
  "organization": "SMIT Solutions",
  "duration": "June 2025 - Present", 
  "details": "Currently serving as a Backend Developer at SMIT Solutions, where I am actively engaged in designing, developing, and maintaining robust server-side applications. My core responsibilities involve leveraging Java with the Spring Boot framework to build scalable and efficient APIs, and managing data persistence using MySQL. Additionally, I contribute to the frontend development by handling various React.js tasks, ensuring seamless integration between the user interface and the backend services. This role has significantly enhanced my full-stack development capabilities, problem-solving skills, and understanding of enterprise-level application architecture."
},
{
  "role": "Vice President",
  "organization": "Computer Council Committee, BMIT Solapur", // Replace 'Your College Name'
  "duration": "Academic Year 2024-2025", // e.g., "Aug 2023 - May 2024" or "Academic Year 2023-2024"
  "details": "As the Vice President of the Computer Council Committee, I played a pivotal role in organizing and executing approximately 5 major technical and non-technical events within the college. This leadership position significantly honed my organizational, leadership, and team management skills, including effective resource allocation, delegating tasks, and fostering seamless collaboration among team members. Successfully managing these events, from conception to execution, provided invaluable experience in project coordination and problem-solving within a dynamic team environment."
}
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    // Main section container with responsive padding and text color for light/dark mode
    <section id="Experience" className="py-16 bg-[#13181c] px-5 text-center text-gray-800 dark:text-gray-300">
      {/* Section heading with Framer Motion for fade-in animation */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8 text-4xl font-extrabold text-gray-700 dark:text-white"
      >
        <i className="fa-solid fa-business-time text-blue-600"></i> Experience
      </motion.h2>

      {/* Experience timeline container */}
      <motion.div
        className="flex flex-col items-start max-w-3xl mx-auto relative pl-10 sm:pl-16" // Responsive padding-left
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // Staggered animation for each timeline item
            },
          },
        }}
      >
        {/* Vertical timeline line */}
        <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#7b2ff7] to-[#f107a3] rounded-full shadow-lg shadow-[#7b2ff7]/50"></div>

        {/* Map through each experience item */}
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-100 dark:bg-gray-900 p-5 md:p-8 rounded-xl shadow-lg mb-16
                       w-full text-left transition-all duration-300 ease-in-out
                       hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl hover:bg-gray-200 dark:hover:bg-gray-800"
            initial={{ opacity: 0, x: -30 }} // Animation: starts invisible and slightly to the left
            whileInView={{ opacity: 1, x: 0 }} // Animates to visible and correct position
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.15 * index, // Staggered delay for each item
            }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[27px] sm:-left-[35px] top-1/2 -translate-y-1/2
                            w-5 h-5 bg-[#7b2ff7] border-[3px] border-[#f107a3] rounded-full shadow-md shadow-[#7b2ff7]/80 z-30"></div>
            {/* Horizontal line connecting to the main vertical line */}
            <div className="absolute -left-[45px] sm:-left-[60px] top-1/2 -translate-y-1/2
                            w-10 sm:w-12 h-[3px] bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] rounded-full shadow-lg shadow-[#7b2ff7]/50 z-10"></div>

            {/* Experience content */}
            <div className="timeline-content">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50 mb-2">
                {experience.role}
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 font-medium mb-1">
                {experience.organization}
              </p>
              <span className="text-sm text-yellow-600 dark:text-yellow-400 italic block mb-3">
                {experience.duration}
              </span>
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200">
                {/* Conditionally render full or truncated details */}
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`}{" "}
                {/* Toggle button for See More/See Less */}
                <span
                  className="text-blue-600 dark:text-blue-400 cursor-pointer font-medium hover:underline"
                  onClick={() => toggleExpanded(index)}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
