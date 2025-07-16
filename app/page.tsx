"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200 px-4">
      <div className="bg-white/60 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl px-10 py-12 max-w-md w-full text-center space-y-6">
        
        
        <div className="flex justify-center">
          <Image
            src="/bird_2.jpg" 
            alt="AI Wardrobe"
            width={90}
            height={90}
            className="rounded-full"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 drop-shadow-sm">
          AI Wardrobe
        </h1>

        <p className="text-gray-700 text-base sm:text-lg px-2">
          Upload outfits, get daily style suggestions, and build your personal digital wardrobe. Designed to keep you effortlessly fashionable.
        </p>

        <Link href="/signup" className="block">
          <Button className="w-full py-6 text-lg rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 hover:brightness-110 transition duration-300 cursor-pointer">
            Sign In / Get Started
          </Button>
        </Link>
      </div>
    </main>
  );
}
