import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Column = ({ column, tasks, setData }) => {
  return (
    <div className="h-50 w-50 bg-slate-200 text-black">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="shadow-lg rounded-lg w-25 h-10 border border-blue"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks
              .filter((task) => column.taskIds.includes(task.id))
              .map((task, index) => (
                <Task
                  key={task.id}
                  task={task}
                  index={index}
                  className="w-25 h-25 gap-5 border-solid border-orange-700"
                />
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
