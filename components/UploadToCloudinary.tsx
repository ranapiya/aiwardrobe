"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function UploadToCloudinary() {
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setUploaded(false);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ai_wardrobe_unsigned"); // your preset

    const res = await fetch("https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (data.secure_url) {
      await fetch("/api/save-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: data.secure_url }),
      });
      setUploaded(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <Button disabled>Uploading...</Button>}
      {uploaded && <Button className="bg-green-600">Uploaded ✅</Button>}
    </div>
  );
}
