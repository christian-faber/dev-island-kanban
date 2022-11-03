import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { useSelector, useDispatch } from "react-redux";

export const Column = ({ column, tasks, setData }) => {
  return (
    <div className="h-50 w-50 bg-slate-200 text-black">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="flex flex-col shadow-lg rounded-lg w-25 h-10 border border-blue p-40"
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
