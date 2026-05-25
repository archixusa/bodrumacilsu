"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import {
  orderSchema,
  type OrderFormValues,
  type OrderFormData,
  formatOrderForWhatsApp,
  urgencyOptions,
  waterTypeOptions,
  tonnageOptions,
  districtOptions,
} from "@/lib/order-schema";
import { siteConfig, telLink, waLink } from "@/lib/config";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

const stepMeta: Record<Step, { title: string; description: string }> = {
  1: {
    title: "Konum & aciliyet",
    description: "Hangi bölgede ve ne kadar acele lazım?",
  },
  2: {
    title: "Sipariş detayı",
    description: "Su tipi ve tonajı seçin.",
  },
  3: {
    title: "İletişim bilgisi",
    description: "Size hızlıca dönüş yapabilmemiz için.",
  },
};

const stepFields: Record<Step, (keyof OrderFormData)[]> = {
  1: ["district", "neighborhood", "urgency"],
  2: ["waterType", "tonnage", "notes"],
  3: ["name", "phone", "whatsappOk", "kvkkAccepted"],
};

export function OrderForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    mode: "onBlur",
    defaultValues: {
      district: "",
      neighborhood: "",
      urgency: undefined,
      waterType: undefined,
      tonnage: "",
      notes: "",
      name: "",
      phone: "",
      whatsappOk: true,
      kvkkAccepted: false,
    },
  });

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = form;

  const urgency = watch("urgency");
  const waterType = watch("waterType");
  const tonnage = watch("tonnage");
  const whatsappOk = watch("whatsappOk");

  const goNext = async () => {
    const valid = await trigger(stepFields[step]);
    if (valid && step < 3) setStep((step + 1) as Step);
  };

  const onSubmit = (data: OrderFormValues) => {
    const message = formatOrderForWhatsApp(data as OrderFormData);
    if (typeof window !== "undefined") {
      window.location.href = waLink(message);
      setTimeout(() => {
        router.push("/tesekkur");
      }, 600);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <StepProgress step={step} />

        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Adım {step} / 3
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {stepMeta[step].title}
          </h2>
          <p className="text-sm text-ink-muted">{stepMeta[step].description}</p>
        </div>

        <div className="space-y-5">
          {step === 1 && (
            <>
              <Field label="İlçe" error={errors.district?.message}>
                <select
                  {...register("district")}
                  className="form-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Seçin
                  </option>
                  {districtOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </Field>

              <Field
                label="Mahalle / site adı"
                error={errors.neighborhood?.message}
              >
                <input
                  type="text"
                  placeholder="Örn. Geriş, Tilkicik Marina, ABC Sitesi"
                  {...register("neighborhood")}
                  className="form-input"
                />
              </Field>

              <Field label="Aciliyet" error={errors.urgency?.message}>
                <div className="grid gap-2 sm:grid-cols-2">
                  {urgencyOptions.map((opt) => (
                    <ChoiceButton
                      key={opt.value}
                      selected={urgency === opt.value}
                      onClick={() =>
                        setValue("urgency", opt.value, { shouldValidate: true })
                      }
                      label={opt.label}
                    />
                  ))}
                </div>
              </Field>
            </>
          )}

          {step === 2 && (
            <>
              <Field label="Su tipi" error={errors.waterType?.message}>
                <div className="grid gap-2 sm:grid-cols-2">
                  {waterTypeOptions.map((opt) => (
                    <ChoiceButton
                      key={opt.value}
                      selected={waterType === opt.value}
                      onClick={() =>
                        setValue("waterType", opt.value, {
                          shouldValidate: true,
                        })
                      }
                      label={opt.label}
                    />
                  ))}
                </div>
              </Field>

              <Field label="Tonaj" error={errors.tonnage?.message}>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {tonnageOptions.map((opt) => (
                    <ChoiceButton
                      key={opt.value}
                      selected={tonnage === opt.value}
                      onClick={() =>
                        setValue("tonnage", opt.value, {
                          shouldValidate: true,
                        })
                      }
                      label={opt.label}
                    />
                  ))}
                </div>
              </Field>

              <Field
                label="Notlar (opsiyonel)"
                error={errors.notes?.message}
                hint="Site giriş şifresi, depo konumu, özel istek vb."
              >
                <textarea
                  rows={3}
                  placeholder="Örn. Depo zemin katta, kapı şifresi 1234"
                  {...register("notes")}
                  className="form-input resize-none"
                />
              </Field>
            </>
          )}

          {step === 3 && (
            <>
              <Field label="Ad soyad" error={errors.name?.message}>
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Adınız Soyadınız"
                  {...register("name")}
                  className="form-input"
                />
              </Field>

              <Field label="Telefon" error={errors.phone?.message}>
                <input
                  type="tel"
                  autoComplete="tel"
                  placeholder="+90 5XX XXX XX XX"
                  {...register("phone")}
                  className="form-input"
                />
              </Field>

              <div className="space-y-3 rounded-2xl border border-slate-200 bg-surface-tint p-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={!!whatsappOk}
                    onChange={(e) =>
                      setValue("whatsappOk", e.target.checked, {
                        shouldValidate: true,
                      })
                    }
                    className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="text-sm text-ink">
                    WhatsApp&apos;tan da dönüş yapılabilir
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    {...register("kvkkAccepted")}
                    className="mt-1 h-4 w-4 cursor-pointer rounded border-slate-300 text-brand-600 focus:ring-brand-500"
                  />
                  <span className="text-sm text-ink">
                    <Link
                      href="/kvkk"
                      target="_blank"
                      className="font-semibold text-brand-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/35"
                    >
                      KVKK aydınlatma metnini
                    </Link>{" "}
                    okudum, sipariş için telefon ve adres bilgilerimin işlenmesini onaylıyorum.
                  </span>
                </label>
                {errors.kvkkAccepted && (
                  <p className="text-xs font-medium text-red-600">
                    {errors.kvkkAccepted.message}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setStep((Math.max(1, step - 1) as Step))}
            disabled={step === 1}
            className={cn(
              "inline-flex h-12 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 font-semibold text-ink transition-colors duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25",
              step === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:border-brand-300 hover:bg-brand-50",
            )}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> Geri
          </button>

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 font-semibold text-white shadow-card transition-colors duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
            >
              Devam <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent2-500 px-6 font-semibold text-white shadow-card transition-colors duration-200 hover:bg-accent2-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent2-500/35 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <MessageCircle className="h-4 w-4" aria-hidden /> Siparişi gönder — 5 dakikada arıyoruz
            </button>
          )}
        </div>
      </form>

      <aside className="space-y-6 lg:sticky lg:top-24">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
            Acelesi var
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-ink">
            Direkt arayın
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Form doldurmak yerine telefonla anlık iletişim — 30 saniyede fiyat.
          </p>
          <Link
            href={telLink()}
            className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-brand-600 font-semibold text-white transition-colors duration-200 hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/35"
          >
            <Phone className="h-4 w-4" aria-hidden /> {siteConfig.contact.phone}
          </Link>
          <Link
            href={waLink(
              `Merhaba, ${siteConfig.shortName} için sipariş vermek istiyorum.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-whatsapp font-semibold text-white transition-colors duration-200 hover:bg-[#1FB955] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40"
          >
            <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp&apos;tan yaz
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-surface-tint p-6 text-sm text-ink-muted">
          <p className="font-display text-base font-semibold text-ink">
            Form sonrası ne olur?
          </p>
          <ol className="mt-3 space-y-2 list-decimal pl-5 text-sm leading-relaxed">
            <li>
              WhatsApp&apos;tan size formatlanmış sipariş özetinizi gönderiyoruz.
            </li>
            <li>Operatörümüz 5 dakika içinde sizi arar.</li>
            <li>Net fiyat ve teslim saatini kapı önünde teyit ederiz.</li>
          </ol>
        </div>
      </aside>
    </div>
  );
}

function StepProgress({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-3" aria-label="Form ilerlemesi">
      {[1, 2, 3].map((n) => (
        <div key={n} className="flex flex-1 items-center gap-3">
          <span
            className={cn(
              "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-200",
              step >= n
                ? "bg-brand-600 text-white shadow-card"
                : "border border-slate-200 bg-white text-ink-soft",
            )}
            aria-current={step === n ? "step" : undefined}
          >
            {step > n ? <Check className="h-4 w-4" aria-hidden /> : n}
          </span>
          {n < 3 && (
            <span
              className={cn(
                "h-px flex-1 transition-colors duration-200",
                step > n ? "bg-brand-600" : "bg-slate-200",
              )}
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
}

function Field({
  label,
  error,
  hint,
  children,
}: {
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="block text-sm font-semibold text-ink">{label}</span>
      {children}
      {hint && !error && (
        <span className="block text-xs text-ink-muted">{hint}</span>
      )}
      {error && (
        <span className="block text-xs font-medium text-red-600">{error}</span>
      )}
    </label>
  );
}

function ChoiceButton({
  selected,
  onClick,
  label,
}: {
  selected: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border px-4 py-3 text-sm font-semibold transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/25",
        selected
          ? "border-brand-500 bg-brand-50 text-brand-700"
          : "border-slate-200 bg-white text-ink hover:border-brand-300",
      )}
      aria-pressed={selected}
    >
      {label}
    </button>
  );
}
