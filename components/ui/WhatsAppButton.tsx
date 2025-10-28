"use client";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5493885177508"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear con GESP Inmobiliaria por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300"
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.04 2C7.34 2 3.42 5.92 3.42 10.62C3.42 12.21 3.84 13.7 4.57 15.01L3.08 20.84L9.12 19.34C10.36 19.86 11.67 20.14 13.04 20.14H13.06C17.76 20.14 21.68 16.22 21.68 11.52C21.68 6.82 17.76 2.9 13.06 2.9L13.04 2ZM17.15 15.11C16.92 15.53 15.94 15.99 15.42 16.03C15.02 16.1 14.59 15.96 14.28 15.54C13.56 14.51 12.09 13.43 11.83 13.04C11.57 12.65 11.36 12.33 11.16 12.11C10.96 11.89 10.74 11.64 10.5 11.39C9.75 10.59 9.3 9.77 9.07 9.22C8.84 8.67 8.76 8.19 8.8 7.74C8.84 7.29 9.04 6.88 9.29 6.64C9.54 6.4 9.8 6.27 10.09 6.27C10.38 6.27 10.57 6.27 10.76 6.27C11.05 6.27 11.23 6.3 11.37 6.5C11.6 6.86 11.82 7.39 12.04 7.92C12.26 8.45 12.48 8.98 12.7 9.51C12.92 10.04 13.14 10.57 13.36 11.1C13.58 11.63 13.8 12.16 14.02 12.69C14.24 13.22 14.46 13.75 14.68 14.28C14.9 14.81 15.12 15.34 15.34 15.87C15.56 16.4 15.78 16.93 16.03 17.41C16.28 17.89 16.49 18.28 16.66 18.59C16.83 18.9 16.95 19.14 17.06 19.34L17.15 15.11Z"
          fill="currentColor"
        />
      </svg>
    </motion.a>
  );
}
