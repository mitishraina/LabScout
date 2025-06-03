"use client";
import React from "react";
import Marquee from "./ui/marquee";
import Image from "next/image";

const brands = [
  { name: "The Verge", logo: "/verge.png" },
  { name: "Slack", logo: "/slack_brand.png" },
  { name: "Google", logo: "/google.png" },
  { name: "PayPal", logo: "/pay.png" },
  { name: "Pinterest", logo: "/pinterest.png" },
  { name: "MallChimp", logo: "/mallchimp.png" },
];

const BrandsSection = () => {
  return (
    <section className="bg-white w-full py-10 px-4 pb-16">
      <div className="flex flex-col">
        <div className="max-w-6xl mx-auto text-center pb-12">
          <h3 className="text-lg font-semibold text-[#151B28] mb-2">
            Proud to Be Used By
          </h3>
          <p className="text-gray-500 text-md mb-6">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource-
            <br />
            leveling customer service for state of the art customer service.
          </p>
        </div>
      </div>

      <div className="container mx-auto w-full flex justify-center items-center overflow-x-hidden">
        <Marquee />
      </div>
    </section>
  );
};

export default BrandsSection;
