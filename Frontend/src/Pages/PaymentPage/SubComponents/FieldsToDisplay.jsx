import React from 'react';
import { FaThList, FaRegAddressCard } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';
import { TbListDetails } from 'react-icons/tb';


const FieldsToDisplay = ({ open, toggleOpen, selectedFields, handleSelectionChange }) => {

    const handleCheckboxChange = (field) => {
      handleSelectionChange(field, !selectedFields[field]);
    };
  
    return (
      <div className="option">
        <button
          onClick={() => toggleOpen("selectFields")}
          className="toggle-button"
        >
          <FaThList className="icon" /> Select fields to display
        </button>
        {open.selectFields && (
          <div className="content">
            <p className="info-box">
              Displaying further fields on the payment page and receiving extra
              information on the clients can be marked here.
            </p>
            <p className="warning-box">
              Fields appearing next to * have been defined as mandatory by the
              system manager. Please make sure these fields are marked.
            </p>
            <div className="field-group">
              <div className="field-section">
                <h4>
                  <FaRegAddressCard className="icon" /> Street address
                </h4>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.streetAddress}
                    onChange={() => handleCheckboxChange("streetAddress")}
                  />{" "}
                  Show Street address
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.streetAddress2}
                    onChange={() => handleCheckboxChange("streetAddress2")}
                  />{" "}
                  Show Street address 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.city}
                    onChange={() => handleCheckboxChange("city")}
                  />{" "}
                  Show City
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.zipCode}
                    onChange={() => handleCheckboxChange("zipCode")}
                  />{" "}
                  Show Zip Code
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.state}
                    onChange={() => handleCheckboxChange("state")}
                  />{" "}
                  Show State
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.country}
                    onChange={() => handleCheckboxChange("country")}
                  />{" "}
                  Show Country
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.requiresShippingAddress}
                    onChange={() => handleCheckboxChange("requiresShippingAddress")}
                  />{" "}
                  Requires Shipping Address
                </label>
              </div>
              <div className="field-section">
                <h4>
                  <IoPersonSharp className="icon" /> Personal Details
                </h4>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.showEmail}
                    onChange={() => handleCheckboxChange("showEmail")}
                  />{" "}
                  Show Email *
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.showPhoneNumber}
                    onChange={() => handleCheckboxChange("showPhoneNumber")}
                  />{" "}
                  Show Phone No. *
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.showPersonalId}
                    onChange={() => handleCheckboxChange("showPersonalId")}
                  />{" "}
                  Show Personal ID
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.showDob}
                    onChange={() => handleCheckboxChange("showDob")}
                  />{" "}
                  Show Date Of Birth
                </label>
              </div>
              <div className="field-section">
                <h4>
                  <TbListDetails className="icon" /> Merchant Details
                </h4>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedFields.showMerchantDetails}
                    onChange={() => handleCheckboxChange("showMerchantDetails")}
                  />{" "}
                  Show merchant details
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default FieldsToDisplay;