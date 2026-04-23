import {
  pgTable,
  serial,
  text,
  numeric,
  timestamp,
} from "drizzle-orm/pg-core";

export const investmentOpportunitiesTable = pgTable("investment_opportunities", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  assetType: text("asset_type").notNull(),
  incomeType: text("income_type").notNull(),
  riskLevel: text("risk_level").notNull(),
  expectedReturn: numeric("expected_return", { precision: 6, scale: 2 }).notNull(),
  minimumInvestment: numeric("minimum_investment", { precision: 14, scale: 2 }).notNull(),
  targetAmount: numeric("target_amount", { precision: 14, scale: 2 }).notNull(),
  fundedAmount: numeric("funded_amount", { precision: 14, scale: 2 }).notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type InvestmentOpportunityRow = typeof investmentOpportunitiesTable.$inferSelect;
export type InsertInvestmentOpportunity = typeof investmentOpportunitiesTable.$inferInsert;
