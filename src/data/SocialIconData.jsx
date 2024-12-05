// src/data/SocialIconData.jsx

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialIconData = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/yourpage", // Replace with your Facebook page link
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/yourprofile", // Replace with your Twitter profile link
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/yourprofile", // Replace with your Instagram profile link
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/yourprofile", // Replace with your LinkedIn profile link
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/c/yourchannel", // Replace with your YouTube channel link
  },
];

export default SocialIconData;
