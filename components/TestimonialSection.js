import React from "react";
import Image from "next/image";

const TestimonialSection = () => {
  return (
    <section className="bg-white w-full py-8 px-2 md:py-12 md:px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-2xl font-bold text-[#151B28] text-center mb-2">
          What Our Customers Say
        </h2>
        <p className="text-gray-500 text-md md:text-base text-center mb-6">
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          strategies to ensure domination.
        </p>
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-lg shadow p-8 flex flex-col items-center text-center md:text-center">
          <Image
            src="/Lookscout_black.png"
            alt="lookscout logo"
            width={150}
            height={50}
            className="h-full object-contain mb-2"
          />
          <p className="max-w-[58rem] text-3xl font-medium text-[#151B28] mb-4 p-6">
            Thank you for making it painless, pleasant and most of all hassle
            free! I love LookScout. I can&apos;t say enough about LookScout.
            Great job, I will be ordering again!
          </p>
          <div className="flex gap-3 items-center mt-2 text-left md:text-center">
            <Image
              src="/ceo.png"
              alt="ceo"
              width={40}
              height={40}
              className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-[#151B28] text-md md:text-base text-left">
                Lisa Smith
              </span>
              <span className="text-gray-400 text-sm md:text-sm">
                CEO Company
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
