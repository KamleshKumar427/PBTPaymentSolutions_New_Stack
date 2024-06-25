import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        EUROPOINT SYSTEMS D.O.O. © 2024 [<a href="#">POWERED BY PBT GW</a>]
      </div>
      <div className="footer-right">
        <img src={"path/to/payment-icons.png"} alt="Payment Icons" />
        <img src={"path/to/social-icons.png"} alt="Social Icons" />
      </div>
      <div className="footer-bottom">
        Version v2.75 <a href="#">Send Feedback</a>
      </div>
    </footer>
  );
};

export default Footer;
