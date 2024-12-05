// src/components/ContactForm.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import the icons

const ContactForm = () => {
  const companyDetails = [
    {
      title: "Address",
      description: "123 Travel Lane, Islamabad, Pakistan",
      link: "https://www.google.com/maps?q=123+Travel+Lane,+Islamabad,+Pakistan", // Add your actual map link
      icon: <FaMapMarkerAlt className="text-primary mr-2" />, // Add icon for address
    },
    {
      title: "Phone",
      description: "+92 300 123 4567",
      link: "tel:+923001234567",
      icon: <FaPhoneAlt className="text-primary mr-2" />, // Add icon for phone
    },
    {
      title: "Email",
      description: "info@decoroustravel.com",
      link: "mailto:info@decoroustravel.com",
      icon: <FaEnvelope className="text-primary mr-2" />, // Add icon for email
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12" id="contact">
      <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="mb-8 text-lg text-center">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you shortly.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <motion.form
          className="p-8 bg-slate-900 rounded-lg shadow-lg" // Form background
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <input
            className="w-full px-4 py-3 mb-4 bg-slate-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" // Updated focus color
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full px-4 py-3 mb-4 bg-slate-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" // Updated focus color
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full px-4 py-3 mb-4 bg-slate-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" // Updated focus color
            placeholder="Your Message"
            rows="4"
          ></textarea>
          <button className="w-full px-4 py-3 bg-slate-950 hover:bg-slate-700 text-white font-semibold rounded-lg transition duration-300">
            Send Message
          </button>
        </motion.form>

        {/* Company Details Section */}
        <div className="flex flex-col gap-6">
          {companyDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="p-6 bg-slate-800 rounded-lg shadow-lg cursor-pointer hover:bg-slate-700 transition duration-300 flex items-start"
              onClick={() => window.open(detail.link, "_blank")}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 text-xl">
                {detail.icon}
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    {detail.title}
                  </h3>
                  <p className="text-white">{detail.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Optional: Google Map Embed */}
      <div className="mt-8 ">
        <h3 className="text-2xl font-semibold text-center mb-4">
          Find Us Here
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.8021392973347!2d73.05524741500442!3d33.684421580673034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa9f1a1c2a2d3%3A0x5e2e98960c7c86a0!2s123%20Travel%20Lane%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1631224444495!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
