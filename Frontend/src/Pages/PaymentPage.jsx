import React, { useState } from 'react';
import { FaPalette, FaImage, FaThList, FaPencilAlt, FaEdit, FaCode } from 'react-icons/fa';
import './PaymentPage.css';

const PaymentPageManagement = () => {
  const [open, setOpen] = useState({
    colorTheme: true,
    companyLogo: false,
    thumbnailLogo: false,
    selectFields: false,
    customFields: false,
    editTexts: false,
    trackingCodes: false
  });

  const toggleOpen = (section) => {
    setOpen(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className="payment-page-management">
      <h3>Payment Page Management</h3>

      <div className="option">
        <button onClick={() => toggleOpen('colorTheme')} className="toggle-button">
          <FaPalette className="icon" /> Choose Color Theme 
        </button>
        {open.colorTheme && (
          <div className="content">
            <div className="color-options">
              {['blue', 'green', 'gray', 'orange', 'purple', 'red'].map(color => (
                <div key={color} className="color-box" style={{ backgroundColor: color }} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('companyLogo')} className="toggle-button">
          <FaImage className="icon" /> Company Logo
        </button>
        {open.companyLogo && (
          <div className="content">
            <p>Upload your company logo here.</p>
            <input type="file" />
          </div>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('thumbnailLogo')} className="toggle-button">
          <FaImage className="icon" /> Company Thumbnail Logo
        </button>
        {open.thumbnailLogo && (
          <div className="content">
            <p>Upload your company thumbnail logo here.</p>
            <input type="file" />
          </div>
        )}
      </div>

      {/* <div className="option">
        <button onClick={() => toggleOpen('selectFields')} className="toggle-button">
          <FaThList className="icon" /> Select fields to display
        </button>
        {open.selectFields && (
          <div className="content">
            <p>Select the fields to display on the payment page:</p>
            <label><input type="checkbox" /> Field 1</label>
            <label><input type="checkbox" /> Field 2</label>
            <label><input type="checkbox" /> Field 3</label>
          </div>
        )}
      </div> */}
      <div className="option">
        <button onClick={() => toggleOpen('selectFields')} className="toggle-button">
          <FaThList className="icon" /> Select fields to display
        </button>
        {open.selectFields && (
          <div className="content">
            <p className="info-box">displaying further fields on the payment page and receiving extra information on the clients can be marked here.</p>
            <p className="warning-box">Fields appearing next to * have been defined as mandatory by the system manager. Please make sure these fields are marked.</p>
            <div className="field-group">
              <div className="field-section">
                <h4><FaImage className="icon" /> Street address</h4>
                <label><input type="checkbox" /> Show Street address</label>
                <label><input type="checkbox" /> Show Street address 2</label>
                <label><input type="checkbox" /> Show City</label>
                <label><input type="checkbox" /> Show Zip Code</label>
                <label><input type="checkbox" /> Show State</label>
                <label><input type="checkbox" /> Show Country</label>
                <label><input type="checkbox" /> Requires Shipping Address</label>
              </div>
              <div className="field-section">
                <h4><FaImage className="icon" /> Personal Details</h4>
                <label><input type="checkbox" /> Show Email *</label>
                <label><input type="checkbox" /> Show Phone No. *</label>
                <label><input type="checkbox" /> Show Personal ID</label>
                <label><input type="checkbox" /> Show Date Of Birth</label>
              </div>
              <div className="field-section">
                <h4><FaImage className="icon" /> Merchant Details</h4>
                <label><input type="checkbox" /> Show merchant details</label>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('customFields')} className="toggle-button">
          <FaPencilAlt className="icon" /> Custom Fields
        </button>
        {open.customFields && (
          <div className="content">
            <p>Add custom fields to the payment page:</p>
            <input type="text" placeholder="Custom Field 1" />
            <input type="text" placeholder="Custom Field 2" />
          </div>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('editTexts')} className="toggle-button">
          <FaEdit className="icon" /> Edit Texts
        </button>
        {open.editTexts && (
          <div className="content">
            <p>Edit the texts displayed on the payment page:</p>
            <textarea placeholder="Edit text here"></textarea>
          </div>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('trackingCodes')} className="toggle-button">
          <FaCode className="icon" /> Tracking Codes
        </button>
        {open.trackingCodes && (
          <div className="content">
            <p>Add tracking codes for analytics:</p>
            <div className="tracking-input">
              <label>Google Analytics ID</label>
              <input type="text" placeholder="Enter Google Analytics ID" />
            </div>
            <div className="tracking-input">
              <label>Facebook Pixel ID</label>
              <input type="text" placeholder="Enter Facebook Pixel ID" />
            </div>
          </div>
        )}
      </div>


      <button className="save-button">Save</button>
    </div>
  );
};

export default PaymentPageManagement;
