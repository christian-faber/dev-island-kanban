import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { useSelector, useDispatch } from "react-redux";
import columnSlice from "../features/columnSlice";
import { v4 } from "uuid";

export const Column = ({ column, tasks }) => {
  return (
    <div className="">
      <h2>{column.title}</h2>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="rounded-md md:p-4 flex flex-col justify-center items-center space-y-4 bg-transparent"
            // "w-full h-full rounded-md text-black flex flex-col"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {column.taskIds.map((id, index) => {
              const task = tasks.find((t) => t.id === id);
              return <Task key={task.id} task={task} index={index} />;
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
