'use client';
import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export const DashboardCard = ({ title, description, href }: CardProps) => {
  return (
    <Link
      href={href}
      className="bg-white rounded-2xl p-4 shadow hover:shadow-md transition-all border border-gray-100"
    >
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </Link>
  );
};
