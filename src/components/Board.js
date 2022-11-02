import { Column } from "./Column";
import { New } from "./New";
import { ToDoCol } from "./ToDoCol";
export const Board = () => {
  return (
    <div className="bg-white">
      <div className="text-black">
        <ToDoCol />
      </div>
      <div className="text-white flex flex-row bg-slate-100">
        <Column />
        <Column />
        <Column />
        {/* Add new column */}
        <New />
      </div>
    </div>
  );
};
