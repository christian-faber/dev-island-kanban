import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import InitialData from "./InitialData";
import { Task } from "./Task";

export const Column = ({ prefix, elements }) => {
  const [data, setData] = useState(InitialData);

  return (
    <div>
      <h2>{prefix}</h2>
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <Task key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
