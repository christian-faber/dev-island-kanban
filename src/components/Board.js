import { Column } from "./Column";
import { New } from "./New";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { handleOnDragEnd } from "../features/columnSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Board = () => {
  const data = useSelector((state) => state.column);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (

    
    <div className="bg-blue-50  pl-3  h-full flex items-center justify-center">
      <DragDropContext
        onDragEnd={(result) => dispatch(handleOnDragEnd(result))}
      >
        <div className="p-4 flex flex-row gap-4 ">
          {data?.columns?.map((column) => (
            <Column column={column} tasks={data.tasks} key={column.id} />
          ))}
          <New />
        </div>
      </DragDropContext>
    </div>

  );
};
