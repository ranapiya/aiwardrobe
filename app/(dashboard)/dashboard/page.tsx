"use client";
import React, { useEffect } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Upload, Sparkles, Bookmark, User, ArrowRight } from "lucide-react";
import Image from 'next/image';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signup");
    }
  }, [status, router]);

  if (status === "loading") return <div className="text-center mt-10 text-gray-600">Loading...</div>;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFEFEF] via-[#F5F0FF] to-[#E0F7FA] px-6 sm:px-10 py-6 overflow-hidden text-gray-800">
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

      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-md sm:text-lg text-gray-600">Hello,</h1>
        <h2 className="text-2xl font-bold text-gray-800">
          {session?.user?.name || "Tanmay Mathur"} 👋
        </h2>
      </div>

      {/* Hero Section */}
      <div className="bg-white rounded-3xl shadow-md p-6 sm:p-10 mb-8 flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Welcome to Your AI Wardrobe 👗✨</h1>
          <p className="text-gray-600 mb-4">Upload your outfits, let AI create stunning combinations, and explore your style like never before. This smart wardrobe experience is designed to inspire you every day.</p>
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

      

      {/* Main Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <Card
          icon={<Upload className="w-6 h-6 text-blue-500" />}
          title="Upload Outfit"
          subtitle="31 Clothes Uploaded"
        />
        <Card
          icon={<Sparkles className="w-6 h-6 text-purple-500" />}
          title="AI Combos"
          subtitle="62 Looks Created"
        />
        <Card
          icon={<Bookmark className="w-6 h-6 text-pink-500" />}
          title="Favourites"
          subtitle="104 Items Saved"
        />
        <Card
          icon={<User className="w-6 h-6 text-yellow-500" />}
          title="Edit Profile"
          subtitle="Customize Avatar"
        />
      </div>

      {/* Recently Tried */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recently Tried 🔥</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-4 text-center"
            >
              <div className="h-24 bg-gray-100 rounded-lg mb-2" />
              <p className="text-sm text-gray-700">Outfit #{i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 flex flex-col justify-between h-40 sm:h-48 text-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-3">{icon}</div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-gray-500">{subtitle}</div>
    </div>
  );
}
