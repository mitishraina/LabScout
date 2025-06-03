import React from "react";

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

const FeaturesDarkSection = () => {
  return (
    <section className="bg-[#151B28] w-full pt-6 pb-8 px-2 md:px-0 min-h-[80vh] flex flex-col items-center">
      <div className="w-full max-w-7xl md:max-w-7xl mx-auto bg-[#151B28] rounded-lg flex flex-col md:flex-row items-center md:items-stretch overflow-hidden p-0 md:p-8">
        {/* Image for mobile */}
        <div className="w-full flex justify-center md:hidden mb-6">
          <img
            src="/product_features(2).png"
            alt="Product features"
            className="w-full max-w-xs rounded-t-lg object-contain"
          />
        </div>
        {/* Image for desktop */}
        <div className="hidden md:flex md:w-[560px] md:h-[560px] items-center justify-center">
          <img
            src="/product_features(2).png"
            alt="Product features"
            className="w-[560px] h-[560px] object-contain"
          />
        </div>
        {/* Features List */}
        <div className="flex-1 flex flex-col gap-6 w-full px-4 md:px-8 py-2 md:py-8 justify-center md:justify-center md:self-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-start items-start gap-4 mb-2">
              <div className="text-white rounded-full flex items-center justify-center text-xl font-bold mt-1 h-14 w-14 md:h-14 md:w-14">
                <img
                  src={`/${feature.avatar}`}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              <div>
                <h3 className="font-semibold text-base md:text-xl text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-1">
                  {feature.desc}
                </p>
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
      </div>
    </section>
  );
};

export default FeaturesDarkSection;
