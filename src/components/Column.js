import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { initialdata } from "../data/initial-data";
import { Task } from "./Task";

export const Column = ({ data }, id, title, taskIds) => {
  return (
    <div>
      <h2>{data?.columns?.column?.title}</h2>
      <Droppable droppableId="column">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {data?.map(({ id, title, taskIds }, index) => (
              <Task key={id} title={title} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};
