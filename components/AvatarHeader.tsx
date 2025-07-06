'use client';
import React from 'react';

export const AvatarHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/avatar.png" // Replace with actual avatar
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-sm text-gray-600">Hello,</h2>
          <h1 className="text-lg md:text-xl font-bold text-blue-800">
            Tanmay Mathur 👋
          </h1>
        </div>
      </div>
      <button className="p-2 md:hidden text-gray-600">
        ☰
      </button>
    </div>
  );
};
