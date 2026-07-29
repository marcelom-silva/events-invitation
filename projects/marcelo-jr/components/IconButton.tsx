import { ButtonHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: LucideIcon;
  label: string;
};

export default function IconButton({
  icon: Icon,
  label,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "flex flex-col items-center justify-center gap-2",
        "rounded-2xl border border-white/10",
        "bg-white/5 p-4",
        "text-white",
        "transition-all duration-300",
        "hover:border-white/20",
        "hover:bg-white/10",
        className
      )}
    >
      <Icon size={22} strokeWidth={2.25} />

      <span className="text-sm font-medium">
        {label}
      </span>
    </button>
  );
}