import { Column } from "./Column";
import { New } from "./New";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import initialdata from "../data/initial-data";
import { useDispatch } from "react-redux";
import { handleOnDragEnd } from "../features/columnSlice";

export const Board = () => {
  const [data, setData] = useState(initialdata);
  const dispatch = useDispatch();
  // const handleOnDragEnd = (result) => {
  //   if (!result.destination) return;

  // const items = Array.from(data);
  // const [reorderedItem] = items.splice(result.source.index, 1);
  // items.splice(result.destination.index, 0, reorderedItem);

  // setData(items);
  // };

  console.log(data);

  return (
    <DragDropContext onDragEnd={() => dispatch(handleOnDragEnd())}>
      <div className="p-4 flex flex-row h-80 gap-4 ">
        {data?.columns?.map((column) => (
          <Column
            column={column}
            tasks={data.tasks}
            setData={setData}
            key={column.id}
          />
        ))}
      </div>
      <New />
    </DragDropContext>
  );
};
