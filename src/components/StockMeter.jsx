export default function StockMeter({ price, min, max }) {
  const pct = (price - min) / (max - min);
  const angle = pct * 180 - 90;

  return (
    <svg className="meter" viewBox="0 0 260 150">
      {/* LOW */}
      <path
        d="M20 130 A110 110 0 0 1 130 20"
        stroke="#ff5c5c"
        strokeWidth="14"
        fill="none"
      />
      {/* HIGH */}
      <path
        d="M130 20 A110 110 0 0 1 240 130"
        stroke="#4cd964"
        strokeWidth="14"
        fill="none"
      />

      {/* NEEDLE */}
      <line
        x1="130"
        y1="130"
        x2="130"
        y2="45"
        stroke="#111"
        strokeWidth="4"
        style={{
          transform: `rotate(${angle}deg)`,
          transformOrigin: "130px 130px",
          transition: "transform 1s ease"
        }}
      />

      <circle cx="130" cy="130" r="6" fill="#111" />

      <text
        x="130"
        y="145"
        textAnchor="middle"
        fontSize="13"
        fill="#444"
      >
        ${price}
      </text>
    </svg>
  );
}
