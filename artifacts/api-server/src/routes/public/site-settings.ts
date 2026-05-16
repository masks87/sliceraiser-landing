import { Router, type IRouter } from "express";
import { supabase } from "../../lib/supabase";

const router: IRouter = Router();

router.get("/public/site-settings", async (req, res) => {
  if (!supabase) {
    req.log.error("Supabase not configured");
    res.status(503).json({ error: "Service unavailable" });
    return;
  }

  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .eq("is_public", true);

  if (error) {
    req.log.error({ err: error.message }, "site_settings query failed");
    res.status(500).json({ error: "Failed to load site settings" });
    return;
  }

  res.json(data ?? []);
});

export default router;
