import DayArc from './DayArc';
import HeroCard from './HeroCard';
import TransactionList from './TransactionList';
import BillOfferRewardCard from './BillOfferRewardCard';
import LiveCashback from './LiveCashback';
import GridElements from './GridElements';

export default function MiddayScreen({ data }) {
  return (
    <div className="px-5 py-1.5 pb-6 animate-screenIn">
      {/* Header */}
      <div className="py-1.5 pb-3.5">
        <div className="flex justify-between items-start mb-2.5">
          <div>
            <h2 className="font-serif font-semibold text-[21px] text-ink">{data.greeting}</h2>
            <div className="text-[12.5px] text-muted mt-0.5 flex items-center gap-1.5">
              {data.showLiveDot && (
                <span className="w-[7px] h-[7px] rounded-full bg-good animate-blink" />
              )}
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
          gradientId="gradD"
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

      {/* Transactions */}
      <TransactionList transactions={data.transactions} accentSoft={data.accentSoft} />

      {/* Cashback offer */}
      <BillOfferRewardCard
        icon={data.cashbackOffer.main.charAt(0)}
        main={data.cashbackOffer.main}
        sub={data.cashbackOffer.sub}
        tag={data.cashbackOffer.tag}
        accent={data.accent}
      />

      {/* Live cashback */}
      <LiveCashback initial={data.liveCashback.initial} accent={data.accent} />

      {/* Quick Actions */}
      <GridElements
        actions={data.quickActions}
        accentSoft={data.accentSoft}
      />
    </div>
  );
}
