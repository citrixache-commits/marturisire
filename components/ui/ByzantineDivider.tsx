export default function ByzantineDivider({ color = "#C5A55A", opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <div className="flex items-center justify-center gap-3 my-4" style={{ opacity }}>
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        {/* Central ornament: small cross with dot pattern */}
        <circle cx="12" cy="12" r="1.2" fill={color} />
        <rect x="11.3" y="4" width="1.4" height="16" fill={color} rx="0.2" />
        <rect x="7" y="7.3" width="10" height="1.4" fill={color} rx="0.2" />
        <rect x="8" y="16" width="8" height="1" fill={color} rx="0.2" transform="rotate(-12 12 16.5)" />
        {/* Decorative dots */}
        <circle cx="4" cy="12" r="0.8" fill={color} opacity="0.6" />
        <circle cx="20" cy="12" r="0.8" fill={color} opacity="0.6" />
      </svg>
      <div
        className="h-px flex-1"
        style={{
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        }}
      />
    </div>
  );
}
