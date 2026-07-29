import { ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: LucideIcon;
  label: string;
  active?: boolean;
};

export default function IconButton({
  icon: Icon,
  label,
  active,
  className,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={active}
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 rounded-2xl border p-3.5 transition-all duration-300",
        disabled
          ? "cursor-not-allowed border-black/5 bg-black/5 text-[var(--ink)]/35"
          : active
            ? "border-[var(--sun-orange)]/40 bg-[var(--sun-orange)]/15 text-[var(--sun-orange)] hover:bg-[var(--sun-orange)]/25"
            : "border-white/70 bg-white/60 text-[var(--teal)] hover:-translate-y-0.5 hover:bg-white/90",
        className
      )}
      {...props}
    >
      <Icon size={20} strokeWidth={2.25} />
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
}
