import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// React Icons
import {
  SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript,
  SiMongodb, SiPostman, SiVscodium, SiGit, SiGithub, SiTailwindcss,
  SiReact, SiNodedotjs, SiNpm, SiOpenai,
  SiMysql, SiTwilio, SiRedux, SiExpress
} from "react-icons/si";
import {
  FaJava, FaBrain, FaUserFriends, FaComments, FaUserTie, FaClock, FaSmile, FaLightbulb
} from "react-icons/fa";

// const skills = {
//   "Programming Languages": [
//     { name: "C", icon: <SiC />, color: "#00599C" },
//     { name: "C++", icon: <SiCplusplus />, color: "#004482" },
//     { name: "HTML", icon: <SiHtml5 />, color: "#e34f26" },
//     { name: "CSS", icon: <SiCss3 />, color: "#1572b6" },
//     { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e", textColor: "#000" },
//     { name: "Java", icon: <FaJava />, color: "#007396" },
//   ],
//   "Frameworks & DataBase": [
//     { name: "Node.js", icon: <SiNodedotjs />, color: "#3c873a" },
//     { name: "React.js", icon: <SiReact />, color: "#61dafb", textColor: "#000" },
//     { name: "MongoDB", icon: <SiMongodb />, color: "#13aa52" },
//     { name: "MySQL", icon: <SiMysql />, color: "#00618a" },
//     { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38b2ac" },
//     { name: "npm Packages", icon: <SiNpm />, color: "#cb3837" },
//   ],
//   "Relevant Courses": [
//     { name: "Data Structures", icon: <FaBrain />, color: "#1abc9c" },
//     { name: "Algorithms", icon: <FaBrain />, color: "#16a085" },
//     { name: "OOPS", icon: <FaBrain />, color: "#3498db" },
//     { name: "DBMS", icon: <SiMysql />, color: "#00618a" },
//     { name: "OS", icon: <FaBrain />, color: "#e67e22" },
//   ],

//   "Developer Tools": [
//     { name: "MongoDB", icon: <SiMongodb />, color: "#13aa52" },
//     { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
//     { name: "VS Code", icon: <SiVscodium />, color: "#007acc" },
//     { name: "Git", icon: <SiGit />, color: "#f34f29" },
//     { name: "GitHub", icon: <SiGithub />, color: "#171515" },
//     { name: "OpenAI", icon: <SiOpenai />, color: "#10a37f" },
//   ],
//   // "APIs & Integrations": [ // Commented out as per previous input if you intended to remove this
//   //   { name: "REST APIs", icon: <SiExpress />, color: "#444" },
//   //   { name: "OpenAI API", icon: <SiOpenai />, color: "#10a37f" },
//   //   { name: "Twilio", icon: <SiTwilio />, color: "#f22f46" },
//   // ],
//   "Soft Skills": [
//     { name: "Adaptability", icon: <FaBrain />, color: "#16a085" },
//     { name: "Problem-solving", icon: <FaBrain />, color: "#2980b9" },
//     { name: "Teamwork", icon: <FaUserFriends />, color: "#27ae60" },
//     { name: "Communication", icon: <FaComments />, color: "#8e44ad" },
//     { name: "Leadership", icon: <FaUserTie />, color: "#c0392b" },
//     { name: "Time Management", icon: <FaClock />, color: "#e67e22" },
//     { name: "Enthusiasm", icon: <FaSmile />, color: "#f39c12", textColor: "#000" },
//     { name: "Critical Thinking", icon: <FaLightbulb />, color: "#2c3e50" },
//   ],
// };

