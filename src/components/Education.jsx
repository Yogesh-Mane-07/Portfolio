import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";

const educationData = [
  {
    institute: "Brahmdevdada Mane Institute of Technology",
    location: "Solapur, India",
    degree: "B.Tech in Computer Science & Engineering",
    year: "2022 – 2026",
  },
//   {
//     institute: "Cleared JEE Main",
//     location: "Sikar, India",
//     degree: "Admission at NIT Rourkela",
//     year: "AIR – 24,000",
//   },
  {
    institute: "Sangmeshwar Colledge ",
    location: "Solapur, Maharashtra, India",
    degree: "12th Grade",
    year: "Intermediate – 70.17%, 2022",
  },
  {
    institute: "Mallikarjun HighSchool",
    location: "Hatture Wasti, Solapurt AirPort",
    degree: "10th Grade",
    year: "High School – 94%, 2020",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  hover: {
    y: -10,
    boxShadow: "0 10px 20px rgba(0, 255, 255, 0.5)",
    transition: { type: "spring", stiffness: 400, damping: 10 },
    borderRadius: "0px",
  },
};

const Education = () => {
  return (
    <div id="Education" className="py-16 px-6 sm:px-10 lg:px-24 bg-[#13181c]">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
      >
        <FaUserGraduate className="inline mr-2 text-cyan-500" />
        Education
      </motion.h2>

      <div className="space-y-6">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="p-4 sm:p-6 rounded-xl border-l-4 bg-blue-100 dark:bg-gray-800 border-cyan-400 transition-transform duration-300"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ amount: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row justify-between text-gray-800 dark:text-white mb-2">
              <span className="font-semibold text-lg">{item.institute}</span>
              <span className="italic text-sm sm:text-base">{item.location}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-gray-700 dark:text-gray-300">
              <span className="text-base sm:text-lg">{item.degree}</span>
              <span className="text-sm sm:text-base mt-1 sm:mt-0">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
