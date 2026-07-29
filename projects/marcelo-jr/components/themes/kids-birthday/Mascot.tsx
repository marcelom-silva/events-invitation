export default function Mascot() {
  const balloons = [
    { cx: 38, color: "#f4645c", delay: "0s" },
    { cx: 62, color: "#ffc94d", delay: "-1.4s" },
    { cx: 50, color: "#5fb4e5", delay: "-2.8s" },
  ];

  return (
    <div className="mascot-float mx-auto -mb-2 h-24 w-24" aria-hidden="true">
      <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg">
        {balloons.map((b) => (
          <g key={b.cx}>
            <line x1={b.cx} y1="60" x2="50" y2="104" stroke="#a99bcb" strokeWidth="1.5" />
            <ellipse cx={b.cx} cy="40" rx="20" ry="24" fill={b.color} />
            <path
              d={`M${b.cx - 4} 62 q4 6 8 0`}
              fill={b.color}
            />
          </g>
        ))}
        <path
          d="M42 100 q8 -6 16 0 q-8 8 -16 0Z"
          fill="#f2a65a"
        />
      </svg>
    </div>
  );
}
