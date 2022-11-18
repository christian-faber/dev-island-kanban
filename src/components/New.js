import { useDispatch } from "react-redux";
import { openColumnModal } from "../features/modalSlice";

export const New = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="absolute cursor-pointer text-light-gray"
        onClick={() => {
          dispatch(openColumnModal());
        }}
      >
        + New Column
      </button>
    </>
  );
};
