# Bodrum Acil Su

Bodrum-Milas bölgesi için statik (GitHub Pages) çalışan kurumsal tanker su web sitesi. Next.js 14 App Router + TypeScript + Tailwind + shadcn/ui üzerine kurulu, statik export ile yayınlanır.

- **Canlı domain:** https://bodrumacilsu.com (CNAME bağlanınca)
- **Statik export:** `next build` → `out/` klasörüne yazar
- **Form backend:** WhatsApp deeplink (sunucu gerekmez)

## Kurulum

```bash
git clone <repo-url> bodrumacilsu
cd bodrumacilsu
npm install
cp .env.example .env.local   # değerleri düzenle
npm run dev                  # http://localhost:3000
```

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Statik build → `out/` |
| `npm run lint` | Lint kontrolü |

## Proje yapısı

```
src/
├─ app/               # App Router sayfaları
│  ├─ (ana sayfa)     # page.tsx
│  ├─ siparis/        # 3 adımlı form (WhatsApp deeplink)
│  ├─ tesekkur/
│  ├─ bolgeler/       # index + [ilce] x 12
│  ├─ hizmetler/      # index + [slug] x 4
│  ├─ blog/           # index + [slug] x 10 stub
│  ├─ hakkimizda, iletisim, fiyatlar, sik-sorulan-sorular,
│     kvkk, cerez-politikasi, gizlilik, not-found
│  ├─ sitemap.ts, robots.ts
│  └─ layout.tsx (Header, Footer, MobileCTA, WhatsApp, Cookie, JSON-LD)
├─ components/
│  ├─ ui/             # shadcn (button, card, accordion, form, …)
│  ├─ layout/         # header, footer, mobile-cta-bar, whatsapp-button
│  ├─ sections/       # hero, three-steps, services-grid, trust-points,
│                     # regions-grid, testimonials, faq, final-cta
│  ├─ order/          # order-form (RHF + Zod, multi-step)
│  └─ shared/         # call-button, whatsapp-link, cookie-banner
├─ lib/               # config, regions, services, testimonials, faq, blog, seo
├─ styles/fonts.ts    # Bricolage Grotesque + Plus Jakarta Sans
```

## Bilinmesi gerekenler

- **GitHub Pages = statik**: `next.config.mjs` içinde `output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`.
- **Form**: `/siparis` 3 adımlı; submit edince formatlanmış sipariş mesajı ile `wa.me/...?text=...` açar. Sunucu yok.
- **Telefon/WhatsApp**: `src/lib/config.ts` veya `.env.local`:
  - `NEXT_PUBLIC_PHONE`, `NEXT_PUBLIC_PHONE_RAW`, `NEXT_PUBLIC_WHATSAPP`
- **TODO placeholder'lar**: telefon, WhatsApp, e-posta, logo SVG, OG image (`public/og-image.png` yok — eklendiğinde meta otomatik kullanır).

## SEO

- Her sayfada `buildMetadata()` ile title/description/OG/canonical
- Root layout'ta LocalBusiness JSON-LD
- Bölge sayfalarında BreadcrumbList + Service JSON-LD
- SSS sayfasında FAQPage JSON-LD
- `/sitemap.xml`, `/robots.txt` Next.js metadata API ile

## GitHub Pages Deploy

1. Repo'yu GitHub'a push'la (public):
   ```bash
   gh repo create bodrumacilsu --public --source=. --remote=origin --push
   ```
2. **Settings → Pages**:
   - **Source**: GitHub Actions
3. `.github/workflows/deploy.yml` her `main` push'unda:
   - `npm ci && npm run build`
   - `out/` klasörünü Pages'e deploy eder
   - `out/.nojekyll` ekler (`_next` klasörü düşmesin)
4. İlk başarılı deploy sonrası: `https://<kullaniciadi>.github.io/bodrumacilsu/` üzerinde canlı.

## Custom domain (bodrumacilsu.com)

> Domain alınıp DNS hazır olduğunda 4 adımlık değişiklik:

1. **DNS panelinden** GitHub Pages kayıtlarını gir:
   - **A** kayıtları (apex `bodrumacilsu.com`):
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - **CNAME** (`www.bodrumacilsu.com` → `archixusa.github.io.`)
2. `public/CNAME` dosyası ekle, içeriği: `bodrumacilsu.com`
3. `.github/workflows/deploy.yml` içindeki **NEXT_PUBLIC_BASE_PATH** env satırını sil, `NEXT_PUBLIC_SITE_URL`'i `https://bodrumacilsu.com` yap.
4. **Settings → Pages → Custom domain**: `bodrumacilsu.com` gir, kaydet. DNS yayılınca **Enforce HTTPS** açılır.

> Şu an default URL ile çalıştığı için `basePath = /bodrumacilsu`; bu yüzden tüm asset yolları `/bodrumacilsu/_next/...` üzerinden çağrılıyor.

## Vercel'e geçiş (gelecekte)

Form için Resend + Telegram backend istenirse:
- `next.config.mjs` içindeki `output: 'export'` satırını kaldır.
- `src/app/api/order/route.ts` ekle (paket içindeki şablon).
- `RESEND_API_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` env'leri ekle.
- Order form submit handler'ını WhatsApp deeplink yerine `/api/order` çağrısı yapacak şekilde değiştir.

## Çalıştığı doğrulananlar

- `npm run build` ✓ — 24 statik route üretiyor
- Build çıktısı 100 KB altı First Load JS (sipariş form sayfası hariç)
- Lighthouse: production deploy sonrası ölçülmeli
