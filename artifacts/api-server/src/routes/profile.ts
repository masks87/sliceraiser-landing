import { Router, type IRouter } from "express";
import { supabase } from "../lib/supabase";
import { requireAuth, type AuthedRequest } from "../lib/requireAuth";

const router: IRouter = Router();

const EMPTY_PROFILE = {
  clerk_user_id: null as string | null,
  exists: false,
};

router.get("/profile", requireAuth, async (req, res) => {
  if (!supabase) {
    req.log.error("Supabase not configured");
    res.status(503).json({ error: "Service unavailable" });
    return;
  }

  const userId = (req as AuthedRequest).userId;

  const { data, error } = await supabase
    .from("user_profiles")
    .select("*")
    .eq("clerk_user_id", userId)
    .maybeSingle();

  if (error) {
    req.log.error({ err: error.message }, "user_profiles query failed");
    res.status(500).json({ error: "Failed to load profile" });
    return;
  }

  if (!data) {
    res.json({ ...EMPTY_PROFILE, clerk_user_id: userId });
    return;
  }

  res.json({ ...data, exists: true });
});

export default router;
