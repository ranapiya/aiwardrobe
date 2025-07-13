// app/api/upload/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/db/drizzle";
import { uploads, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { uploadImageToCloudinary } from "@/lib/uploadImage";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const imageUrl = await uploadImageToCloudinary(file);

  const [user] = await db.select().from(users).where(eq(users.email, session.user.email));
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  await db.insert(uploads).values({
    userId: user.id,
    imageUrl,
  });

  return NextResponse.json({ success: true, url: imageUrl });
}
