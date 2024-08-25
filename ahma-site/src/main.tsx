import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function
  once: false, // Whether animation should happen only once
  offset: 250, // Offset to trigger animation (in px from the viewport bottom)
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
