"use client";
import React from 'react';
import { useSession } from "next-auth/react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Upload, Sparkles, Bookmark, User, ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';


export default function DashboardPage() {
  const { data: session} = useSession();
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fff8f9] via-[#f6f0ff] to-[#e9f6fb] px-6 sm:px-10 py-6 overflow-hidden text-gray-800 lg:px-28">
      {/* Top Bar */}
      <div className="w-full flex items-center justify-between mb-6">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ">
          <Image
            
            src={session?.user?.image || "/default-avatar.png"}
            alt="User profile"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 font-sans">Dashboard</h1>
        <SidebarTrigger />
      </div>

      
      <div className="mb-6">
        <h1 className="text-md sm:text-lg text-gray-600">Hello,</h1>
        <h2 className="text-2xl font-bold text-gray-800">
          {session?.user?.name || "Tanmay Mathur"} 👋
        </h2>
      </div>

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

      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Card
          image="/fashion4.jpg"
          icon={<Upload className="w-5 h-5 text-blue-500" />}
          title="Upload Outfit"
          subtitle="31 Clothes Uploaded"
          href='/upload'
          
        />
        <Card
          image="/upload.jpg"
          icon={<Sparkles className="w-5 h-5 text-purple-500" />}
          title="AI Combos"
          subtitle="62 Looks Created"
          href='/upload'
        />
        <Card
          image="/fashion3.jpg"
          icon={<Bookmark className="w-5 h-5 text-pink-500" />}
          title="Favourites"
          subtitle="104 Items Saved"
          href='/upload'
        />
        <Card
          image="/fashion2.jpg"
          icon={<User className="w-5 h-5 text-yellow-500" />}
          title="My Wardrobe"
          subtitle="Customize Avatar"
          href='/wardrobe'
        />
      </div>

      
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Tried 🔥</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 text-center"
            >
              <div className="h-24 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg mb-2" />
              <p className="text-sm text-gray-700">Outfit #{i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ image, icon, title, subtitle, href }: { image: string; icon: React.ReactNode; title: string; subtitle: string; href: string }) {
  return (
    <Link href={href}>
      <div className="w-full h-64 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl shadow-pink-200 hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer">
        <div className="relative w-full h-40">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 p-3 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-1">
            {icon}
            <span className="text-sm font-semibold text-gray-800">{title}</span>
          </div>
          <p className="text-xs text-gray-600">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}

