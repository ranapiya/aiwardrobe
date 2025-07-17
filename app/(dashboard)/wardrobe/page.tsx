"use client";
import React from "react";
import HerosectionWardrobe from "@/components/HerosectionWardrobe";
import Wardrobesection from "@/components/Wardrobesection";
import Header from "@/components/Header";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fff8f9] via-[#f6f0ff] to-[#e9f6fb] p-4  sm:px-10 py-6 overflow-hidden text-gray-800">
      <Header name="Wardrobe"/>
      <HerosectionWardrobe/>
      <Wardrobesection/>
       
    </div>
  );
};

export default page;
