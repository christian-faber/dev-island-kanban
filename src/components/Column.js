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
      <div className="flex w-72">
        <p className=" pl-8 pr-2 dark:text-slate-400">{column.title}</p>
        <p className="pr-2">({tasks.length})</p>
        <button
          className="bg-red-600 opacity-50 text-white rounded-lg"
          onClick={handleDelete}
        >
          x
        </button>
      </div>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <div
            className="rounded-md  flex flex-col justify-center items-center space-y-4 bg-transparent"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <div className="flex-row"></div>
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
