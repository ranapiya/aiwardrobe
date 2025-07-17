"use client";
import React from 'react';
import { Upload, Sparkles, Bookmark, User, ArrowRight } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

const FeaturesCards = () => {

  return (
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
  )
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
export default FeaturesCards