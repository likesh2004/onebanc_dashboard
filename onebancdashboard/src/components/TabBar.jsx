const TAB_COLORS = {
  subah: 'bg-tab-morning text-[#161616]',
  dopahar: 'bg-tab-midday text-[#161616]',
  shaam: 'bg-tab-evening text-[#161616]',
};
const LABELS = {
  subah: '9:00 AM',
  dopahar: '2:00 PM',
  shaam: '5:00 PM',
};
const TABS = ['subah', 'dopahar', 'shaam'];
export default function TabBar({ prop1, prop2 }) {
  return (
    <div className="flex gap-2 bg-[#1b1c22] p-1.5 rounded-pill mb-7">
      {TABS.map((tab) => {
        let color;

        if (prop1 === tab) {
          color = TAB_COLORS[tab];
        } else {
          color = 'bg-transparent text-[#8b8d95]';
        }
        return (
          <button
            key={tab}
            onClick={() => prop2(tab)}
            className={`font-mono text-[13px] font-medium tracking-[0.02em] px-[18px] py-2.5 rounded-pill border-none cursor-pointer transition-all duration-[250ms] ${color}`}
          >
            {LABELS[tab]}
          </button>
        );
      })}
    </div>
  );
}
