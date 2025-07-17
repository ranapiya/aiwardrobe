"use client";

import React, { useEffect, useState } from "react";
import { getUserImages } from "@/actions/getUserImages";
import { deleteImage } from "@/actions/deleteImage";
import Image from "next/image";
import { Button } from "./ui/button";
import { MdDelete } from "react-icons/md";
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type ImageItem = {
  id: string;
  userId: string;
  imageUrl: string;
  createdAt: Date | null;
};

const WardrobeSection = () => {
  const [images, setImages] = useState<ImageItem[]>([]);

  const fetchImages = async () => {
    const result = await getUserImages();
    setImages(result);
  };

  const handleDelete = async (imageId: string) => {
    setImages((prevImages) => prevImages.filter((img) => img.id != imageId)); // ui 
    try {
      await deleteImage(imageId);
    } catch (error) {
      console.error("Failed to delete ", error);

      fetchImages();
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-2">
      <h2 className="text-2xl font-semibold mb-4">Your Uploaded Outfits</h2>

      {images.length === 0 ? (
        <p className="text-gray-600">No outfits uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative aspect-square rounded-xl overflow-hidden shadow"
            >
              <Image
                src={img.imageUrl}
                alt="User outfit"
                fill
                className="object-cover"
              />
              <Button
                onClick={() => handleDelete(img.id)}
                className="absolute top-2 right-2 h-8 w-8 md:h-9 md:w-9 rounded-full p-0 flex items-center justify-center  hover:bg-red-600 cursor-pointer"
              >
                <MdDelete className="text-white" size={20} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WardrobeSection;
