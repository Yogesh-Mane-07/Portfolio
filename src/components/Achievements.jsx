// import React from "react";
// import { motion } from "framer-motion"; // Import framer-motion for animations

// const achievementsData = [
//   {
//     text: "", // Keep this empty as requested, you will add your content here
//     link: "https://codeforces.com/profile/yogesh_1___",
//   },
//   {
//     text: "", // Keep this empty as requested, you will add your content here
//     link: "https://leetcode.com/u/yogesh_1___/",
//   },
//   {
//     text: "", // Keep this empty as requested, you will add your content here
//     link: "https://www.codechef.com/users/yogesh_1_saini",
//   },
//   {
//     text: "", // Keep this empty as requested, you will add your content here
//     link: "https://leetcode.com/contest/biweekly-contest-135/ranking/40/?region=global_v2",
//   },
//   {
//     text: "", // Keep this empty as requested, you will add your content here
//     link: "https://www.codechef.com/rankings/START185C?itemsPerPage=100&order=asc&page=1&search=yogesh_1_saini&sortBy=rank",
//   },
//   {
//     text: "", // Keep this empty as requested, you will add your content here
//     link: "https://codolio.com/profile/yogesh_1___",
//   },
// ];

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 100 },
//   },
// };

// const Achievements = () => {
//   return (
//     // Main achievements section container
//     // Responsive padding, text color for light/dark mode, and centered text
//     <section id="Achievement" className="py-16 px-4 sm:px-8 text-gray-800 dark:text-gray-200 text-center">
//       {/* Section heading with icon */}
//       <motion.h2
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-700 dark:text-white"
//       >
//         <i className="fa-solid fa-medal mr-3"></i> Achievements
//       </motion.h2>

//       {/* Achievements container - flex column with gaps */}
//       <div className="flex flex-col items-center gap-4 max-w-3xl mx-auto">
//         {achievementsData.map((achievement, index) => (
//           // Individual achievement item
//           // Responsive flex layout, background, rounded corners, border-left, shadow, and transitions
//           <motion.div
//             key={index}
//             className="flex items-start bg-blue-100 dark:bg-gray-700 p-4 rounded-xl border-l-4 border-cyan-500
//                        w-full max-w-2xl shadow-md transition-all duration-400 ease-out
//                        hover:border-gray-800 dark:hover:border-blue-500 hover:shadow-lg hover:rounded-none"
//             variants={itemVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ amount: 0.2, once: true }} // Animate once when 20% visible
//           >
//             {/* Achievement icon */}
//             <i className="fa-solid fa-award text-3xl text-cyan-500 mr-4 flex-shrink-0"></i>
//             {/* Achievement text content */}
//             <p className="text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-100 text-left">
//               {/* Placeholder text, you will replace this with your actual achievement content */}
//               {achievement.text ? achievement.text : (
//                 <>
//                   <span className="text-yellow-500 font-bold">Placeholder Title</span> on Platform with a rating of{" "}
//                   <span className="text-green-600 dark:text-green-400 font-bold">XXXX</span>.
//                 </>
//               )}{" "}
//               {/* Link to the achievement */}
//               <a
//                 href={achievement.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="ml-2 text-cyan-500 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300 hover:underline"
//               >
//                 [Link]
//               </a>
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Achievements;
