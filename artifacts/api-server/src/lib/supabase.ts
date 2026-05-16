import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { logger } from "./logger";

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  logger.warn(
    { hasUrl: Boolean(url), hasKey: Boolean(serviceRoleKey) },
    "Supabase env vars missing: SUPABASE_URL and/or SUPABASE_SERVICE_ROLE_KEY",
  );
}

export const supabase: SupabaseClient | null =
  url && serviceRoleKey
    ? createClient(url, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
    : null;

export function isSupabaseConfigured(): boolean {
  return supabase !== null;
}
