import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig, telLink } from "@/lib/config";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  variant?: "primary" | "ghost" | "coral" | "white";
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
  label?: string;
}

const sizes = {
  sm: "h-11 px-4 text-sm gap-1.5",
  md: "h-12 px-5 text-base gap-2",
  lg: "h-14 px-6 text-base gap-2.5",
};

export function CallButton({
  variant = "primary",
  size = "md",
  showNumber = true,
  className,
  label,
}: CallButtonProps) {
  const variants = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-700 shadow-card focus-visible:ring-brand-500/35",
    coral:
      "bg-accent2-500 text-white hover:bg-accent2-600 shadow-card focus-visible:ring-accent2-500/35",
    ghost:
      "bg-white text-brand-700 border border-brand-200 hover:border-brand-400 hover:bg-brand-50",
    white:
      "bg-white text-ink hover:bg-slate-50 border border-slate-200 shadow-soft",
  } as const;

  return (
    <Link
      href={telLink()}
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4",
        variants[variant],
        sizes[size],
        className,
      )}
      aria-label={`Hemen ara: ${siteConfig.contact.phone}`}
    >
      <Phone className="h-4 w-4 flex-shrink-0" aria-hidden />
      <span>{label ?? (showNumber ? siteConfig.contact.phone : "Hemen Ara")}</span>
    </Link>
  );
}
