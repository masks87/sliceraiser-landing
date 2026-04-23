import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import { db } from "@workspace/db";
import * as schema from "@workspace/db";
import { requireAuth, type AuthedRequest } from "../lib/requireAuth";

const router: IRouter = Router();

const EMPTY_SNAPSHOT: schema.PortfolioSnapshotJson = {
  holdings: [],
  allocation: [],
  returnsHistory: [],
  totals: {
    totalInvested: 0,
    totalCurrentValue: 0,
    totalReturn: 0,
    totalReturnPct: 0,
  },
};

router.get("/portfolio", requireAuth, async (req, res) => {
  const userId = (req as AuthedRequest).userId;

  const [existing] = await db
    .select()
    .from(schema.userPortfoliosTable)
    .where(eq(schema.userPortfoliosTable.clerkUserId, userId))
    .limit(1);

  const snapshot = existing ? existing.snapshot : EMPTY_SNAPSHOT;
  const updatedAt = existing ? existing.updatedAt : new Date();

  res.json({
    holdings: snapshot.holdings,
    allocation: snapshot.allocation,
    returnsHistory: snapshot.returnsHistory,
    totals: snapshot.totals,
    updatedAt: updatedAt.toISOString(),
  });
});

export default router;
