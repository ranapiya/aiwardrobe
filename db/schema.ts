import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(), 
  name: text("name"),
  email: text("email").notNull(),
  photo: text("photo"),
});


export const uploads = pgTable("uploads", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").notNull().references(() => users.id),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const userRelations = relations(users, ({ many }) => ({
  uploads: many(uploads),
}));

export const uploadRelations = relations(uploads, ({ one }) => ({
  user: one(users, {
    fields: [uploads.userId],
    references: [users.id],
  }),
}));

