import DayArc from './DayArc';
import HeroCard from './HeroCard';
import BillOfferRewardCard from './BillOfferRewardCard';
import GridElements from './GridElements';

export default function EveningScreen({ data }) {
  return (
    <div className="px-5 py-1.5 pb-6">
      {/* Header */}
      <div className="py-1.5 pb-3.5">
        <div className="flex justify-between items-start mb-2.5">
          <div>
            <h2 className="font-serif font-semibold text-[21px] text-ink">{data.greeting}</h2>
            <div className="text-[12.5px] text-muted mt-0.5 flex items-center gap-1.5">
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
          gradientId="gradE"
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

      {/* Redeem card */}
      {data.cards?.map((card, i) => (
        <BillOfferRewardCard
          key={i}
          title={card.title}
          icon={card.icon}
          main={card.main}
          sub={card.sub}
          actionLabel={card.actionLabel}
          accent={data.accent}
        />
      ))}

      {/* Offer */}
      <BillOfferRewardCard
        title={data.offer.title}
        icon={data.offer.icon}
        main={data.offer.main}
        sub={data.offer.sub}
        tag={data.offer.tag}
        accent={data.accent}
      />

      {/* Quick Actions */}
      <GridElements
        actions={data.quickActions}
        accentSoft={data.accentSoft}
      />
    </div>
  );
}
