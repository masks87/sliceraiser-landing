import { Router, type IRouter } from "express";
import { z } from "zod";
import { db } from "@workspace/db";
import * as schema from "@workspace/db";

const router: IRouter = Router();

const AppWaitlistBody = z.object({
  email: z.string().email().max(320),
});

router.post("/app-waitlist", async (req, res) => {
  const parsed = AppWaitlistBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  const email = parsed.data.email.trim().toLowerCase();

  try {
    await db
      .insert(schema.appWaitlistTable)
      .values({ email })
      .onConflictDoNothing({ target: schema.appWaitlistTable.email });
    return res.status(200).json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to save app waitlist email");
    return res.status(500).json({ error: "Could not save your email. Please try again." });
  }
});

export default router;
