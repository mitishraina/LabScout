import React from "react";

const NewsletterSection = () => {
  return (
    <section className="bg-[#FAFBFC] w-full py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-lg font-semibold text-[#437EF7] mb-2">
          1% OF THE INDUSTRY
        </h3>
        <h2 className="text-2xl md:text-3xl font-medium text-[#151B28] mb-4">
          Welcome to your new digital reality that will rock your world truly at
          all throughout.
        </h2>
        <form className="relative w-full max-w-md mx-auto mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 text-black rounded px-4 py-2 w-full pr-28 focus:outline-blue-500"
          />
          <button
            type="submit"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-10 bg-[#437EF7] text-white font-semibold px-6 rounded-r hover:bg-[#2B63D9] transition"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-row justify-center items-center gap-3 text-black text-sm mt-2">
          <span>
            <img src="Check.png" alt="check" className="h-4 w-4" />
          </span>
          <span>Fully Secure</span>
          <span>
            <img src="Check.png" alt="check" className="h-4 w-4" />
          </span>
          <span>24/7 Support</span>
          <span>
            <img src="Check.png" alt="check" className="h-4 w-4" />
          </span>
          <span>Done Deal</span>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
