import { data } from "autoprefixer";
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
        <option>Select Column</option>
        {data?.columns?.map((title, id) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
