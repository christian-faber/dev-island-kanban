import { Column } from "./Column";
import { New } from "./New";
import { DragDropContext } from "react-beautiful-dnd";

export const Board = () => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
  };

  return (
    <div className="border-solid flex flex-row">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div>
          <Column elements={""} key={""} prefix={""} />
        </div>
        <New />
      </DragDropContext>
    </div>
  );
};
