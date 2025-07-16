"use server";

import { db } from "@/db/drizzle";
import { uploads, users } from "@/db/schema";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { eq } from "drizzle-orm";

export async function saveImageUrlToDB(imageUrl: string) {
  
  const session = await getServerSession(authOptions);
  if (!session?.user?.email || !imageUrl) return;

  const [user] = await db.select().from(users).where(eq(users.email, session.user.email));
  if (!user) return;

  await db.insert(uploads).values({
    userId: user.id,
    imageUrl,
  });
}
