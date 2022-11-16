import { Draggable } from "react-beautiful-dnd";
import { openInfoModal } from "../features/modalSlice";
import { useDispatch } from "react-redux";

export const Task = ({ task, index }) => {
  const length = task.subtasks.length;
  const dispatch = useDispatch();

  //dispatch delete task

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="bg-white dark:bg-light-gray dark:text-white w-60 h-min shadow-lg p-2 m-5 gap-5 rounded "
          snapshot={snapshot}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onDoubleClick={() => {
            dispatch(openInfoModal());
          }}
        >
          <div>
            <button className="">x</button>
            <h1 className="font-bold">{task.title}</h1>
          </div>
          <p>
            {length} {length < 2 ? "subtask" : "subtasks"}
          </p>
        </div>
      )}
    </Draggable>
  );
};
