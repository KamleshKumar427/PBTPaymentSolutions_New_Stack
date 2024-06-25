import React, { useState } from 'react';
import { FaPalette, FaImage, FaThList, FaPencilAlt, FaEdit, FaCode, FaUpload, FaTrash, FaSave } from 'react-icons/fa';
import './PaymentPage.css';

import CompanyLogo from "/public/static/PaymentPagesImages/CompanyLogo.png"
import CompanyThumbnailLogo from "/public/static/PaymentPagesImages/CompanyThumbnailLogo.png"

// Custom component used inside PaymentPage
const InstructionCard = (porps) => {
  return (
    <div className='logo-instruction'>
      <ul >
        <li>
          File size should be 2MB or less.
        </li>
        <li>
          Recommended dimensions are {porps.height} height and {porps.width} width.
        </li>
        <li>
          You may use files of the following formats: jpg, png, jpeg, gif.
        </li>
      </ul>
  </div>
  )
}

const SampleImageandUploadButtons = (props) => {
  
  const handleUpload = () => {
    console.log('Upload button clicked');
    var input = document.createElement('input');
    input.type = 'file';
    input.click();
  };

  const handleEdit = () => {
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    console.log('Delete button clicked');
  };

  return (
  <div className="content">
            <InstructionCard height = {"300px"} width = {"300px"}></InstructionCard>
            <div className='UploadlogosSection' >
              <div >
                <img src={props.imageSrc} alt="Sample Logo" className="SampleLogoImages" />
              </div>

              <div className='LogoButtonSection'>
                <Button color="#0b3d91" functionality={handleUpload} placeholder="UPLOAD" Icon={FaUpload} />
                <Button color="#6c757d" functionality={handleEdit} placeholder="EDIT PHOTO" Icon={FaEdit} />
                <Button color="#dc3545" functionality={handleDelete} placeholder="DELETE" Icon={FaTrash} />
              </div>
            </div>
            
          </div>)
}

const Button = ({ color, functionality, placeholder, Icon }) => {
  return (
    <button 
      className='ButtonClass'
      style={{ backgroundColor: color}}
      onClick={functionality}
    >
      {Icon && <Icon style={{ marginRight: '8px' }} />}
      {placeholder}
    </button>
  );
};

const PaymentPageManagement = () => {

  const [selectedColor, setSelectedColor] = useState(null);


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

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="payment-page-management">
      <h3>Payment Page Management</h3>

      <div className="option">
        <button onClick={() => toggleOpen('colorTheme')} className="toggle-button">
          <FaPalette className="icon" /> Choose Color Theme
        </button>
        {open.colorTheme && (
          <div className="color-options content" >
          {['blue', 'green', 'gray', 'orange', 'purple', 'red'].map((color) => (
            <div
              key={color}
              className="color-box"
              style={{ backgroundColor: color, position: 'relative' }}
              onClick={() => handleColorClick(color)}
            >
              {selectedColor === color && (
                <div className="tick-box">&#10003;</div>
              )}
            </div>
          ))}
          </div>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('companyLogo')} className="toggle-button">
          <FaImage className="icon" /> Company Logo
        </button>
        {open.companyLogo && (
            <SampleImageandUploadButtons imageSrc = {CompanyLogo}></SampleImageandUploadButtons>
        )}
      </div>

      <div className="option">
        <button onClick={() => toggleOpen('thumbnailLogo')} className="toggle-button">
          <FaImage className="icon" /> Company Thumbnail Logo
        </button>
        {open.thumbnailLogo && (

          <SampleImageandUploadButtons imageSrc = {CompanyThumbnailLogo}></SampleImageandUploadButtons>
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
            <p className="info-box">Displaying further fields on the payment page and receiving extra information on the clients can be marked here.</p>
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


      <button className="save-button">
        <FaSave/>
        &nbsp;
        Save
      </button>
    </div>
  );
};

export default PaymentPageManagement;
