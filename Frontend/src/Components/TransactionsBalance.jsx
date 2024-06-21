// import React from 'react';
// import './TransactionsBalance.css';
// import LineSeparater from './LineSeparater';

// const TransactionsBalance = () => {
//   return (
//     <div className="transactions-balance-container">
//       <div className="tabs">
//         <div className="tab active">TRANSACTIONS</div>
//         <div className="tab">BALANCE</div>
//       </div>
//       <LineSeparater></LineSeparater>
//       <div className="transactions-content">
//         <p><i className="fas fa-info-circle"></i> Total processing for this month</p>
//         <LineSeparater></LineSeparater>
//         <div className="card-icon">
//             Credit Card Icon
//           <i className="fas fa-credit-card"></i>
//         </div>
//         <LineSeparater></LineSeparater>
//         <p>No transactions for this month</p>
//       </div>
//     </div>
//   );
// };

// export default TransactionsBalance;


import React from 'react';
import './TransactionsBalance.css';
import LineSeparater from './LineSeparater';
import { useState } from 'react';

const TransactionsBalance = () => {
  const [activeTab, setActiveTab] = useState('transactions');

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="transactions-balance-container">
      <div className="tabs">

        <button className={`tab ${activeTab === 'transactions' ? 'active': ''}`} onClick={() => handleClick('transactions')}>TRANSACTIONS</button>
        <button className={`tab ${activeTab === 'balance' ? 'active' : ''}`} onClick={() => handleClick('balance')}>BALANCE</button>

      </div>
      {activeTab === 'transactions' ? (
        <>
          <LineSeparater />
          <div className="transactions-content">
            <p><i className="fas fa-info-circle"></i> Total processing for this month</p>
            <LineSeparater />
            <div className="card-icon">
              Credit Card Icon
              <i className="fas fa-credit-card"></i>
            </div>
            <LineSeparater />
            <p>No transactions for this month</p>
          </div>
        </>
      ) : (
        <>
          <LineSeparater />
            <div className="transactions-content">
              <p><i className="fas fa-info-circle"></i> Total account balance for withdrawal</p>
              <LineSeparater />
              <div className="card-icon">
                Some Icon
                <i className="fas fa-credit-card"></i>
              </div>
              <LineSeparater />
              <p>No balance found on this account</p>
            </div>
          </>
      )}
    </div>
  );
};

export default TransactionsBalance;

