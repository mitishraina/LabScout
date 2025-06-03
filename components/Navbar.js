import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#2B63D9] w-full text-white py-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center justify-between gap-12">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Image src="/Lookscout.png" alt="Lookscout Logo" width={150} height={150} />
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Our Products</a>
            <a href="#" className="flex items-center gap-1">
              Resources
              <ChevronDown className="w-4 h-4" />
            </a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-transparent rounded px-4 py-2 font-semibold text-white hover:bg-[#437EF7] transition cursor-pointer">
            Log In
          </button>
          <button className="bg-[#437EF7] text-white rounded px-4 py-2 font-semibold hover:bg-[#2B63D9] transition cursor-pointer">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
