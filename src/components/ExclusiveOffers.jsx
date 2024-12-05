// src/components/ExclusiveOffers.jsx
import React from "react";
import { motion } from "framer-motion";
import ExclusiveOffersData from "../data/ExclusiveOffersData";

const ExclusiveOffers = () => {
  return (
    <section className="py-16 px-4 md:px-12 text-center" id="exclusive-offers">
      <h2 className="text-3xl font-bold mb-4 text-primary">Exclusive Offers</h2>
      <p className="text-lg text-gray-400 mb-8">
        Unlock incredible savings on your next adventure with our exclusive
        travel deals!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {ExclusiveOffersData.map((offer, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg bg-slate-300 group"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-slate-950">
                {offer.title}
              </h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <span className="text-lg font-bold text-secondary2">
                Save {offer.discount}!
              </span>
              <motion.button
                className="block mt-4 px-4 py-2 bg-secondary text-white rounded-full hover:bg-primary hover:text-slate-900 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                Plan My Trip
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExclusiveOffers;
