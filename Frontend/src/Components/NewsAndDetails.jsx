import React from 'react';
import './NewsAndDetails.css';
import LineSeparater from './LineSeparater';

const NewsAndDetails = () => {
  return (
    <div className="news-and-details-container">
      <div className="news-and-details-header">
        <i className="fas fa-bell"></i>VIEW NEWS & DETAILS FROM YOUR ACCOUNT
      </div>
      <LineSeparater></LineSeparater>
      <div className="news-and-details-content">
        <div className="site-news">
          <h3>SITE NEWS</h3>
          <p><i className="fas fa-check-circle"></i> Account Information, we added new page displaying your preferences. <a href="#">See page</a></p>
          <p><i className="fas fa-check-circle"></i> Chargeback / Fraud Transactions list is now displaying under risk section.</p>
        </div>
          <LineSeparater></LineSeparater>

        <div className="test-transactions">
          <h3>TEST TRANSACTIONS <span className="badge">1064</span></h3>
          <p>You have 1064 test transactions. If the integration has been completed, contact your account manager to remove them. These transactions are not paid when settled.</p>
        </div>
        <LineSeparater></LineSeparater>
      </div>
    </div>
  );
};

export default NewsAndDetails;
