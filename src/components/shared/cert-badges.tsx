import { ShieldCheck, BadgeCheck, FileText, Award, MapPin, Building2 } from "lucide-react";

const badges = [
  { icon: BadgeCheck, label: "Sağlık Bakanlığı onaylı kaynak" },
  { icon: ShieldCheck, label: "Sigortalı taşıma" },
  { icon: FileText, label: "Analiz raporu" },
  { icon: Award, label: "Hijyen sertifikalı tanker" },
  { icon: MapPin, label: "GPS takipli teslimat" },
  { icon: Building2, label: "Kurumsal faturalı çalışma" },
];

interface CertBadgesProps {
  className?: string;
}

export function CertBadges({ className = "" }: CertBadgesProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
      aria-label="Güven rozetleri"
    >
      {badges.map((b) => (
        <span
          key={b.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-ink-muted shadow-soft"
        >
          <b.icon className="h-3.5 w-3.5 text-brand-600" aria-hidden />
          {b.label}
        </span>
      ))}
    </div>
  );
}
