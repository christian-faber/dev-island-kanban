import { Column } from "./Column";
import { New } from "./New";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import initialdata from "../data/initial-data";

export const Board = () => {
  const [data, setData] = useState(initialdata);
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setData(items);
  };

  console.log(data);

  return (
    <div className="border-solid flex flex-row">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div>
          <Column
            data={data}
            setData={setData}
            elements={""}
            key={""}
            prefix={""}
          />
        </div>
        <New />
      </DragDropContext>
    </div>
  );
};
