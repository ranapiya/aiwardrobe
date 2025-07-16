"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardPage from "@/components/dashboardPage";
import { addUser } from "@/actions/addUser";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signup");
    }
    if (status === "authenticated" && session?.user?.email) {
      addUser(); 
    }

  }, [status, router,session?.user?.email]);


  if (status === "loading")
    return <div className="text-center mt-10 text-gray-600">Loading...</div>;

  return <DashboardPage />;
};

export default Page;
