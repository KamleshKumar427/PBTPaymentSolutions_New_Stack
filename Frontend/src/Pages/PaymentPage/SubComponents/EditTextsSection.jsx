import React, { useState } from 'react';

const EditTextsSection = () => {
    const [languages, setLanguages] = useState([
      { name: "English", default: true },
      { name: "Chiness", default: false },
    ]);
    const [newLanguage, setNewLanguage] = useState("");
    const [activeLanguage, setActiveLanguage] = useState("English");
  
    const addLanguage = () => {
      if (newLanguage && !languages.find((lang) => lang.name === newLanguage)) {
        setLanguages([...languages, { name: newLanguage, default: false }]);
        setNewLanguage("");
      }
    };
  
    const removeLanguage = (name) => {
      setLanguages(languages.filter((lang) => lang.name !== name));
      if (activeLanguage === name) setActiveLanguage(languages[0].name);
    };
  
    return (
      <div className="language-panel-container">
        <div className="language-tabs">
          {languages.map((lang, index) => (
            <button
              key={index}
              className={`tab ${activeLanguage === lang.name ? "active" : ""}`}
              onClick={() => setActiveLanguage(lang.name)}
            >
              {lang.name}
            </button>
          ))}
          <button
            className="tab add-tab"
            onClick={() => document.getElementById("addLanguageInput").focus()}
          >
            ADD LANGUAGE
          </button>
        </div>
  
        <div className="add-language">
          <label>Add language option to payment page</label>
          <input
            id="addLanguageInput"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            placeholder="Enter language name"
          />
          <button onClick={addLanguage}>ADD</button>
        </div>
  
        {languages.map(
          (lang, index) =>
            activeLanguage === lang.name && (
              <div key={index} className="language-form">
                <h3>{lang.name}</h3>
                <div className="form-group">
                  <input type="checkbox" checked={lang.default} readOnly />
                  <label>Set as default language</label>
                </div>
                <div className="form-group">
                  <label>Text to be shown above payment form:</label>
                  <textarea></textarea>
                </div>
                <div className="form-group">
                  <label>Text to be shown below payment form:</label>
                  <textarea></textarea>
                </div>
                <div className="form-group">
                  <label>Successful Charge Text:</label>
                  <textarea></textarea>
                </div>
                <div className="form-group">
                  <label>Charge Rejected Text:</label>
                  <textarea></textarea>
                </div>
                <div className="form-group">
                  <label>Charge Pending Text:</label>
                  <textarea></textarea>
                </div>
                {lang.name !== "English" && (
                  <button
                    className="remove-button"
                    onClick={() => removeLanguage(lang.name)}
                  >
                    REMOVE {lang.name.toUpperCase()}
                  </button>
                )}
              </div>
            )
        )}
      </div>
    );
  };

  export default EditTextsSection;