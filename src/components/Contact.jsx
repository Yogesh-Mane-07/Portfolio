import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import gsap from "gsap"; // Import GSAP
// Don't forget to import ScrollTrigger if you're using it
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

export default function Contact() {
  // --- Form State and Handlers ---
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setFeedbackMessage("Sending your message...");

    try {
      // Send form data to your backend API
      const response = await fetch('http://localhost:5000/api/contact', { // <--- IMPORTANT: Update this URL if your backend is on a different host/port
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFeedbackMessage(data.msg); // Use message from backend
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      } else {
        setStatus("error");
        setFeedbackMessage(data.msg || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Frontend error submitting form:', error);
      setStatus("error");
      setFeedbackMessage("Network error. Could not connect to the server.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- GSAP Animation Refs ---
  const socialGridRef = useRef(null);
  const formElementsRef = useRef(null);

  useLayoutEffect(() => {
    let ctx;
    // Ensure both refs are available before creating context
    if (socialGridRef.current && formElementsRef.current) {
      ctx = gsap.context(() => {
        // Stagger animation for social media cards
        gsap.fromTo(
          gsap.utils.toArray(".social-card"),
          { opacity: 0, y: 30, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: socialGridRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );

        // Stagger animation for form elements (inputs, labels, textarea)
        gsap.fromTo(
          gsap.utils.toArray(".form-element"),
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: formElementsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }, [socialGridRef, formElementsRef]); // Scope the GSAP animations to these refs
    }


    return () => {
      if (ctx) ctx.revert(); // Cleanup GSAP animations
    };
  }, []);

  // Define social media links with icons, names, and specific brand colors
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/maneyogesh/",
      icon: FaLinkedinIn,
      iconColor: "text-[#0A66C2]", // LinkedIn Blue
      hoverColor: "hover:text-[#004182]",
    },
    {
      name: "GitHub",
      href: "https://github.com/Yogesh-Mane-07/",
      icon: FaGithub,
      iconColor: "text-gray-900 dark:text-white", // GitHub Black/White
      hoverColor: "hover:text-gray-700 dark:hover:text-gray-300",
    },
    {
      name: "Email",
      href: "mailto:yogeshmane6251@gmail.com",
      icon: FaEnvelope,
      iconColor: "text-[#DC4E41]", // Standard Email Red
      hoverColor: "hover:text-[#A0362C]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/yogesh_mane_07/",
      icon: FaInstagram,
      iconColor: "text-[#E1306C]", // Instagram Pink/Red
      hoverColor: "hover:text-[#833AB4]", // Instagram Purple
    },
  ];

  return (
    <section id="Contact" className="py-16 px-4 sm:px-8 text-gray-800 bg-[#13181c] dark:text-gray-200 text-center">
      {/* Section heading with Framer Motion */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-gray-700 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <i className="fas fa-envelope mr-3"></i> Contact Me
      </motion.h2>

      {/* Main content container for introductory text, form, and social links */}
      <motion.p
        className="text-lg sm:text-xl font-medium mb-4 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Feel free to reach out to me via the form below or connect on my social platforms.
      </motion.p>

      {/* Responsive layout for form and social links side-by-side on larger screens */}
      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto gap-12 lg:gap-16 items-start mt-8"> {/* Added mt-8 for spacing */}

        {/* Contact Form Container with Framer Motion and GSAP-triggered children */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl space-y-6 border border-gray-200 dark:border-gray-700
                     transition-all duration-300 ease-in-out
                     hover:shadow-lg dark:hover:shadow-xl hover:border-gray-400 dark:hover:border-gray-500"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-gray-700 dark:text-white">
            <i className="fas fa-paper-plane mr-3" /> Get In Touch
          </h3>

          <form onSubmit={handleSubmit} ref={formElementsRef}> {/* Ref for GSAP */}
            <div className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0">
              <div className="w-full lg:w-1/2 form-element"> {/* Added form-element class */}
                <label htmlFor="name" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-gray-500 focus:border-gray-500 outline-none"
                />
              </div>
              <div className="w-full lg:w-1/2 form-element"> {/* Added form-element class */}
                <label htmlFor="email" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-gray-500 focus:border-gray-500 outline-none"
                />
              </div>
            </div>

            <div className="mt-6 form-element"> {/* Added form-element class */}
              <label htmlFor="message" className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                           bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-gray-500 focus:border-gray-500 outline-none"
              />
            </div>

            {feedbackMessage && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm font-medium mt-4 ${ // Added margin top
                  status === "success"
                    ? "text-green-600 dark:text-green-400"
                    : status === "error"
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                {feedbackMessage}
              </motion.p>
            )}

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileHover={{ scale: 1.02, boxShadow: "0px 8px 15px rgba(0,0,0,0.2)" }} // Enhanced hover
              whileTap={{ scale: 0.98 }}
              className="w-full mt-6 px-5 py-2.5 text-lg font-semibold text-white
                         bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900
                         rounded-full shadow-md transition duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <svg className="animate-spin h-5 w-5 text-white inline-block" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links Section with Framer Motion and GSAP-triggered children */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center p-6 sm:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-xl dark:shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-xl sm:text-2xl font-bold mb-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Or find me here:
          </motion.p>

          {/* Social Media Grid with GSAP stagger */}
          <div ref={socialGridRef} className="grid grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-md">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`
                  social-card relative flex flex-col items-center justify-center p-4 rounded-lg
                  bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700
                  transition-all duration-300 ease-in-out group
                  hover:scale-105 hover:shadow-lg dark:hover:shadow-xl
                  hover:border-gray-400 dark:hover:border-gray-500
                `}
                whileHover={{
                  scale: 1.05,
                  y: -5, // Subtle lift
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)", // More prominent shadow
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Social Media Icon */}
                {link.icon && (
                  <link.icon className={`text-4xl mb-2 ${link.iconColor} ${link.hoverColor} transition-colors duration-300`} />
                )}
                {/* Social Media Name */}
                <span className={`text-base font-semibold ${link.iconColor} ${link.hoverColor} transition-colors duration-300`}>
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer Border and Copyright */}
      <div className="mt-16 pt-8 border-t-2 border-gray-800 dark:border-gray-200 max-w-4xl mx-auto">
        <p className="text-base text-gray-700 dark:text-gray-300">
          2025 ❤️ © Designed and built by Yogesh Mane.
        </p>
      </div>
    </section>
  );
}