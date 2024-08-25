// src/technologies/Technologies.tsx
import React from "react";
import { motion } from "framer-motion";

// List of technology images and their names
const techItems = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/node-dot-js.svg",
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/amazonaws.svg",
  },
  {
    name: "Angular",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/angular.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg",
  },
];

export const Technologies: React.FC = () => {
  return (
    <section className="py-12 px-6 text-center md:pb-96">
      {/* Divider Text */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Yhteistyökumppanit
        </h2>
        <div className="w-24 h-1 bg-gray-300 mx-auto mb-8"></div>
      </div>

      {/* Technology Icons */}
      <div className="flex flex-wrap justify-center gap-8 px-6 text-white">
        <p>TÄHÄN YHTEISTYÖ KUMPPANIT</p>
      </div>
    </section>
  );
};
