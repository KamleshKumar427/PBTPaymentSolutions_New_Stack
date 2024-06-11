import React from 'react';
import './TransactionsBalance.css';
import LineSeparater from './LineSeparater';

const TransactionsBalance = () => {
  return (
    <div className="transactions-balance-container">
      <div className="tabs">
        <div className="tab active">TRANSACTIONS</div>
        <div className="tab">BALANCE</div>
      </div>
      <LineSeparater></LineSeparater>
      <div className="transactions-content">
        <p><i className="fas fa-info-circle"></i> Total processing for this month</p>
        <LineSeparater></LineSeparater>
        <div className="card-icon">
            Credit Card Icon
          <i className="fas fa-credit-card"></i>
        </div>
        <LineSeparater></LineSeparater>
        <p>No transactions for this month</p>
      </div>
    </div>
  );
};

export default TransactionsBalance;
