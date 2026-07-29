export default function Background() {
  const confetti = [
    { top: "12%", left: "18%", color: "#f4645c", delay: "0s" },
    { top: "22%", left: "78%", color: "#ffc94d", delay: "-2s" },
    { top: "38%", left: "8%", color: "#5fb4e5", delay: "-4s" },
    { top: "55%", left: "88%", color: "#6fd6a0", delay: "-1s" },
    { top: "70%", left: "22%", color: "#b18ce0", delay: "-3s" },
    { top: "82%", left: "70%", color: "#f4645c", delay: "-5s" },
  ];

  return (
    <div className="sky-decor" aria-hidden="true">
      <CloudShape className="cloud cloud-a" />
      <CloudShape className="cloud cloud-b" />
      <CloudShape className="cloud cloud-c" />
      <RainbowShape className="absolute -bottom-6 -left-10 w-64 opacity-90" />

      {confetti.map((c, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            top: c.top,
            left: c.left,
            backgroundColor: c.color,
            animationDelay: c.delay,
          }}
        />
      ))}
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
  const bands = ["#f4645c", "#ffc94d", "#6fd6a0", "#5fb4e5", "#b18ce0"];

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
