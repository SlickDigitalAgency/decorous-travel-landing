// src/App.jsx
import React from "react";

import {
  HeroSection,
  Services,
  AboutUs,
  Destinations,
  ExclusiveOffers,
  Testimonials,
  ContactForm,
} from "./components";

const App = () => {
  return (
    <div className="font-sans bg-slate-950 text-white">
      <HeroSection />
      <Services />
      <AboutUs />
      <Destinations />
      <ExclusiveOffers />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default App;
