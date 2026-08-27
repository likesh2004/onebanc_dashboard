import DayArc from './DayArc';
import HeroCard from './HeroCard';
import BillOfferRewardCard from './BillOfferRewardCard';
import GridElements from './GridElements';

export default function MorningScreen({ data }) {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

  return (
    <div className="px-5 py-1.5 pb-6 animate-screenIn">
      {/* Header */}
      <div className="py-1.5 pb-3.5">
        <div className="flex justify-between items-start mb-2.5">
          <div>
            <h2 className="font-serif font-semibold text-[21px] text-ink">{data.greeting}</h2>
            <div className="text-[12.5px] text-muted mt-0.5 flex items-center gap-1.5">
              {today} ·
              {data.subtext}
            </div>
          </div>
          <div
            className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-serif font-semibold text-sm text-[#161616] shrink-0"
            style={{ background: data.accent }}
          >
            L
          </div>
        </div>
        <DayArc
          gradientId="gradM"
          gradientStops={data.arcGradient}
          markerCx={data.arcPosition.cx}
          markerCy={data.arcPosition.cy}
          accent={data.accent}
        />
      </div>

      {/* Hero */}
      <HeroCard
        label={data.hero.label}
        amount={data.hero.amount}
        suffix={data.hero.suffix}
        sub={data.hero.sub}
        barFill={data.hero.barFill}
        accent={data.accent}
      />

      {/* Cards */}
      {data.cards.map((card, i) => (
        <BillOfferRewardCard
          key={i}
          title={card.title}
          icon={card.icon}
          main={card.main}
          sub={card.sub}
          actionLabel={card.actionLabel}
          tag={card.tag}
          accent={data.accent}
        />
      ))}

      {/* Quick Actions */}
      <GridElements
        actions={data.quickActions}
        accentSoft={data.accentSoft}
      />
    </div>
  );
}
