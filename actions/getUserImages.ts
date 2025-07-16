"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db/drizzle";
import { eq } from "drizzle-orm";
import { uploads, users } from "@/db/schema";

export async function getUserImages() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return [];

  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user.email));

  if (!user) return [];

  const images = await db
    .select()
    .from(uploads)
    .where(eq(uploads.userId, user.id));

  return images;
}
