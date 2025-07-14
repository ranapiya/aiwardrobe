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
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-4xl flex flex-col items-center mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />

        {uploading && <Button>Uploading...</Button>}

        {!uploading && uploaded && (
          <div className="flex flex-col gap-y-4">
            <Button className="bg-emerald-600">Uploaded ✅</Button>
            <p>Go to your wardrobe</p>
            <Button className="bg-cyan-600 text-white">
              <Link href="/wardrobe">Wardrobe ➡️</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
