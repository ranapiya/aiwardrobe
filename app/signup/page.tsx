"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUp() {
  const router = useRouter();
  const { data: session, status } = useSession();

  // Redirect to dashboard if already signed in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-pink-200 via-purple-200 to-cyan-200 px-4">
      <div className="bg-white/60 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-3xl px-8 py-12 max-w-md w-full text-center space-y-6">
        
        <Image
          src="/bird_2.jpg" //  logo
          alt="AI Wardrobe"
          width={70}
          height={70}
          className="mx-auto rounded-full"
        />

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 drop-shadow-sm">
          Sign Up to AI Wardrobe
        </h1>

        <p className="text-gray-700 text-base sm:text-lg">
          Choose a provider to continue
        </p>

        <div className="space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="bg-white w-full border border-gray-300 px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:shadow-md transition cursor-pointer"
          >
            <Image
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              width={20}
              height={20}
            />
            Continue with Google
          </button>

          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="bg-black text-white w-full px-6 py-3 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-900 transition cursor-pointer"
          >
            <Image
              src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
              alt="GitHub"
              width={20}
              height={20}
            />
            Continue with GitHub
          </button>
        </div>
      </div>
    </main>
  );
}
