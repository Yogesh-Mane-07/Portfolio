// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("idle");
//   const [feedbackMessage, setFeedbackMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("submitting");
//     setFeedbackMessage("Sending your message...");
//     try {
//       // Simulate API call delay
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       // In a real application, you would send formData to a backend here.
//       // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

//       setStatus("success");
//       setFeedbackMessage("Message sent successfully! Thank you for reaching out.");
//       setFormData({ name: "", email: "", message: "" }); // Clear form on success
//     } catch (error) {
//       console.error("Contact form submission error:", error);
//       setStatus("error");
//       setFeedbackMessage("Failed to send message. Please try again.");
//     }
//   };

//   return (
//     // Removed section tag here as ContactForm is now part of the parent Contact section
//     // The background and text colors are handled by the parent 'Contact' component's container
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true, amount: 0.3 }}
//       className="w-full" // Ensure it takes full width within its column
//     >
//       <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center text-gray-700 dark:text-white">
//         <i className="fas fa-paper-plane mr-3" /> Get In Touch
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-full mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-2xl space-y-6 border border-gray-200 dark:border-gray-700" // Reduced padding, adjusted shadow, added border
//       >
//         <div className="lg:flex lg:space-x-6 space-y-4 lg:space-y-0"> {/* Reduced space-x and space-y */}
//           <div className="w-full lg:w-1/2">
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-1"> {/* Smaller font size, reduced mb */}
//               Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your Name"
//               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
//                          bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
//                          focus:ring-gray-500 focus:border-gray-500 outline-none" // Updated focus colors to neutral
//             />
//           </div>
//           <div className="w-full lg:w-1/2">
//             <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="your.email@example.com"
//               className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
//                          bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
//                          focus:ring-gray-500 focus:border-gray-500 outline-none" // Updated focus colors to neutral
//             />
//           </div>
//         </div>

//         <div>
//           <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-1">
//             Message
//           </label>
//           <textarea
//             name="message"
//             rows="5" // Reduced rows for more compact form
//             value={formData.message}
//             onChange={handleChange}
//             required
//             placeholder="Your message..."
//             className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
//                        bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white
//                        focus:ring-gray-500 focus:border-gray-500 outline-none" // Updated focus colors to neutral
//           />
//         </div>

//         {feedbackMessage && (
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className={`text-center text-sm font-medium ${
//               status === "success"
//                 ? "text-green-600 dark:text-green-400" // Kept these as they are status indicators
//                 : status === "error"
//                 ? "text-red-600 dark:text-red-400"
//                 : "text-gray-600 dark:text-gray-400" // Changed for submitting status
//             }`}
//           >
//             {feedbackMessage}
//           </motion.p>
//         )}

//         <motion.button
//           type="submit"
//           disabled={status === "submitting"}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           className="w-full px-5 py-2.5 text-lg font-semibold text-white
//                      bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900
//                      rounded-full shadow-md transition duration-300
//                      disabled:opacity-50 disabled:cursor-not-allowed" // Updated button colors
//         >
//           {status === "submitting" ? (
//             <svg className="animate-spin h-5 w-5 text-white inline-block" viewBox="0 0 24 24" fill="none">
//               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
//             </svg>
//           ) : (
//             "Send Message"
//           )}
//         </motion.button>
//       </form>
//     </motion.div>
//   );
// };

// export default ContactForm;
