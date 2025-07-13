"use server";

import { db } from "@/db/drizzle";
import { uploads, users } from "@/db/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { eq } from "drizzle-orm";
import cloudinary from "@/lib/cloudinary";

export async function uploadImage(file: File) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return;

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

  const result = await cloudinary.uploader.upload(base64, {
    folder: "ai-wardrobe",
  });

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email));

  if (!user) return;

  await db.insert(uploads).values({
    userId: user.id,
    imageUrl: result.secure_url,
  });
}
