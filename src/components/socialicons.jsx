// src/components/SocialIcons.jsx
import React from "react";
import SocialIconData from "../data/Socialicondata"; // Make sure the import path is correct

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      {SocialIconData.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-300 text-2xl hover:text-primary transition duration-300"
          aria-label={social.name} // Accessibility improvement
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
