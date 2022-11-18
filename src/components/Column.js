import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../features/columnSlice";
export const Column = ({ column, tasks }) => {
  const dispatch = useDispatch();
  const handleDelete = (evt) => {
    dispatch(deleteColumn(column.id));
  };
  return (
    <div className="flex flex-col">
      <p className="pl-6 dark:text-slate-400">
        {column.title}({tasks.length})
      </p>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="rounded-md md:p-4 flex flex-col justify-center items-center space-y-4 bg-transparent"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="flex-row">
              <button onClick={handleDelete}>X</button>
            </div>
            {column.taskIds.map((id, index) => {
              const task = tasks.find((t) => t.id === id);
              return !task ? null : (
                <Task key={task.id} task={task} index={index} />
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
