"use client";

import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, telLink, waLink } from "@/lib/config";

export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-deep-blue/10 bg-white shadow-[0_-8px_24px_-12px_rgba(10,37,64,0.18)] lg:hidden">
      <Link
        href={telLink()}
        className="flex items-center justify-center gap-2 bg-deep-blue py-3.5 font-semibold text-white"
        aria-label="Hemen ara"
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
        className="flex items-center justify-center gap-2 bg-whatsapp py-3.5 font-semibold text-white"
        aria-label="WhatsApp'tan yaz"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </Link>
    </div>
  );
}
