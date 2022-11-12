import React from "react";
import { blogData } from "../data/blogData";
import { BlogCard } from "./Utilities";

const Blog = () => {
  return (
    <div className="min-h-screen relative p-20 py-5 space-y-6 bg-gray-100 flex flex-col items-start justify-center font-space">
      <h3 className="font-semibold text-3xl">Our Blog</h3>
      <p className="font-light text-xl">Explore the Cloudax Ecosystem, Learn &amp; Discover Latest News.</p>

      {/* blog -- articles */}
      <div className="flex items-center w-full justify-between">
        {blogData.map((info, index) => (
          <BlogCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
