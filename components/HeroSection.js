import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-[#2B63D9] w-full text-white pt-10 pb-16 px-4 md:px-0 min-h-[85vh] flex flex-col md:flex-row items-center">
      {/* Mobile image */}
      <div className="block md:hidden absolute right-0 top-0 w-100 h-100 z-0">
        <img
          src="/hero-element.png"
          alt="hero image"
          className="w-full h-full object-cover object-right"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col flex-1 gap-6 w-full mt-92 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Your Supercharged
          <br />
          Design Workflow.
        </h1>
        <p className="text-base md:text-md opacity-80 max-w-lg">
          We've been told it's not possible to overachieve our customers'
          expectations. We have not reinvented the wheel, we decided to build
          upon it.
        </p>
        <button className="bg-[#437EF7] text-white font-semibold px-6 py-2 rounded shadow w-fit hover:bg-[#2B63D9] transition cursor-pointer">
          Send Notification
        </button>
        <div className="flex flex-col gap-4">
          <span className="text-sm opacity-80">Who supports us</span>
          <div className="flex items-center justify-center md:justify-start gap-8 pl-2 flex-wrap">
            <img src="/gitlab.png" alt="GitLab" className="h-7 w-auto" />
            <img src="/slack.png" alt="Slack" className="h-7 w-auto" />
            <img src="/netflix.png" alt="Netflix" className="h-7 w-auto" />
            <img src="/paypal.png" alt="PayPal" className="h-7 w-auto" />
          </div>
        </div>
      </div>
      {/* Desktop image */}
      <div className="hidden md:block absolute top-0 right-0 h-full w-1/2">
        <img
          src="/hero-element.png"
          alt="hero image"
          className="w-full h-full object-contain object-right"
        />
      </div>
    </section>
  );
};

export default HeroSection;
