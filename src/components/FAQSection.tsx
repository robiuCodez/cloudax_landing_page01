import React from "react";
import { faqData } from "../data/faqData";

const FAQSection = () => {
  return (
    <div
      className="bg-black text-gray-50 px-10 h-screen py-10 flex items-start justify-between w-full font-space"
      id="frequently-asked-questions"
    >
      <div className="w-1/2 space-y-5">
        <h3 className="text-3xl font-bold">FAQ</h3>
        <h5 className="font-semibold w-[360px]">
          Didn&apos;t find an answer to your question? Drop us a line here.
        </h5>
        <button className="border-gray-50 border-2 px-6 py-2 rounded-lg font-semibold">
          Ask a Question
        </button>
      </div>

      {/* right side */}
      <div className="w-1/2 border-spacing-y-4 border-yellow-200">
        <div className="w-full">
          {faqData.map((info, index) => (
            <details key={index} className="">
              <summary>{info.summary}</summary>
              <p>{info.text}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
