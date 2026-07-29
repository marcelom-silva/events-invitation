import { MapPin } from "lucide-react";
import { cn } from "@/lib/cn";

type MapsButtonProps = {
  href: string;
  label: string;
};

export default function MapsButton({ href, label }: MapsButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3.5 transition-all duration-300",
        "border-white/70 bg-white/60 text-[var(--teal)] hover:-translate-y-0.5 hover:bg-white/90"
      )}
    >
      <MapPin size={20} strokeWidth={2.25} />
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}
