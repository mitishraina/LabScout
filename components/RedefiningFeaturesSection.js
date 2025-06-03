import React from "react";
import Image from "next/image";

const features = [
  {
    avatar: "idea.png",
    title: "Explore ideas together",
    desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    avatar: "idea-bulb.png",
    title: "Bring those ideas to life",
    desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    avatar: "outcome.png",
    title: "Ship better outcomes",
    desc: "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
];

const RedefiningFeaturesSection = () => {
  return (
    <section className="bg-white w-full min-h-[75vh] pt-6 pb-16 flex flex-col justify-center relative px-4 md:px-0">
      {/* Upper Section */}
      <div className="pt-12 pb-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#151B28] text-center">
          Redefining Product Features
        </h2>
        <p className="text-gray-500 mb-6 text-md text-center max-w-3xl mx-auto">
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence
          <br />
          on cross-platform integration.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 flex-1 w-full max-w-7xl mx-auto">
        {/* Features List */}
        <div className="flex-1 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-white rounded-full flex items-center justify-center text-xl font-bold mt-1 h-14 w-14 md:h-14 md:w-14">
                <Image
                  src={`/${feature.avatar}`}
                  className="w-8 h-8 md:w-10 md:h-10"
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl text-black mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-md">{feature.desc}</p>
                <a
                  href="#"
                  className="text-[#437EF7] text-sm font-medium hover:underline mt-1 inline-block"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Product Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/product_features.png"
            alt="Product features"
            width={560}
            height={560}
            className="w-[560px] h-[560px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default RedefiningFeaturesSection;
