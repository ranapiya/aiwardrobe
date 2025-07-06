"use client";

export default function Home() {



  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-2">Welcome to Ai wardrobe</h1>
      <p className="text-gray-600">Please <a href="/signup" className="underline">sign in</a> to continue.</p>
    </div>
  );
}
