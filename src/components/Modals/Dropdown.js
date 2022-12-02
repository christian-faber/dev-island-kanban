import React from "react";
import { useSelector } from "react-redux";

export const Dropdown = ({ handleColumn, name = "column" }) => {
  const handleChange = (evt) => {
    handleColumn(evt.target.value);
  };
  const columns = useSelector((state) => state.column);

  return (
    <div className="pr-5   bg-white   rounded-md shadow-md">
      <select
        name={name}
        onChange={handleChange}
        className="outline-none rounded-md p-5 text-gray-500"
      >
        <option>Select Column</option>
        {columns?.map(({ title, id }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
