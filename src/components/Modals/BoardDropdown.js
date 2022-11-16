import { useSelector } from "react-redux";
import boardSlice from "../../features/boardSlice";

export const BoardDropdown = ({ handleBoard }) => {
  const handleChange = (evt) => {
    handleBoard(evt.target.value);
  };
  const data = useSelector((state) => state.board);
  console.log(data.boards);
  return (
    <div className="pr-5 bg-white rounded-md shadow-md">
      <select
        name="board"
        onChange={handleChange}
        className="outline-none rounded-md p-5 text-gray-500"
      >
        {data.boards.map((title, id) => (
          <option key={id} value={title}>
            {title}
          </option>
        ))}
      </select>
    </div>
  );
};
