import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { useSelector, useDispatch } from "react-redux";

export const Column = ({ column, tasks, setData }) => {
  return (
    <div className="">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="w-full h-full rounded-md text-black flex flex-col"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks
              .filter((task) => column.taskIds.includes(task.id))
              .map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
