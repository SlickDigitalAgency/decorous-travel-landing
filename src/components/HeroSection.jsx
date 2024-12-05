// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { heroimg } from "../assets";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white text-center"
      id="/"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundSize: "cover", // Ensure the background covers the entire section
        backgroundPosition: "center", // Center the image
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent"></div>
      <div className="relative z-10 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover Your Next Adventure
        </motion.h1>
        <motion.p
          className="mb-6 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience the best with Decorous Travel Islamabad
        </motion.p>
        <motion.button
          className="px-6 py-3 bg-secondary rounded-full text-lg font-semibold hover:bg-primary hover:text-slate-900 transition"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          Plan My Trip
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
