type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({
  title,
  subtitle,
}: HeroProps) {
  return (
    <header className="space-y-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-400">
        EVENTS INVITATION
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h1>

      <p className="text-lg text-zinc-300">{subtitle}</p>
    </header>
  );
}