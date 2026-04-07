export default function OrthodoxCross({ size = 24, color = "#C5A55A" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size * 1.33} viewBox="0 0 24 32" fill="none">
      <rect x="10" y="0" width="4" height="32" fill={color} rx="0.5" />
      <rect x="4" y="6" width="16" height="3" fill={color} rx="0.5" />
      <rect x="6" y="22" width="12" height="2.5" fill={color} rx="0.5" transform="rotate(-15 12 23)" />
    </svg>
  );
}
