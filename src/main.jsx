import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Navbar, Footer } from "./components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>
);