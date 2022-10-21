import { Column } from "./Column";
import { New } from "./New";

export const Board = () => {
  return (
    <div>
      <Column />
      <Column />
      <Column />
      {/* Add new column */}
      <New />
    </div>
  );
};
