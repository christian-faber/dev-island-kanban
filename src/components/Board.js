import { Column } from "./Column";
import { New } from "./New";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { handleOnDragEnd } from "../features/columnSlice";
import { useSelector } from "react-redux";

export const Board = () => {
  const { column, task } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="bg-blue-50 h-full flex items-center justify-center dark:bg-gray-800">
      <DragDropContext
        onDragEnd={(result) => dispatch(handleOnDragEnd(result))}
      >
        <div className="h-screen flex pt-8 pb-8  md:pl-12">
          {/* p-2 flex w-fit gap-4 cursor-grab py-2 md:py-6 px-3 font-bold text-black bg-slate-50 dark:bg-gray-800 shadow-lg rounded-md  dark:text-white */}
          {column?.map((column) => (
            <Column column={column} tasks={task} key={column.id} />
          ))}
          <div className=" w-full md:h-[36.5rem] justify-center items-center dark:text-[#828FA3]">
            <New />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};
