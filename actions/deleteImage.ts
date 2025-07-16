"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/db/drizzle";
import { uploads} from "@/db/schema";
import { getServerSession } from "next-auth";
import { eq } from "drizzle-orm";

export async function deleteImage(imageId:string) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return [];

   await db.delete(uploads).where(eq(uploads.id,imageId ));
  
}
