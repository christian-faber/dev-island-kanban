import { AddTaskMobile } from "./Icons/AddTaskMobile";
import { VerticalEllipsis } from "./Icons/VerticalEllipsis";
import { Title } from "./Title";

export const Top = () => {
  return (
    <div className="flex flex-row  text-white ">
      <div className="pr-2">
        <Title />
      </div>
      <div className="flex flex-row ">
        <button className="p-4 rounded-full bg-purple-btn">
          +Add New Task
        </button>
        <VerticalEllipsis />
      </div>
    </div>
  );
};
