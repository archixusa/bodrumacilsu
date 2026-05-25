"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig, waLink } from "@/lib/config";

export function WhatsAppButton() {
  return (
    <Link
      href={waLink(
        `Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp'tan yaz"
      className="group fixed bottom-6 right-4 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elevated transition-colors duration-200 hover:bg-[#1FB955] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 lg:flex"
    >
      <span
        className="absolute inset-0 rounded-full bg-whatsapp/40 animate-pulse-ring"
        aria-hidden
      />
      <MessageCircle className="relative h-6 w-6" aria-hidden />
      <span className="sr-only">WhatsApp</span>
    </Link>
  );
}
