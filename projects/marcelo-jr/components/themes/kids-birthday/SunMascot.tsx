export default function SunMascot() {
  return (
    <div className="mascot-sun mx-auto -mb-2 h-20 w-20" aria-hidden="true">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="#f2a65a">
          {Array.from({ length: 12 }).map((_, i) => (
            <rect
              key={i}
              x="47"
              y="0"
              width="6"
              height="18"
              rx="3"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </g>
        <circle cx="50" cy="50" r="30" fill="#f7d774" />
        <circle cx="40" cy="55" r="5" fill="#f2a65a" opacity=".55" />
        <circle cx="60" cy="55" r="5" fill="#f2a65a" opacity=".55" />
        <path
          d="M40 44a3 3 0 0 1 6 0"
          stroke="#4a3f35"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M54 44a3 3 0 0 1 6 0"
          stroke="#4a3f35"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M43 58c3 4 11 4 14 0"
          stroke="#4a3f35"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
