import { useDispatch } from "react-redux";
import { addColumn } from "../../features/columnSlice";
import { closeColumnModal } from "../../features/modalSlice";

export const AddColumnModal = () => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newColumn.value;
    const description = evt.target.elements.newDescription.value;
    if (!value || !description) return;
    dispatch(addColumn(value, description));

    evt.target.elements.newColumn.value = "";
  };
  return (
    <div>
      <div className="flex space-x-4 ">
        <h2>Add New Column</h2>
        <button onClick={() => dispatch(closeColumnModal())}>X</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>title</p>
          <input name="newColumn" placeholder="Column Title"></input>
        </div>
        <div>
          <p>Description</p>
          <input
            name="newDescription"
            placeholder="Give some details of your category"
          ></input>
        </div>

        <div>
          <span>
            <p>Board</p>
            {/* dropdown in fragment below! */}
            <></>
          </span>
          <button onClick={handleSubmit()}>Create Column</button>
        </div>
      </form>
    </div>
  );
};
