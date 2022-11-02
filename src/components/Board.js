import { Column } from "./Column";
import { New } from "./New";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import initialdata from "../data/initial-data";

export const Board = () => {
  const [data, setData] = useState(initialdata);
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    // const items = Array.from(data);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);

    // setData(items);
  };

  console.log(data);

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="border-black border-solid flex flex-row h-80 gap-5 ">
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
