import React from "react";
import { useState } from "react";
export const ToggleSlider = () => {
  const [darkMode, setDarkMode] = useState(false);

  // setDarkMode()

  return (
    <div
      className={`flex items-center justify-center flex-col ${
        darkMode && "dark"
      }`}
    >
      <label className="switch">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};
