import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import SocialIcons from "./socialicons";
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-6 text-center">
      <p>© 2024 Decorous Travel Islamabad. All Rights Reserved.</p>
      <div className="flex justify-center text-xl space-x-6 mt-4">
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
