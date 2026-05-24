import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/config";
import { cn } from "@/lib/utils";

interface WhatsAppLinkProps {
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
  variant?: "filled" | "outline";
}

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-base",
  lg: "h-14 px-6 text-base",
};

export function WhatsAppLink({
  text,
  className,
  size = "md",
  label = "WhatsApp'tan Yaz",
  variant = "filled",
}: WhatsAppLinkProps) {
  const variants = {
    filled:
      "bg-whatsapp text-white hover:bg-whatsapp/90 shadow-soft",
    outline:
      "border border-whatsapp/40 text-whatsapp hover:bg-whatsapp/10",
  } as const;

  return (
    <Link
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all",
        variants[variant],
        sizes[size],
        className,
      )}
      aria-label="WhatsApp'tan yaz"
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {label}
    </Link>
  );
}
