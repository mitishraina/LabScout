"use client";
import React, { useState } from "react";

const blogs = [
  {
    image: "blog1.png",
    title: "Organize your digital assets with a new methodology here...",
    desc: "Proactively orchestrate leveraged resources via enabled methodologies. Collaboratively enhance scalable e-services for standards.",
    avatar: "blog_ava.png",
    author: "Andrew Meier",
    role: "CEO",
    date: "31 Apr",
  },
  {
    image: "blog2.png",
    title: "Organize your digital assets with a new methodology here...",
    desc: "Quickly synergize resource-leveling relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.",
    avatar: "blog_ava(2).png",
    author: "David Mason",
    role: "CTO",
    date: "31 Apr",
  },
  {
    image: "blog3.png",
    title: "Organize your digital assets with a new methodology here...",
    desc: "Proactively orchestrate leveraged resources via enabled methodologies. Collaboratively enhance scalable e-services for standards.",
    avatar: "blog_ava(3).png",
    author: "Andrea Meier",
    role: "UI",
    date: "29 Apr",
  },
];

const BlogSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-white w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-[#151B28]">
          Latest Blog Posts
        </h2>
        <p className="text-center text-gray-500 mb-10 text-lg md:text-xl">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-col relative cursor-pointer"
            >
              <div className="relative group mb-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-lg w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-lg">
                  <p className="text-white text-lg font-semibold">
                    Read More...
                  </p>
                </div>
              </div>
              <h3 className="font-semibold text-lg text-[#151B28] mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 flex-1">{blog.desc}</p>
              <div className="flex items-center gap-2 mt-auto w-full justify-between">
                <div className="flex gap-2">
                  <div>
                    <img
                      src={`/${blog.avatar}`}
                      alt={blog.author}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col text-left">
                      <div className="font-semibold text-[#151B28] text-sm">
                        {blog.author}
                        <div className="text-gray-400 text-xs">{blog.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-gray-400 text-md">{blog.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
