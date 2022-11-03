import { useDispatch } from "react-redux";
import { openColumnModal } from "../features/modalSlice";

export const New = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="cursor-pointer text-black"
        onClick={() => {
          dispatch(openColumnModal());
        }}
      >
        + New Column
      </button>
    </>
  );
};
