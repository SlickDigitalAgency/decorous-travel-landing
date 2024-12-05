// src/components/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaPlane, FaHotel, FaMapMarkedAlt } from "react-icons/fa";

const Services = () => {
  const cardColors = [
    "bg-blue-100", // Light blue
    "bg-green-100", // Light green
    "bg-yellow-100", // Light yellow
  ];

  return (
    <section className="py-16 px-4 md:px-12 text-center" id="services">
      {/* Adding a padding top to avoid overlap with fixed navbar */}
      <div className="pt-20 md:pt-28">
        {" "}
        {/* Adjust the pt values according to your navbar height */}
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-lg text-gray-400 mb-8">
          Explore our wide range of travel services designed to make your
          journey unforgettable!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            { icon: FaPlane, title: "Flights" },
            { icon: FaHotel, title: "Accommodation" },
            { icon: FaMapMarkedAlt, title: "Tour Packages" },
          ].map(({ icon: Icon, title }, i) => (
            <motion.div
              key={i}
              className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
                cardColors[i % cardColors.length]
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <Icon size={40} className="text-secondary mb-4" />
              <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
