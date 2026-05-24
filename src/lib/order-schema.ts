import { z } from "zod";

export const urgencyOptions = [
  { value: "hemen", label: "Hemen (1-2 saat)" },
  { value: "bugun", label: "Bugün" },
  { value: "yarin", label: "Yarın" },
  { value: "sozlesmeli", label: "Sözleşmeli müşteriyim" },
] as const;

export const waterTypeOptions = [
  { value: "icme", label: "İçme suyu" },
  { value: "kullanma", label: "Kullanma suyu" },
  { value: "havuz", label: "Havuz / bahçe suyu" },
  { value: "insaat", label: "İnşaat suyu" },
] as const;

export const tonnageOptions = [
  { value: "5", label: "5 ton" },
  { value: "10", label: "10 ton" },
  { value: "15", label: "15 ton" },
  { value: "20", label: "20 ton" },
  { value: "30", label: "30 ton" },
  { value: "diger", label: "Diğer / belli değil" },
] as const;

export const districtOptions = [
  "Bodrum Merkez",
  "Yalıkavak",
  "Turgutreis",
  "Gümbet",
  "Bitez",
  "Ortakent",
  "Gündoğan",
  "Türkbükü / Göltürkbükü",
  "Milas Merkez",
  "Güvercinlik",
  "Mumcular",
  "Güllük",
  "Diğer",
] as const;

export const orderSchema = z.object({
  district: z.string().min(2, "İlçe seçin"),
  neighborhood: z.string().min(2, "Mahalle veya site adı gerekli"),
  urgency: z.enum(["hemen", "bugun", "yarin", "sozlesmeli"], {
    message: "Aciliyet seçin",
  }),
  waterType: z.enum(["icme", "kullanma", "havuz", "insaat"], {
    message: "Su tipi seçin",
  }),
  tonnage: z.string().min(1, "Tonaj seçin"),
  notes: z.string().max(500).optional(),
  name: z.string().min(2, "Ad soyad gerekli"),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası girin")
    .regex(/^[0-9+\s()-]+$/i, "Sadece rakam, +, boşluk ve - kullanılabilir"),
  whatsappOk: z.boolean().default(true),
  kvkkAccepted: z
    .boolean()
    .refine((v) => v === true, { message: "KVKK onayı zorunludur" }),
});

export type OrderFormValues = z.input<typeof orderSchema>;
export type OrderFormData = z.output<typeof orderSchema>;

const labelMap = {
  urgency: Object.fromEntries(urgencyOptions.map((o) => [o.value, o.label])),
  waterType: Object.fromEntries(waterTypeOptions.map((o) => [o.value, o.label])),
  tonnage: Object.fromEntries(tonnageOptions.map((o) => [o.value, o.label])),
};

export function formatOrderForWhatsApp(data: OrderFormData) {
  return [
    `🚨 *YENİ SİPARİŞ — ${data.name}*`,
    "",
    `📍 *Bölge:* ${data.district}`,
    `🏘️ *Mahalle/Site:* ${data.neighborhood}`,
    `⚡ *Aciliyet:* ${labelMap.urgency[data.urgency]}`,
    `💧 *Su tipi:* ${labelMap.waterType[data.waterType]}`,
    `🛢️ *Tonaj:* ${labelMap.tonnage[data.tonnage] ?? data.tonnage}`,
    "",
    `👤 *Ad Soyad:* ${data.name}`,
    `📞 *Telefon:* ${data.phone}`,
    `💬 *WhatsApp:* ${data.whatsappOk ? "Evet" : "Hayır"}`,
    "",
    data.notes ? `📝 *Notlar:* ${data.notes}` : "📝 *Notlar:* —",
    "",
    "KVKK onayı verildi.",
  ].join("\n");
}
