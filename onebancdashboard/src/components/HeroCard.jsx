export default function HeroCard({ label, amount, suffix, sub, barFill, accent }) {
  return (
    <div
      className="bg-ink rounded-[20px] px-5 pt-5 pb-[18px] text-[#f4f3ee] mb-3.5 relative overflow-hidden"
      style={{ '--swirl-color': accent }}
    >
      {/* Conic gradient swirl */}
      <div className="hero-swirl absolute inset-0" />

      <div className="relative z-10">
        <div
          className="font-mono text-[11px] tracking-[0.08em] uppercase mb-1.5"
          style={{ color: accent }}
        >
          {label}
        </div>
        <div className="font-serif font-semibold text-[38px] leading-none">
          ₹{amount.toLocaleString('en-IN')}
          {suffix && <span className="text-xl font-medium opacity-70">{suffix}</span>}
        </div>
        <div className="text-[12.5px] text-[#c9c8c0] mt-2">{sub}</div>
        <div className="w-full h-1.5 bg-white/[0.14] rounded-pill mt-3.5 overflow-hidden">
          <div
            className="h-full rounded-pill"
            style={{ width: `${barFill}%`, background: accent }}
          />
        </div>
      </div>
    </div>
  );
}
