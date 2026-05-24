import type { Metadata, Viewport } from "next";
import { display, sans } from "@/styles/fonts";
import { buildMetadata, localBusinessSchema, jsonLdScript } from "@/lib/seo";
import { siteConfig } from "@/lib/config";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTABar } from "@/components/layout/mobile-cta-bar";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CookieBanner } from "@/components/shared/cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata(),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: "Next.js",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans bg-background text-foreground">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <MobileCTABar />
        <WhatsAppButton />
        <CookieBanner />
        <div className="h-16 lg:hidden" aria-hidden />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(localBusinessSchema())}
        />
      </body>
    </html>
  );
}
