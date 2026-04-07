export default function CandleSVG({ lit = true, size = 40 }: { lit?: boolean; size?: number }) {
  const h = size * 1.5;
  return (
    <svg width={size} height={h} viewBox="0 0 40 60">
      {lit && (
        <>
          <ellipse cx="20" cy="12" rx="6" ry="10" fill="#FFD700" opacity="0.3">
            <animate attributeName="ry" values="10;12;10" dur="2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="20" cy="14" rx="3" ry="7" fill="#FFA500" opacity="0.6">
            <animate attributeName="ry" values="7;8;7" dur="1.5s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="20" cy="16" rx="1.5" ry="4" fill="#FFFF00" opacity="0.9">
            <animate attributeName="ry" values="4;5;4" dur="1s" repeatCount="indefinite" />
          </ellipse>
        </>
      )}
      <rect x="18" y="20" width="4" height="35" fill="#E8E0D0" rx="1" />
      <rect x="17" y="53" width="6" height="4" fill="#C5A55A" rx="1" />
    </svg>
  );
}
