import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db } from "@workspace/db";
import * as schema from "@workspace/db";
import { GetOpportunityParams } from "@workspace/api-zod";

const router: IRouter = Router();

const ALLOWED_CATEGORIES = new Set(["Property", "Equity", "Fixed Income"]);

function rowToDto(row: typeof schema.investmentOpportunitiesTable.$inferSelect) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    location: row.location,
    category: row.category,
    assetType: row.assetType,
    incomeType: row.incomeType,
    riskLevel: row.riskLevel,
    expectedReturn: Number(row.expectedReturn),
    minimumInvestment: Number(row.minimumInvestment),
    targetAmount: Number(row.targetAmount),
    fundedAmount: Number(row.fundedAmount),
    imageUrl: row.imageUrl,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
  };
}

router.get("/opportunities", async (req, res) => {
  const category = typeof req.query.category === "string" ? req.query.category : undefined;
  if (category && !ALLOWED_CATEGORIES.has(category)) {
    return res.status(400).json({ error: "Invalid category" });
  }
  const base = db.select().from(schema.investmentOpportunitiesTable);
  const rows = await (category
    ? base.where(eq(schema.investmentOpportunitiesTable.category, category))
    : base
  ).orderBy(schema.investmentOpportunitiesTable.id);
  res.json(rows.map(rowToDto));
});

router.get("/opportunities/:id", async (req, res) => {
  const parse = GetOpportunityParams.safeParse({ id: Number(req.params.id) });
  if (!parse.success) {
    return res.status(400).json({ error: "Invalid id" });
  }
  const [row] = await db
    .select()
    .from(schema.investmentOpportunitiesTable)
    .where(eq(schema.investmentOpportunitiesTable.id, parse.data.id))
    .limit(1);
  if (!row) {
    return res.status(404).json({ error: "Opportunity not found" });
  }
  res.json(rowToDto(row));
});

export default router;
