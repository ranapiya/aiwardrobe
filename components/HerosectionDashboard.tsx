"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HerosectionDashboard = () => {
  return (
    <div className="rounded-3xl shadow-md p-6 sm:p-10 mb-8 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-[#fcd3e1] via-[#e8d9f1] to-[#d6f3f5]">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Welcome to Your AI Wardrobe 👗✨</h1>
          <p className="text-gray-700 mb-4">Upload your outfits, let AI create stunning combinations, and explore your style like never before. This smart wardrobe experience is designed to inspire you every day.</p>
          <button className="inline-flex items-center bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
            Upload Your First Look <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        <div className="hidden sm:block relative w-40 h-40 md:w-56 md:h-80 ">
          <Image
            src="/fashion.jpg"
            alt="AI Wardrobe Illustration"
            fill
            className="object-contain rounded-2xl"
          />
        </div>
      </div>
  );
};

export default HerosectionDashboard;
