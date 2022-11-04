import { useDispatch } from "react-redux";
import { closeTaskModal } from "../../features/modalSlice";
import { handleAddTask } from "../../features/taskSlice";

export const AddTaskModal = () => {
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.newTask.value;
    const description = evt.target.elements.newDescription.value;
    if (!value || !description) return;
    dispatch(handleAddTask(value, description));

    evt.target.elements.newTask.value = "";
  };
  <div>
    <div className="">
      <h2>Add New Task</h2>
      <button onClick={() => dispatch(closeTaskModal())}>X</button>
    </div>
    <form on onSubmit={handleSubmit}>
      <div>
        <p>title</p>
        <input name="newTask"></input>
      </div>
      <div>
        <p>Description</p>
        <input name="newDescription"></input>
      </div>
      <div>
        <p>subtasks</p>
        <span>
          <input></input>
          <button src="/" alt="X"></button>
        </span>
        <span>
          <input></input>
          <button src="/" alt="X"></button>
        </span>
        <button>+ Add New Subtask</button>
      </div>
      <div>
        <span>
          <p>Status</p>
          {/* dropdown in fragment below! */}
          <></>
        </span>
        <button type="submit">Create Task</button>
      </div>
    </form>
    ;
  </div>;
};
