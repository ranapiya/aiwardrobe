"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { uploadImage } from "@/actions/uploadImages";

const Page = () => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (newFiles: File[]) => {
    setUploading(true);
    for (const file of newFiles) {
      await uploadImage(file);
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-6">
      <div className="w-full max-w-4xl flex flex-col items-center mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
        <FileUpload onChange={handleFileUpload} />
        {uploading && <p className="mt-4 text-sm text-gray-500">Uploading...</p>}
      </div>
    </div>
  );
};

export default Page;
