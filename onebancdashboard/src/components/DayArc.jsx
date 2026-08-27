export default function DayArc({ gradientId, gradientStops, markerCx, markerCy, accent }) {
  return (
    <div>
      <svg className="w-full h-[52px]" viewBox="0 0 300 60">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
            {gradientStops.map((stop) => <stop key={stop.offset} {...stop} stopColor={stop.color} />)}
          </linearGradient>
        </defs>
        <path d="M10,50 Q150,-10 290,50" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx={markerCx} cy={markerCy} r="6" fill={accent} stroke="#fff" strokeWidth="2" />
      </svg>
      <div className="flex justify-between font-mono text-[10px] text-muted tracking-[0.06em] -mt-1.5">
        <span>Dawn</span>
        <span>Noon</span>
        <span>Dusk</span>
      </div>
    </div>
  );
}
