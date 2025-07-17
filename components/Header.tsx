"use client"
import React from "react";
import { useSession } from "next-auth/react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";


const Header = ({ name }: { name: string }) => {
    const { data: session } = useSession();
  return (
    <div className="w-full flex items-center justify-between mb-6">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ">
          <Image
            src={session?.user?.image || "/default-avatar.png"}
            alt="User profile"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 font-sans">
          
          {name}
        </h1>
        <SidebarTrigger />
      </div>
  )
}

export default Header