import { Draggable } from "react-beautiful-dnd";
import { initialData } from "./InitialData";

export const Task = (item, index) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div>
            <div
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            ></div>

            <h4>{initialData.tasks.task.content}</h4>
            <p># of # subtasks complete</p>
          </div>
        );
      }}
    </Draggable>
  );
};
