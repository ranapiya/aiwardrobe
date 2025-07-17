"use client";
import React from 'react';
import { useSession } from "next-auth/react";
import Header from './Header';
import HerosectionDashboard from './HerosectionDashboard';
import FeaturesCards from './FeaturesCards';
import RecentlyTried from './RecentlyTried';


export default function DashboardPage() {
  const { data: session} = useSession();
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#fff8f9] via-[#f6f0ff] to-[#e9f6fb] px-6 sm:px-10 py-6 overflow-hidden text-gray-800 lg:px-28">
     
      <Header name="Dashboard"/>
      <div className="mb-6">
        <h1 className="text-md sm:text-lg text-gray-600">Hello,</h1>
        <h2 className="text-2xl font-bold text-gray-800">
          {session?.user?.name || "Tanmay Mathur"} 👋
        </h2>
      </div>
      <HerosectionDashboard/>
      <FeaturesCards/>
      <RecentlyTried/>
      </div>
  );
}

