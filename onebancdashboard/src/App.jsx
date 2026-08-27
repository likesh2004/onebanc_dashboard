import { useState } from 'react';
import { SCREENS } from './data/screenData';
import TabBar from './components/TabBar';
import PhoneFrame from './components/PhoneFrame';
import MorningScreen from './components/MorningScreen';
import MiddayScreen from './components/MiddayScreen';
import EveningScreen from './components/EveningScreen';
import BillOfferRewardCard from './components/BillOfferRewardCard';
import TransactionList from './components/TransactionList';
import Footer from './components/Footer';

function App() {
  const [currTab, setcurrTab] = useState('subah');
  const [page, setPage] = useState('home');
  const screenData = SCREENS[currTab];
  

  return (<div>   

    <div className="min-h-screen bg-[#0f1013] flex flex-col items-center px-4 pt-10 pb-20">
           <div className="max-w-[640px] text-center text-[#f2f0ea] mb-7 font-mono text-xs tracking-[0.14em] uppercase text-[#9a9d8f] mb-2.5 ">
      
       · OneBanc ·
      </div>

    
      <TabBar
        prop1={currTab}
        prop2={(tab) => {
          setcurrTab(tab);
          setPage('home');
        }}
      />
      <PhoneFrame
        time={screenData.time}
        activeNav={page}
        onNavigate={(nextPage) => {
          if (nextPage === 'home' || nextPage === 'pay' || nextPage === 'transactions') setPage(nextPage);
        }}
      >
        <>
          <>
            {page === 'pay' ? (
              <div className="px-5 py-1.5 pb-6">
                <h2 className="font-serif font-semibold text-[21px] text-ink py-1.5 pb-3.5">Pay</h2>
                <BillOfferRewardCard
                  {...SCREENS.subah.cards[0]}
                  accent={screenData.accent}
                />
              </div>
            ) : page === 'transactions' ? (
              <div className="px-5 py-1.5 pb-6">
                <h2 className="font-serif font-semibold text-[21px] text-ink py-1.5 pb-3.5">Transactions</h2>
                <TransactionList
                  transactions={screenData.transactions}
                  accentSoft={screenData.accentSoft}
                />
              </div>
            ) : (
              <>
                {currTab === 'subah' && <MorningScreen data={screenData} />}
                {currTab === 'dopahar' && <MiddayScreen data={screenData} />}
                {currTab === 'shaam' && <EveningScreen data={screenData} />}
              </>
            )}
          </>
        </>
      </PhoneFrame>
      <Footer />
    </div>
    </div>
  );
}

export default App;
