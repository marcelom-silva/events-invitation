import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";

type ConfirmPresenceButtonProps = {
  href: string;
  label: string;
};

export default function ConfirmPresenceButton({
  href,
  label,
}: ConfirmPresenceButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3.5 transition-all duration-300",
        "border-[var(--balloon-red)]/30 bg-[var(--balloon-red)]/12 text-[var(--balloon-red)]",
        "hover:-translate-y-0.5 hover:bg-[var(--balloon-red)]/22"
      )}
    >
      <CheckCircle2 size={20} strokeWidth={2.25} />
      <span className="text-xs font-semibold">{label}</span>
    </a>
  );
}
