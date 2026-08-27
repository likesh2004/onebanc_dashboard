export default function BillOfferRewardCard({ title, icon, main, sub, actionLabel, tag, onAction, accent }) {
  return (
    <div className="bg-card border border-line rounded-card px-4 py-3.5 mb-2.5">
      {title && <div className="text-[11px] font-semibold tracking-[0.04em] uppercase text-muted mb-2 flex items-center gap-1.5">{title}</div>}
      <div className="flex justify-between items-center gap-2.5">
        <div>
          <div className="text-sm font-semibold text-ink">{icon} {main}</div>
          {sub && <div className="text-xs text-muted mt-0.5">{sub}</div>}
        </div>
        {actionLabel && <button onClick={onAction} className="font-sans text-xs font-semibold border-none rounded-pill py-2 px-3.5 cursor-pointer whitespace-nowrap" style={{ background: accent, color: '#161616' }}>{actionLabel}</button>}
        {tag && <span className="inline-block font-mono text-[10px] py-[3px] px-2 rounded-md font-semibold text-ink" style={{ background: `${accent}33` }}>{tag}</span>}
      </div>
    </div>
  );
}
