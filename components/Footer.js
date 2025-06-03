import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#151B28] text-white py-10 px-4 flex flex-col justify-between h-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 py-12 w-full">
          <div className="flex flex-col items-start w-full mx-auto">
            <img src="Lookscout.png" alt="lookscout logo" className="mb-2" />
            <p className="text-gray-400 lg:text-xl text-md mb-4 mt-6">
              Generate outside the box thinking with the possibility to target
              the low.
            </p>
          </div>

          <div className="flex flex-row w-full ">
            <div className="flex flex-col items-start w-1/2 md:w-full">
              <div className="font-semibold mb-4 md:mb-6">Resources</div>
              <ul className="text-gray-400 text-md space-y-1 flex flex-col gap-1">
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start w-1/2 md:w-full">
              <div className="font-semibold mb-4 md:mb-6">Products</div>
              <ul className="text-gray-400 text-md space-y-1 flex flex-col gap-1">
                <li>
                  <a href="#" className="hover:underline">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-start w-full mx-auto">
            <div className="font-semibold mb-4 md:mb-6">
              Get Email Notifications
            </div>
            <p className="text-gray-400 text-md mb-2">
              Generate outside the box thinking with the possibility to target
              the low
            </p>
            <form className="relative w-full mt-4">
              <input
                type="email"
                placeholder="Enter email..."
                className="bg-[#2C3444] text-white rounded px-4 py-2 w-full pr-28 text-sm"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 h-full bg-[#437EF7] text-white font-semibold px-6 py-2 rounded-r hover:bg-[#2B63D9] transition text-sm"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="w-full border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 mt-4">
          <span className="text-gray-400 text-xs text-center w-full md:w-auto">
            © 2025 Lookscout. Made by Mitish Raina.
          </span>
          <div className="flex gap-4 mt-2 md:mt-0 justify-center w-full md:w-auto">
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="facebook_logo.png" alt="facebook" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="google_logo.png" alt="google" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="apple_logo.png" alt="apple" className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <img src="insta_logo.png" alt="instagram" className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
