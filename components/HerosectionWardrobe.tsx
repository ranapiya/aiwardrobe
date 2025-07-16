"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HerosectionWardrobe = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#ffe1ec] via-[#e9e4f0] to-[#d8f8f6] rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-10 mb-6 lg:px-32">
      <div className="relative z-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
        {/* Text Content */}
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Curate. Style. Slay. 💃
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4">
            Welcome to your AI-powered wardrobe. Upload looks, get outfit suggestions, and keep your style game sharp — effortlessly.
          </p>
          <button className="inline-flex items-center bg-black text-white px-5 py-2 rounded-full hover:scale-105 hover:bg-gray-900 transition-all duration-300 text-sm sm:text-base">
            AI Suggestions <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <div className="relative  sm:w-52 sm:h-64 mb-6 sm:mb-0">
          <Image
            src="/fashion3.jpg"
            alt="AI Wardrobe"
            fill
            className="object-cover rounded-2xl border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HerosectionWardrobe;
