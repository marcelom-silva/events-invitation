export default function Background() {
  return (
    <div className="sky-decor" aria-hidden="true">
      <CloudShape className="cloud cloud-a" />
      <CloudShape className="cloud cloud-b" />
      <CloudShape className="cloud cloud-c" />
      <RainbowShape className="absolute -bottom-6 -left-10 w-64 opacity-90" />
    </div>
  );
}

function CloudShape({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 70c-16 0-28-12-28-27 0-13 10-24 23-26C39 7 51 0 65 0c17 0 31 12 34 28 13 2 23 13 23 27 0 15-13 27-29 27H40Z"
        fill="#ffffff"
        opacity="0.85"
      />
    </svg>
  );
}

function RainbowShape({ className }: { className?: string }) {
  const bands = ["#f2a65a", "#f7d774", "#8ec9a1", "#7fb8c9", "#a99bcb"];

  return (
    <svg viewBox="0 0 200 100" className={className} xmlns="http://www.w3.org/2000/svg">
      {bands.map((color, i) => {
        const r = 90 - i * 14;
        return (
          <path
            key={color}
            d={`M ${100 - r} 100 A ${r} ${r} 0 0 1 ${100 + r} 100`}
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
        );
      })}
    </svg>
  );
}
