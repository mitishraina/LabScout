"use client";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "The Verge", logo: "/verge.png" },
  { name: "Slack", logo: "/slack_brand.png" },
  { name: "Google", logo: "/google.png" },
  { name: "PayPal", logo: "/pay.png" },
  { name: "Pinterest", logo: "/pinterest.png" },
  { name: "MallChimp", logo: "/mallchimp.png" },
];

const marquee = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <motion.div initial={{ x: 0 }} animate={{ x:"-100%" }} transition={{ duration:15, repeat: Infinity, ease: "linear" }} className="flex flex-shrink-0">
          {brands.map((brand, index) => {
            return (
              <img
                src={brand.logo}
                alt={brand.name}
                key={index}
                className="h-10 w-auto pr-20"
              />
            );
          })}
        </motion.div>
        <motion.div initial={{ x: 0 }} animate={{ x:"-100%" }} transition={{ duration:15, repeat: Infinity, ease: "linear" }} className="flex flex-shrink-0">
          {brands.map((brand, index) => {
            return (
              <img
                src={brand.logo}
                alt={brand.name}
                key={index}
                className="h-10 w-auto pr-20"
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default marquee;
