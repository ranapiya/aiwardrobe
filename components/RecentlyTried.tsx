"use client";
import React from "react";
import Image from "next/image";

const outfitImages = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
];

const RecentlyTried = () => {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recently Tried 🔥
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {outfitImages.map((src, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-4 text-center"
          >
            <div className="relative w-full h-36 rounded-lg overflow-hidden mb-2">
              <Image
                src={src}
                alt={`Outfit ${i + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-sm text-gray-700">Outfit #{i + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyTried;
