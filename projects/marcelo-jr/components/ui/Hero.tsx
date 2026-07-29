type HeroProps = {
  title: string;
  subtitle: string;
};

export default function Hero({ title, subtitle }: HeroProps) {
  return (
    <header className="space-y-1 text-center">
      <h1 className="font-display text-5xl leading-none text-[var(--balloon-red)] md:text-6xl">
        {title}
      </h1>
      <p className="font-display text-2xl text-[var(--teal)] md:text-3xl">
        {subtitle}
      </p>
    </header>
  );
}
