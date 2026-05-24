import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig, telLink } from "@/lib/config";
import { cn } from "@/lib/utils";

interface CallButtonProps {
  variant?: "primary" | "ghost" | "coral";
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
  label?: string;
}

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-base",
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
      "bg-deep-blue text-white hover:bg-deep-blue/90 shadow-soft",
    coral: "bg-coral text-white hover:bg-coral/90 shadow-soft",
    ghost:
      "bg-white text-deep-blue border border-deep-blue/15 hover:border-deep-blue/40",
  } as const;

  return (
    <Link
      href={telLink()}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all",
        variants[variant],
        sizes[size],
        className,
      )}
      aria-label="Hemen ara"
    >
      <Phone className="h-4 w-4" aria-hidden />
      {label ?? (showNumber ? siteConfig.contact.phone : "Hemen Ara")}
    </Link>
  );
}
