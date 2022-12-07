import { useDispatch } from "react-redux";
import { addSubtask } from "../../../features/subtaskSlice";

export const AddSubtask = () => {
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newItem.value;
    if (!value) return;

    dispatch(addSubtask(value));

    evt.target.elements.newItem.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="newItem"
        placeholder="Add new subtask"
        className="border border-gray-500 rounded py-1 px-3"
      />
      <button
        type="submit"
        className="ml-2 border border-blue-600 bg-blue-500 py-1 px-3 rounded"
      >
        Add
      </button>
    </form>
  );
};
