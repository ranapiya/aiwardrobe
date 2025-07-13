  "use server";

  import { db } from "@/db/drizzle";
  import { users } from "@/db/schema";
  import { getServerSession } from "next-auth";
  import { authOptions } from "@/app/api/auth/[...nextauth]/route";
  import { eq} from "drizzle-orm";

  /*  USER DATABASE  */

    export const addUser = async () => {

    const session = await getServerSession(authOptions);

    if (!session?.user?.email) return;   // check if session exist or not

    const [existingUser] = await db.select().from(users).where(eq(users.email, session.user.email)); // checking the same email is there in db or not

    if (!existingUser) {  // If no user is found adding new user to table
      await db.insert(users).values({
        name: session.user.name!,
        email: session.user.email!,
        photo: session.user.image!,

      });
    }
  };


