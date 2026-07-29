"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";
import IconButton from "@/components/ui/IconButton";

type ShareButtonProps = {
  title: string;
  text: string;
  label: string;
};

export default function ShareButton({ title, text, label }: ShareButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const url = typeof window !== "undefined" ? window.location.href : "";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch {
        // usuário cancelou o compartilhamento nativo — não faz nada
      }
      return;
    }

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <IconButton
      icon={copied ? Check : Share2}
      label={copied ? "Copiado!" : label}
      active={copied}
      onClick={handleShare}
    />
  );
}
