
import React from "react"
import {FaPalette} from "react-icons/fa"

const ColorTheme = ({selectedColor, setSelectedColor, open, toggleOpen}) => {

    const handleColorClick = (color) => {
        setSelectedColor(color);
      };

    return (

        <div className="option">
        <button
        onClick={() => toggleOpen("colorTheme")}
        className="toggle-button"
        >
        <FaPalette className="icon" /> Choose Color Theme
        </button>
        {open.colorTheme && (
        <div className="color-options content">
            {["blue", "green", "gray", "orange", "purple", "red"].map(
            (color) => (
                <div
                key={color}
                className="color-box"
                style={{ backgroundColor: color, position: "relative" }}
                onClick={() => handleColorClick(color)}
                >
                {selectedColor === color && (
                    <div className="tick-box">&#10003;</div>
                )}
                </div>
            )
            )}
        </div>
        )}
        </div>
    )

}

export default ColorTheme;