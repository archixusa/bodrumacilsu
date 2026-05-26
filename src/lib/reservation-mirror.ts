/**
 * Fire-and-forget mirror of order submissions to the central
 * bodrum-rezervasyon-paneli (Supabase). No-op when env vars missing.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cached: SupabaseClient | null = null;

function client(): SupabaseClient | null {
  if (cached) return cached;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;
  cached = createClient(url, anon, { auth: { persistSession: false } });
  return cached;
}

export interface MirrorPayload {
  guestName: string;
  guestPhone: string;
  guestEmail?: string | null;
  region?: string | null;
  message?: string | null;
}

export function mirrorToReservationPanel(payload: MirrorPayload): void {
  const c = client();
  if (!c) return;
  const utm =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null;
  c.from("reservation_requests")
    .insert({
      source_site: "bodrumacilsu",
      property_slug: null,
      guest_name: payload.guestName,
      guest_phone: payload.guestPhone || "—",
      guest_email: payload.guestEmail ?? null,
      region: payload.region ?? null,
      message: payload.message ?? null,
      utm_source: utm?.get("utm_source") ?? null,
      utm_medium: utm?.get("utm_medium") ?? null,
      utm_campaign: utm?.get("utm_campaign") ?? null,
      user_agent:
        typeof navigator !== "undefined"
          ? navigator.userAgent.slice(0, 250)
          : null,
    })
    .then(({ error }) => {
      if (error) console.warn("[reservation-mirror]", error.message);
    });
}
