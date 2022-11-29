import { useDispatch } from "react-redux";
import { openColumnModal } from "../features/modalSlice";

export const New = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className=" cursor-pointer text-light-gray w-full h-[36.5rem] flex justify-center items-center dark:text-[#828FA3]"
        onClick={() => {
          dispatch(openColumnModal());
        }}
      >
        + New Column
      </button>
    </>
  );
};
