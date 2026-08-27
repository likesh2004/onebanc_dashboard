export default function GridElements({ actions, onAction }) {
  return (
    <div className="flex gap-2 mt-3.5">
      {actions.map((a, i) => (
        <button
          key={i}
          onClick={() => onAction?.(a.toast)}
          className="flex-1 bg-card border border-line rounded-[14px] py-3 px-1.5 text-center text-[11px] font-semibold text-ink cursor-pointer transition-transform duration-[120ms] active:scale-[0.95] hover:brightness-[0.97]"
        >
          <span className="text-[17px] block mb-[5px]">{a.icon}</span>
          {a.label}
        </button>
      ))}
    </div>
  );
}
