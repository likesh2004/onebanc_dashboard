export default function TransactionList({ transactions, accentSoft }) {
  if (!transactions?.length) return null;
  return (
    <div className="bg-card border border-line rounded-card px-4 py-3.5 mb-2.5">
      <div className="text-[11px] font-semibold uppercase text-muted mb-2">Today&apos;s transactions</div>
      {transactions.map((tx) => <div key={`${tx.name}-${tx.time}`} className="flex items-center gap-2.5 py-2 border-b border-line last:border-0">
        <span className="w-8 h-8 rounded-[10px] flex items-center justify-center text-sm" style={{ background: accentSoft }}>{tx.icon}</span>
        <span className="flex-1 text-[13px] font-semibold text-ink">{tx.name}<small className="block text-[11px] font-normal text-muted">{tx.time}</small></span>
        <span className="font-mono text-[13px] font-semibold text-ink">{tx.amount}</span>
      </div>)}
    </div>
  );
}
