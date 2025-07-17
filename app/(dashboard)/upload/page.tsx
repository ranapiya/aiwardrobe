"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { saveImageUrlToDB } from "@/actions/uploadImages";

const Page = () => {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileUpload = async (files: File[]) => {
    setUploading(true);
    setUploaded(false);

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ai_wardrobe_unsigned");

      const res = await fetch("https://api.cloudinary.com/v1_1/dd9rkeisv/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.secure_url) {
        await saveImageUrlToDB(data.secure_url);
      }
    }

    setUploading(false);
    setUploaded(true);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-pink-200 via-purple-200 to-cyan-200">
      <div className="w-full max-w-3xl p-8 rounded-2xl shadow-xl bg-white dark:bg-zinc-900 border border-dashed border-neutral-300 dark:border-neutral-800 transition-all">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-zinc-800 dark:text-zinc-100">
          Upload Your Outfit
        </h1>

        <div className="flex flex-col items-center justify-center gap-6">
          <FileUpload onChange={handleFileUpload} />

          {uploading && (
            <Button className="w-full max-w-sm bg-yellow-500 text-white hover:bg-yellow-600">
              Uploading...
            </Button>
          )}

          {!uploading && uploaded && (
            <div className="w-full max-w-sm flex flex-col gap-4 items-center mt-4">
              <Button className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                Uploaded ✅
              </Button>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm">
                Head over to your wardrobe to view your outfit
              </p>
              <Link href="/wardrobe" passHref>
                <Button className="w-full bg-cyan-600 text-white hover:bg-cyan-700">
                  Go to Wardrobe ➡️
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Page;
