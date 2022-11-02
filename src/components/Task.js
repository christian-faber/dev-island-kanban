import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          snapshot={snapshot}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4>{task.content}</h4>
          <p> subtasks</p>
        </div>
      )}
    </Draggable>
  );
};
