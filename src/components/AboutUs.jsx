// src/components/AboutUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { aboutimg } from "../assets"; // Ensure this path is correct
import SocialIcons from "./socialicons";

const AboutUs = () => {
  return (
    <section
      className="py-16 px-4 md:px-12 "
      id="about-us"
      style={{ paddingTop: "80px" }} // Adjust this value based on your navbar height
    >
      {/* The inline style adds top padding to ensure it is visible under the navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-primary">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-8 text-gray-400">
          Your journey begins with us, where every adventure is tailored just
          for you!
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <motion.div
            className="flex-1 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-90 ">
              {" "}
              {/* Responsive height */}
              <img
                src={aboutimg}
                alt="Our Team"
                className="rounded-lg shadow-lg object-cover w-full h-full" // Ensure the image takes full height and width
              />
            </div>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Who We Are
            </h3>
            <p className="text-slate-200 mb-4 text-justify text-sm md:text-base">
              At Decorous Travel Islamabad, we are passionate about helping you
              discover the world. With years of experience in the travel
              industry, our dedicated team is committed to providing
              personalized service and creating unforgettable travel experiences
              tailored to your unique needs.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-slate-200 mb-4 text-justify text-sm md:text-base">
              Our mission is to make travel accessible and enjoyable for
              everyone. We believe in creating memorable adventures that inspire
              and connect people with diverse cultures. Whether you’re looking
              for a relaxing getaway or an adventurous expedition, we’ve got you
              covered.
            </p>
            <h1 className="py-4 text-xl md:text-2xl italic">Follow us on:</h1>
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
