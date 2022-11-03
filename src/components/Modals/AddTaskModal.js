export const AddTaskModal = () => {
  <div>
    <h2>Add New Task</h2>
    <div>
      <p>title</p>
      <input type="form"></input>
    </div>
    <div>
      <p>Description</p>
      <input type="form"></input>
    </div>
    <div>
      <p>subtasks</p>
      <span>
        <input type="form"></input>
        <button src="/" alt="X"></button>
      </span>
      <span>
        <input type="form"></input>
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
      <button>Create Task</button>
    </div>
  </div>;
};
