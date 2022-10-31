import { Draggable } from "react-beautiful-dnd";

export const Task = (data, item, index) => {
  return (
    <Draggable draggableId={data?.tasks?.task?.id} index={index}>
      {(provided, snapshot) => {
        return (
          <div>
            <li
              ref={provided.innerRef}
              snapshot={snapshot}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            ></li>

            <h4>{data.tasks.task.content}</h4>
            <p># of # subtasks complete</p>
          </div>
        );
      }}
    </Draggable>
  );
};
