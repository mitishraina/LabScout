import React from "react";
import Image from "next/image";

const features = [
  {
    avatar: "work-org.png",
    title: "Easier Work Organization",
    desc: "Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.",
  },
  {
    avatar: "fast-con.png",
    title: "Fast Connection",
    desc: "Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. ",
  },
  {
    avatar: "streamline.png",
    title: "Streamlined Processes",
    desc: "Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.",
  },
  {
    avatar: "easy-integrations.png",
    title: "Easier Integrations",
    desc: "Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.",
  },
  {
    avatar: "market_analytics.png",
    title: "Marketing Analytics",
    desc: "Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.",
  },
  {
    avatar: "workflow.png",
    title: "Workflow Builder",
    desc: "Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.",
  },
];

const MessagingSection = () => {
  return (
    <section className="bg-white w-full pt-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#151B28]">
          Messaging for all
        </h2>
        <p className="text-center text-gray-500 mb-10 text-md">
          User generated content in real-time will have multiple touchpoints for
          offshoring.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col py-2">
              <div className="bg-[#437EF7] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                <Image
                  src={`/${feature.avatar}`}
                  alt={`${feature.title}`}
                  width={100}
                  height={100}
                  className="w-9 h-9"
                />
              </div>
              <h3 className="font-semibold text-xl text-[#151B28] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md mb-2">{feature.desc}</p>
              <a
                href="#"
                className="text-[#2B63D9] text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.slice(3).map((feature, index) => (
            <div key={index} className="flex flex-col py-2">
              <div className="bg-[#437EF7] text-white rounded-full w-12 h-12 flex items-center justify-center mb-4 text-xl font-bold">
                <Image
                  src={`/${feature.avatar}`}
                  alt={feature.title}
                  width={100}
                  height={100}
                  className="w-9 h-9"
                />
              </div>
              <h3 className="font-semibold text-xl text-[#151B28] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-md mb-2">{feature.desc}</p>
              <a
                href="#"
                className="text-[#2B63D9] text-sm font-medium hover:underline"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessagingSection;
