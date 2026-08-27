const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'pay', label: 'Pay' },
  { id: 'transactions', label: 'Transactions' },
];
const ACTIVE_COLOR = '#0f8b7d';

export default function PhoneFrame({
  time,
  activeNav = 'home',
  onNavigate,
  children,
}) {
  return (
    <div className="relative w-full max-w-[380px]">
      <div className="w-full bg-paper rounded-phone border-[8px] border-[#16171c] shadow-phone overflow-hidden relative flex flex-col">
        <div className="relative flex justify-between items-center px-5 pt-3.5 pb-1 font-mono text-xs text-ink font-semibold shrink-0">
          <span>{time}</span>
          <img src="data:image/jpeg;base64,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"
                     className="absolute top-1 right-3 w-8 h-8 rounded-full object-cover" alt="Profile logo" />
        </div>
        <div className="relative flex-1">
          {children}
        </div>

        {/* Bottom nav */}
        <div className="flex justify-around py-3 pb-1 border-t border-line mt-1 shrink-0">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate?.(item.id)}
              className={`flex flex-col items-center gap-[3px] text-[9.5px] font-semibold border-none bg-transparent cursor-pointer ${
                activeNav === item.id ? 'text-ink' : 'text-muted'
              }`}
            >
              <div
                className="w-[18px] h-[18px] rounded-[5px]"
                style={{
                  background: activeNav === item.id ? ACTIVE_COLOR : 'currentColor',
                  opacity: activeNav === item.id ? 1 : 0.18,
                }}
              />
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
