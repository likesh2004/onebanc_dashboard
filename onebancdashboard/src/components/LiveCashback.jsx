export default function LiveCashback({ initial }) {
  return (
    <div className="bg-card border border-line rounded-card px-4 py-3.5 mb-2.5">
      <div className="flex justify-between items-center gap-2.5">
        <div>
          <div className="text-sm font-semibold text-ink">
            ₹<span className="font-mono">{initial}</span> total cashback earned
          </div>
          <div className="text-xs text-muted mt-0.5">
            From UPI Lite offers
          </div>
        </div>
        <div
          className="w-[7px] h-[7px] rounded-full"
          style={{ background: '#1e7a4c' }}
        />
      </div>
    </div>
  );
}
