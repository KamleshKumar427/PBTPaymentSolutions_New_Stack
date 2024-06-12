import React from 'react';
import './ExchangeRates.css';

const ExchangeRates = () => {
  return (
    <div className="exchange-rates-container">
      <div className="exchange-rates">
        <div className="exchange-info">
          UPDATED (25/02/2023): <span className="base-currency">BASE CURRENCY EUR (€)</span>
        </div>

        <div className="rates-scroller">
          <div className="rates-content">
            <div className="rate">
               ILS (₪) 0.25
            </div>
            <div className="rate">
               USD ($) 0.916
            </div>
            <div className="rate">
               GBP (£) 1.102
            </div>
            <div className="rate">
               AUD (A$) 0.588
            </div>
            <div className="rate">
               JPY (¥) 0.007
            </div>

          </div>
        </div>
      </div>
      <div className="full-exchange-rates-button">
            <button >FULL EXCHANGE RATES</button>
        </div>
    </div>
  );
};

export default ExchangeRates;
