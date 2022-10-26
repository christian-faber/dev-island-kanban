import { Column } from "./Column";
import { New } from "./New";

export const Board = () => {
  return (
    <div className="border-solid flex flex-row">
      <Column />
      <Column />
      <Column />
      {/* Add new column */}
      <New />
    </div>
  );
};
