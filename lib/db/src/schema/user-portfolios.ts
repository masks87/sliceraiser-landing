import {
  pgTable,
  serial,
  text,
  jsonb,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export type PortfolioSnapshotJson = {
  holdings: Array<{
    opportunityId: number;
    title: string;
    units: number;
    investedAmount: number;
    currentValue: number;
  }>;
  allocation: Array<{ category: string; percentage: number }>;
  returnsHistory: Array<{ date: string; value: number }>;
  totals: {
    totalInvested: number;
    totalCurrentValue: number;
    totalReturn: number;
    totalReturnPct: number;
  };
};

export const userPortfoliosTable = pgTable(
  "user_portfolios",
  {
    id: serial("id").primaryKey(),
    clerkUserId: text("clerk_user_id").notNull(),
    snapshot: jsonb("snapshot").$type<PortfolioSnapshotJson>().notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (table) => ({
    clerkUserIdIdx: uniqueIndex("user_portfolios_clerk_user_id_idx").on(table.clerkUserId),
  }),
);

export type UserPortfolioRow = typeof userPortfoliosTable.$inferSelect;
export type InsertUserPortfolio = typeof userPortfoliosTable.$inferInsert;
