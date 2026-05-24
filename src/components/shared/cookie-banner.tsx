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
    <div className="fixed inset-x-3 bottom-20 z-50 rounded-2xl border border-deep-blue/10 bg-white p-4 shadow-elevated sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-md lg:bottom-6">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-sand text-deep-blue">
          <Cookie className="h-4 w-4" />
        </span>
        <div className="flex-1 text-sm leading-relaxed text-deep-blue/85">
          Sitemizde size daha iyi hizmet sunmak için çerezler kullanıyoruz. Detaylar için{" "}
          <Link
            href="/cerez-politikasi"
            className="font-semibold text-ocean underline-offset-2 hover:underline"
          >
            Çerez Politikamızı
          </Link>{" "}
          inceleyebilirsiniz.
        </div>
        <button
          type="button"
          onClick={() => accept("essential")}
          className="text-deep-blue/40 hover:text-deep-blue"
          aria-label="Kapat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => accept("all")}
          className="flex-1 rounded-xl bg-deep-blue px-4 py-2.5 text-sm font-semibold text-white hover:bg-deep-blue/90"
        >
          Kabul Et
        </button>
        <button
          type="button"
          onClick={() => accept("essential")}
          className="flex-1 rounded-xl border border-deep-blue/15 px-4 py-2.5 text-sm font-semibold text-deep-blue hover:border-deep-blue/30"
        >
          Sadece Gerekli
        </button>
      </div>
    </div>
  );
}
