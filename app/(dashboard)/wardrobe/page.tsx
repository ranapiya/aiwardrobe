"use client";
import React from "react";
import Image from "next/image";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ArrowRight } from "lucide-react";
import HerosectionWardrobe from "@/components/HerosectionWardrobe";
import Wardrobesection from "@/components/Wardrobesection";
const page = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fff8f9] via-[#f6f0ff] to-[#e9f6fb] px-6 sm:px-10 py-6 overflow-hidden text-gray-800">
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 font-sans">
          Wardrobe
        </h1>
        <SidebarTrigger />
      </div>
      <HerosectionWardrobe/>
      <Wardrobesection/>
       
    </div>
  );
};

export default page;
