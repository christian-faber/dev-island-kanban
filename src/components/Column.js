import { useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import InitialData from "./InitialData";
import { Task } from "./Task";

export const Column = ({id, tasks, index}) => {
  const [data, setData] = useState(InitialData);

  console.log(data);
  console.log(setData);

  return (
  <div>
    <h2>{data?.columns?.column?.title}</h2>
    <Droppable droppableId="column">
      {(provided) => (
        <ul {...provided.droppableProps} ref={provided.innerRef}>
        {columns.map({id, title, taskIds}, index) => {
          return(
    <Draggable key={id} draggableId={id} index={index}>
      {(provided) => (<Task />)}
    </Draggable>
  );
}} {provided.placeholder}
        </ul>
      )}
    </Droppable>
  </div>
};
