import React, { useState } from "react";

const COLORS = ["red", "green", "blue", "yellow", "purple", "orange"];

function BackgroundColors() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
  };
  return (
    <div>
      <h3>Background Colors</h3>
      <div className="App" style={{ backgroundColor }}>
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BackgroundColors;
