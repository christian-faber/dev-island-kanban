import { Column } from "./Column";
import { New } from "./New";

export const Board = () => {
  return (
    <div className="border-solid bg-black">
      <Column />
      <Column />
      <Column />
      {/* Add new column */}
      <New />
    </div>
  );
};
