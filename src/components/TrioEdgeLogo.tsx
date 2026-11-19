type Props = { variant?: "dark" | "light"; showWordmark?: boolean; className?: string };

export default function TrioEdgeLogo({ variant = "dark", showWordmark = true, className = "" }: Props) {
  const ink = variant === "light" ? "#0A1B30" : "#FFFFFF";
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Trio-Edge Consultancy">
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden="true">
        <path data-draw-path d="M8 5H38L32 14H14Z" stroke="#BA964D" strokeWidth="1.5" fill="#BA964D" fillOpacity="0" />
        <path data-draw-path d="M14 14H23V41L8 27Z" stroke="#BA964D" strokeWidth="1.5" fill="#BA964D" fillOpacity="0" />
        <path data-draw-path d="M23 14H32L38 27L23 41Z" stroke={ink} strokeWidth="1.5" fill={ink} fillOpacity="0" />
      </svg>
      {showWordmark && (
        <div className="leading-none">
          <div className="text-[22px] font-bold tracking-[-0.04em]" style={{ color: ink }}>
            Trio-Edge
          </div>
          <div className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-primary">
            CONSULTANCY
          </div>
          <div className="mt-1 text-[6px] tracking-[0.32em]" style={{ color: ink }}>STRATEGY. CLARITY. EDGE.</div>
        </div>
      )}
    </div>
  );
}
