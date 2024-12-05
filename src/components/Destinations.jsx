// src/components/Destinations.jsx
import React from "react";
import { motion } from "framer-motion";
import DestinationData from "../data/DestinationData";

const Destinations = () => {
  return (
    <section className="py-16 px-4 md:px-12" id="destinations">
      <h2 className="text-3xl font-bold text-center mb-2">
        Featured Destinations
      </h2>
      <p className="text-lg text-gray-400 text-center mb-8">
        Explore the world’s most breathtaking places and create memories that
        last a lifetime.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {DestinationData.map((dest, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">{dest.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
