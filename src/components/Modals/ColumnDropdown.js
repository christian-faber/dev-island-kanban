import { useSelector } from "react-redux";

export const ColumnDropdown = ({ handleColumn }) => {
  const handleChange = (evt) => {
    handleColumn(evt.target.value);
  };
  const data = useSelector((state) => state.column);
  console.log(data);
  return (
    <div className="pr-5 bg-white rounded-md shadow-md">
      <select
        name="column"
        onChange={handleChange}
        className="outline-none rounded-md p-5 text-gray-500"
      >
        {" "}
        {data.columns.map((title, id) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
