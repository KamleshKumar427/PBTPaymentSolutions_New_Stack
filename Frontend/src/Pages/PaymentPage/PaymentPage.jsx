import React, { useState } from "react";
import {
  FaPalette,
  FaImage,
  FaPencilAlt,
  FaEdit,
  FaCode,
  FaSave,
} from "react-icons/fa";

import "./PaymentPage.css";

import CompanyLogo from "/public/static/PaymentPagesImages/CompanyLogo.png";
import CompanyThumbnailLogo from "/public/static/PaymentPagesImages/CompanyThumbnailLogo.png";


// Sub components of Page
import ColorTheme from "./SubComponents/ColorTheme";
import SampleImageandUploadButtons from "./SubComponents/SampleImageandUploadButtons";
import FieldsToDisplay from "./SubComponents/FieldsToDisplay";
import EditTextsSection from './SubComponents/EditTextsSection';
import { IoMailOpen } from "react-icons/io5";

const PaymentPageManagement = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const [open, setOpen] = useState({
    colorTheme: true,
    companyLogo: false,
    thumbnailLogo: false,
    selectFields: false,
    customFields: false,
    editTexts: false,
    trackingCodes: false,
  });

  const [selectedFields, setSelectedFields] = useState({
    streetAddress: false,
    streetAddress2: false,
    city: false,
    zipCode: false,
    state: false,
    country: false,
    requiresShippingAddress: false,
    showEmail: false,
    showPhoneNumber: false,
    showPersonalId: false,
    showDob: false,
    showMerchantDetails: false,
  });


  const handleSelectionChange = (field, value) => {
    setSelectedFields((prevState) => {
      const newState = {
        ...prevState,
        [field]: value,
      };
      return newState;
    });
  };

  const toggleOpen = (section) => {
    setOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };



  return (
    <div className="payment-page-management">
      {/* Separate out the CSS of Previwe button from here */}
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <h3>Test Payment Page Management</h3>
        <button className="save-button" style={{height:"38px"}}>
          <FaSave />
          &nbsp; Preview
        </button>
      </div>

      {/* Color theme Component */}
      <ColorTheme selectedColor ={selectedColor} setSelectedColor = {setSelectedColor} open={open} toggleOpen={toggleOpen}  />

      <div className="option">
        <button
          onClick={() => toggleOpen("companyLogo")}
          className="toggle-button"
        >
          <FaImage className="icon" /> Company Logo
        </button>
        {open.companyLogo && (
          <SampleImageandUploadButtons
            imageSrc={CompanyLogo}
          ></SampleImageandUploadButtons>
        )}
      </div>

      <div className="option">
        <button
          onClick={() => toggleOpen("thumbnailLogo")}
          className="toggle-button"
        >
          <FaImage className="icon" /> Company Thumbnail Logo
        </button>
        {open.thumbnailLogo && (
          <SampleImageandUploadButtons
            imageSrc={CompanyThumbnailLogo}
          ></SampleImageandUploadButtons>
        )}
      </div>


        <FieldsToDisplay 
          open={open}
          toggleOpen={toggleOpen}
          selectedFields={selectedFields}
          handleSelectionChange={handleSelectionChange}
      />

      <div className="option">
        <button
          onClick={() => toggleOpen("customFields")}
          className="toggle-button"
        >
          <FaPencilAlt className="icon" /> Custom Fields
        </button>
        {open.customFields && (
          <div className="content">
            <input type="text" placeholder="Custom Field 1" />
            &nbsp; &nbsp;
            <input type="text" placeholder="Custom Field 2" />
          </div>
        )}
      </div>

      <div className="option">
        <button
          onClick={() => toggleOpen("editTexts")}
          className="toggle-button"
        >
          <FaEdit className="icon" /> Edit Texts
        </button>
        {open.editTexts && (
          <div className="content">
            <EditTextsSection></EditTextsSection>
          </div>
        )}
      </div>

      <div className="option">
        <button
          onClick={() => toggleOpen("trackingCodes")}
          className="toggle-button"
        >
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
        <FaSave />
        &nbsp; Save
      </button>
    </div>
  );
};

export default PaymentPageManagement;
