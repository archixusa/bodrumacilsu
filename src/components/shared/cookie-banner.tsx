"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "bas-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = (value: "all" | "essential") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed inset-x-3 bottom-20 z-50 rounded-2xl border border-slate-200 bg-white p-4 shadow-floating sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md lg:bottom-6"
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
          <Cookie className="h-4 w-4" aria-hidden />
        </span>
        <div className="flex-1 text-sm leading-relaxed text-ink">
          Sitemizde size daha iyi hizmet sunmak için çerezler kullanıyoruz. Detaylar için{" "}
          <Link
            href="/cerez-politikasi"
            className="font-semibold text-brand-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/35"
          >
            Çerez Politikamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </div>
        <button
          type="button"
          onClick={() => accept("essential")}
          className="rounded-md p-1 text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
          aria-label="Kapat"
        >
          <X className="h-4 w-4" aria-hidden />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => accept("all")}
          className="flex-1 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
        >
          Kabul et
        </button>
        <button
          type="button"
          onClick={() => accept("essential")}
          className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-300 hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25"
        >
          Sadece gerekli
        </button>
      </div>
    </div>
  );
}
