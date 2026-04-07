interface Props {
  position: "tl" | "tr" | "bl" | "br";
  color?: string;
  size?: number;
  opacity?: number;
}

export default function CornerFlourish({ position, color = "#C5A55A", size = 32, opacity = 0.4 }: Props) {
  const rotations = { tl: 0, tr: 90, br: 180, bl: 270 };
  const positions = {
    tl: { top: 8, left: 8 },
    tr: { top: 8, right: 8 },
    bl: { bottom: 8, left: 8 },
    br: { bottom: 8, right: 8 },
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className="absolute pointer-events-none select-none"
      style={{ ...positions[position], opacity, transform: `rotate(${rotations[position]}deg)` }}
    >
      {/* L-shaped corner flourish with curl */}
      <path
        d="M 2 2 L 2 14 M 2 2 L 14 2"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 2 10 Q 6 10 6 6 Q 6 2 10 2"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.8"
      />
      <circle cx="6" cy="6" r="1" fill={color} opacity="0.6" />
    </svg>
  );
}
