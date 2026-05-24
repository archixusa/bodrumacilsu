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
      className="fixed bottom-24 right-4 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elevated transition hover:scale-105 lg:bottom-6 lg:flex"
    >
      <MessageCircle className="h-6 w-6" aria-hidden />
      <span className="sr-only">WhatsApp</span>
    </Link>
  );
}
