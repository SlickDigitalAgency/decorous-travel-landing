// src/components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import TestimonialData from "../data/TestimonialData";

const cardColors = [
  "bg-blue-100", // Light blue
  "bg-green-100", // Light green
  "bg-yellow-100", // Light yellow
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-12 text-center" id="testimonials">
      <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
      <p className="text-lg text-gray-400 mb-8">
        Your satisfaction is our greatest reward—here's what our clients have to
        say!
      </p>
      <div className="flex flex-col md:flex-row md:justify-center gap-8 px-4">
        {TestimonialData.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`shadow-lg rounded-lg p-6 max-w-sm transform transition-transform duration-300 hover:scale-105 ${
              cardColors[index % cardColors.length]
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-4 italic transition-colors duration-300">
              "{testimonial.review}"
            </p>
            <h4 className="text-lg font-semibold text-slate-950">
              {testimonial.name}
            </h4>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
