import { useDispatch } from "react-redux";
import { openBoardModal } from "../features/modalSlice";

export const Start = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-blue-50 h-full flex items-center align-center justify-center dark:bg-gray-800">
      <div className="h-screen flex pt-8 pb-8  md:pl-12">
        <div className=" w-full  md:h-[36.5rem] justify-center align-center items-center dark:text-[#828FA3]">
          <button
            onClick={() => {
              dispatch(openBoardModal());
            }}
            className="relative cursor-pointer text-light-gray rounded-full bg-indigo-200 py-4 px-3"
          >
            Start by creating a new board!
          </button>
        </div>
      </div>
    </div>
  );
};
