import { Star, ShieldCheck, BadgeCheck, Clock4 } from "lucide-react";
import { siteConfig } from "@/lib/config";

interface TrustBarProps {
  variant?: "light" | "dark";
}

const items = [
  {
    icon: Star,
    text: (rating: number, count: number) => (
      <>
        <strong className="font-semibold">{rating}/5</strong>
        <span className="ml-1">({count}+ değerlendirme)</span>
      </>
    ),
    tint: "text-amber-500",
  },
  {
    icon: ShieldCheck,
    text: () => <>Sigortalı teslimat</>,
    tint: "text-brand-600",
  },
  {
    icon: BadgeCheck,
    text: () => <>Sağlık Bakanlığı onaylı kaynak</>,
    tint: "text-emerald-600",
  },
  {
    icon: Clock4,
    text: () => <>7/24 hizmet · ort. 60 dk</>,
    tint: "text-accent2-500",
  },
];

export function TrustBar({ variant = "light" }: TrustBarProps) {
  const base =
    variant === "dark"
      ? "border-white/15 bg-white/5 text-white/85"
      : "border-slate-200 bg-white text-ink-muted";

  return (
    <ul
      className={`flex flex-wrap items-center gap-x-5 gap-y-2.5 rounded-2xl border px-4 py-3 text-sm ${base}`}
    >
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-2">
          <it.icon className={`h-4 w-4 ${it.tint}`} aria-hidden />
          {it.text(siteConfig.rating.value, siteConfig.rating.count)}
        </li>
      ))}
    </ul>
  );
}
