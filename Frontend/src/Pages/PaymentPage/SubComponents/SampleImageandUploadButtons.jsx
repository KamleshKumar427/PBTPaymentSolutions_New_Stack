// import CSS
import ".././PaymentPage.css";
import React, { useState } from "react";
import { FaThList, FaRegAddressCard, FaUpload, FaEdit, FaTrash } from "react-icons/fa";
import { IoPersonSharp } from 'react-icons/io5';
import { TbListDetails } from 'react-icons/tb';

// Custom component used inside PaymentPage

const InstructionCard = (props) => {
    return (
      <div className="logo-instruction">
        <ul>
          <li>File size should be 2MB or less.</li>
          <li>
            Recommended dimensions are {props.height} height and {props.width}{" "}
            width.
          </li>
          <li>
            You may use files of the following formats: jpg, png, jpeg, gif.
          </li>
        </ul>
      </div>
    );
  };
  
   
  const Button = ({ color, functionality, placeholder, Icon }) => {
    return (
      <button
        className="ButtonClass"
        style={{ backgroundColor: color }}
        onClick={functionality}
      >
        {Icon && <Icon style={{ marginRight: "8px" }} />}
        {placeholder}
      </button>
    );
  };
  
  
  const SampleImageandUploadButtons = (props) => {
    const handleUpload = () => {
      console.log("Upload button clicked");
      var input = document.createElement("input");
      input.type = "file";
      input.click();
    };
  
    const handleEdit = () => {
      console.log("Edit button clicked");
    };
  
    const handleDelete = () => {
      console.log("Delete button clicked");
    };
  
    return (
      <div className="content">
        <InstructionCard height={"300px"} width={"300px"}></InstructionCard>
        <div className="UploadlogosSection">
          <div>
            <img
              src={props.imageSrc}
              alt="Sample Logo"
              className="SampleLogoImages"
            />
          </div>
  
          <div className="LogoButtonSection">
            <Button
              color="#0b3d91"
              functionality={handleUpload}
              placeholder="UPLOAD"
              Icon={FaUpload}
            />
            <Button
              color="#6c757d"
              functionality={handleEdit}
              placeholder="EDIT PHOTO"
              Icon={FaEdit}
            />
            <Button
              color="#dc3545"
              functionality={handleDelete}
              placeholder="DELETE"
              Icon={FaTrash}
            />
          </div>
        </div>
      </div>
    );
  };





export default SampleImageandUploadButtons;