// Add `link` key to each skill object:
const skills = {
  "Programming Languages": [
    { name: "C", icon: <SiC />, color: "#00599C", link: "https://en.cppreference.com/w/c" },
    { name: "C++", icon: <SiCplusplus />, color: "#004482", link: "https://en.cppreference.com/w/" },
    { name: "HTML", icon: <SiHtml5 />, color: "#e34f26", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <SiCss3 />, color: "#1572b6", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e", textColor: "#000", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Java", icon: <FaJava />, color: "#007396", link: "https://docs.oracle.com/javase/tutorial/" },
  ],
  "Frameworks & DataBase": [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#3c873a", link: "https://nodejs.org/en/docs" },
    { name: "React.js", icon: <SiReact />, color: "#61dafb", textColor: "#000", link: "https://react.dev" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#13aa52", link: "https://www.mongodb.com/docs/" },
    { name: "MySQL", icon: <SiMysql />, color: "#00618a", link: "https://dev.mysql.com/doc/" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38b2ac", link: "https://tailwindcss.com/docs" },
    { name: "npm Packages", icon: <SiNpm />, color: "#cb3837", link: "https://docs.npmjs.com/" },
  ],
  "Relevant Courses": [
    { name: "Data Structures", icon: <FaBrain />, color: "#1abc9c", link: "https://www.geeksforgeeks.org/data-structures/" },
    { name: "Algorithms", icon: <FaBrain />, color: "#16a085", link: "https://www.geeksforgeeks.org/fundamentals-of-algorithms/" },
    { name: "OOPS", icon: <FaBrain />, color: "#3498db", link: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/" },
    { name: "DBMS", icon: <SiMysql />, color: "#00618a", link: "https://www.geeksforgeeks.org/dbms/" },
    { name: "OS", icon: <FaBrain />, color: "#e67e22", link: "https://www.geeksforgeeks.org/operating-systems/" },
  ],
  "Developer Tools": [
    { name: "MongoDB", icon: <SiMongodb />, color: "#13aa52", link: "https://www.mongodb.com/products/tools" },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37", link: "https://learning.postman.com/docs/" },
    { name: "VS Code", icon: <SiVscodium />, color: "#007acc", link: "https://code.visualstudio.com/docs" },
    { name: "Git", icon: <SiGit />, color: "#f34f29", link: "https://git-scm.com/doc" },
    { name: "GitHub", icon: <SiGithub />, color: "#171515", link: "https://docs.github.com/en" },
    { name: "OpenAI", icon: <SiOpenai />, color: "#10a37f", link: "https://platform.openai.com/docs" },
  ],
  "Soft Skills": [
    { name: "Adaptability", icon: <FaBrain />, color: "#16a085", link: "https://www.skillsyouneed.com/ps/adaptability.html" },
    { name: "Problem-solving", icon: <FaBrain />, color: "#2980b9", link: "https://www.skillsyouneed.com/ips/problem-solving.html" },
    { name: "Teamwork", icon: <FaUserFriends />, color: "#27ae60", link: "https://www.skillsyouneed.com/ips/team-working.html" },
    { name: "Communication", icon: <FaComments />, color: "#8e44ad", link: "https://www.skillsyouneed.com/ips/communication-skills.html" },
    { name: "Leadership", icon: <FaUserTie />, color: "#c0392b", link: "https://www.skillsyouneed.com/lead/leadership-skills.html" },
    { name: "Time Management", icon: <FaClock />, color: "#e67e22", link: "https://www.skillsyouneed.com/ps/time-management.html" },
    { name: "Enthusiasm", icon: <FaSmile />, color: "#f39c12", textColor: "#000", link: "https://www.skillsyouneed.com/rhubarb/enthusiasm.html" },
    { name: "Critical Thinking", icon: <FaLightbulb />, color: "#2c3e50", link: "https://www.skillsyouneed.com/learn/critical-thinking.html" },
  ],
};


const itemVariants = {
  hover: {
    y: -8,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 400, damping: 10 }
  }
};

export default function SkillGrid() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    const timeoutId = setTimeout(() => {
      if (sectionRef.current) {
        ctx = gsap.context(() => {
          gsap.fromTo(".skills-heading",
            { opacity: 0, y: -20 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
              scrollTrigger: {
                trigger: ".skills-heading",
                start: "top 80%",
                toggleActions: "play none none none",
                once: true,
              }
            }
          );

          gsap.fromTo(".category-card",
            { opacity: 0, y: 50 },
            {
              opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.15,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                toggleActions: "play none none none",
                once: true,
              }
            }
          );

          gsap.utils.toArray(".category-card").forEach((card) => { // Removed 'index' as it's not used here
            gsap.fromTo(card.querySelectorAll(".skill-item"),
              { opacity: 0, y: 20, scale: 0.9 },
              {
                opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.05,
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none none",
                  once: true,
                }
              }
            );
          });

        }, sectionRef);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section id="Skills" className="py-16 px-4 sm:px-8 bg-[#13181c] text-gray-800 dark:text-gray-300">
      <motion.h2
        className="text-center mb-12 text-4xl sm:text-5xl font-extrabold text-gray-700 dark:text-white skills-heading"
      >
        <i className="fa fa-cogs mr-3" aria-hidden="true"></i> My Skills
      </motion.h2>

      <div ref={sectionRef} className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
        {Object.entries(skills).map(([category, skillItems]) => (
          <motion.div
            key={category}
            className={`
              bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center text-center
              transition-all duration-300 ease-in-out hover:shadow-xl dark:hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500 category-card
              ${category === "Soft Skills" ? "md:col-span-2 lg:col-span-2" : ""} {/* This line makes Soft Skills span full width */}
            `}
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center w-full">
              {skillItems.map((skill, index) => (
                <a
                  key={skill.name}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full h-14 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm
               flex flex-row items-center justify-start overflow-hidden transition-all duration-300 ease-in-out
               hover:shadow-md dark:hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-500
               hover:bg-gray-100 dark:hover:bg-gray-700 p-2 skill-item"
                >
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex items-center w-full"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-md text-xl flex-shrink-0 mr-2"
                      style={{ backgroundColor: skill.color, color: skill.textColor || "#fff" }}
                    >
                      {skill.icon}
                    </div>
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300 text-left flex-grow">
                      {skill.name}
                    </div>
                  </motion.div>

                  {/* Hover borders */}
                  <div className="absolute top-0 left-0 w-[20%] h-[2px] bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:scale-x-100 origin-left scale-x-0 transition-all duration-300" />
                  <div className="absolute top-0 left-0 w-[2px] h-[20%] bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 origin-top scale-y-0 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-[20%] h-[2px] bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:scale-x-100 origin-right scale-x-0 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-[2px] h-[20%] bg-blue-500 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 origin-bottom scale-y-0 transition-all duration-300" />
                </a>
              ))}

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}