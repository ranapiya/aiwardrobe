"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AvatarHeader } from "@/components/AvatarHeader";

export default function SignUp() {
  
  const router = useRouter();const { data: session, status } = useSession();

  // Redirect to dashboard if already signed in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Sign Up to Ai   Wardrober</h1>
      <p className="mb-6 text-gray-600">Choose a provider to continue:</p>

      <button
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        className="bg-white border border-gray-300 px-6 py-2 rounded-md mb-4 flex items-center gap-2 cursor-pointer"
      >
        <img
          src="https://img.icons8.com/color/48/google-logo.png"
          alt="Google"
          className="h-5 w-5"
        />
        Continue with Google
      </button>

      <button
        onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        className="bg-white border border-gray-300 px-6 py-2 rounded-md flex items-center gap-2 cursor-pointer"
      >
        <img
          src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png"
          alt="GitHub"
          className="h-5 w-5"
        />
        Continue with GitHub
      </button>
      
    </div>
  );
}
