import { Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";
import { useDispatch } from "react-redux";
import { deleteColumn } from "../features/columnSlice";

import { useBoard } from "../app/hooks/useBoard";

export const Column = ({ column, tasks }) => {
  console.log(column.id);
  const dispatch = useDispatch();
  const board = useBoard();
  const handleDelete = (evt) => {
    dispatch(deleteColumn({ columnId: column.id, boardId: board.id }));
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
            className="rounded-md  flex flex-col justify-center items-center space-y-4 bg-transparent h-8"
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
