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
  sm: "h-11 px-4 text-sm gap-1.5",
  md: "h-12 px-5 text-base gap-2",
  lg: "h-14 px-6 text-base gap-2.5",
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
      "bg-whatsapp text-white hover:bg-[#1FB955] shadow-card focus-visible:ring-whatsapp/40",
    outline:
      "border border-whatsapp/30 bg-white text-whatsapp hover:bg-whatsapp/10 focus-visible:ring-whatsapp/30",
  } as const;

  return (
    <Link
      href={waLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4",
        variants[variant],
        sizes[size],
        className,
      )}
      aria-label="WhatsApp'tan yaz"
    >
      <MessageCircle className="h-4 w-4 flex-shrink-0" aria-hidden />
      <span>{label}</span>
    </Link>
  );
}
