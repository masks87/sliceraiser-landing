import { pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const appWaitlistTable = pgTable(
  "app_waitlist",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => ({
    emailIdx: uniqueIndex("app_waitlist_email_idx").on(t.email),
  }),
);

export type AppWaitlistRow = typeof appWaitlistTable.$inferSelect;
export type InsertAppWaitlist = typeof appWaitlistTable.$inferInsert;
