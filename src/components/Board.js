import { Column } from "./Column";
import { New } from "./New";
import { ToDoCol } from "./ToDoCol";
export const Board = () => {
  return (
    <div className="bg-zinc-900">
      <div className="text-light-gray">
        <ToDoCol />
      </div>
      <div className="text-white flex flex-row bg-middle-gray">
        <Column />
        <Column />
        <Column />
        {/* Add new column */}
        <New />
      </div>
    </div>
  );
};
