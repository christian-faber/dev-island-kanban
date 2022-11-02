import React from "react";
import { useState } from "react";
export const ToggleSlider = () => {
  const [darkMode, setDarkMode] = useState(false);

  // setDarkMode()

  return (
    <div
      class={`flex items-center justify-center flex-col ${darkMode && "dark"}`}
    >
      <label class="switch">
        <input type="checkbox" onClick={() => setDarkMode(!darkMode)} />
        <span class="slider round"></span>
      </label>
    </div>
  );
};
