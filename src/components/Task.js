import { Draggable } from "react-beautiful-dnd";

export const Task = ({ data }, index) => {
  return (
    <Draggable draggableId="draggable-1" index={0}>
      {(provided, snapshot) => (
        <div>
          <li
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <h4>{data?.tasks?.task?.content}</h4>
            <p># of # subtasks complete</p>
          </li>
        </div>
      )}
    </Draggable>
  );
};
