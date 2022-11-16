import React from "react";

export const Dropdown = ({ handleColumn }) => {
  const handleChange = (evt) => {
    handleColumn(evt.target.value);
  };

  return (
    <div className="pr-5 bg-white rounded-md shadow-md">
      <select
        name="board"
        onChange={handleChange}
        className="outline-none rounded-md p-5 text-gray-500"
      >
        <option value="">Select Board</option>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    </div>
  );
};
