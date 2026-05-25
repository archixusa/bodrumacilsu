"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, telLink, waLink } from "@/lib/config";

export function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-8px_24px_-12px_rgba(15,23,42,0.15)] lg:hidden"
      role="navigation"
      aria-label="Hızlı iletişim"
    >
      <Link
        href={telLink()}
        className="flex min-h-[52px] items-center justify-center gap-2 bg-brand-600 font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/40"
        aria-label={`Hemen ara: ${siteConfig.contact.phone}`}
      >
        <Phone className="h-4 w-4" aria-hidden />
        Hemen Ara
      </Link>
      <Link
        href={waLink(
          `Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] items-center justify-center gap-2 bg-whatsapp font-semibold text-white transition-colors hover:bg-[#1FB955] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
        aria-label="WhatsApp'tan yaz"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </Link>
    </div>
  );
}
