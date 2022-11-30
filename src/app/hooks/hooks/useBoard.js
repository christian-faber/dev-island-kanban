import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useBoard = () => {
  const { boardName } = useParams();
  const board = useSelector((state) =>
    state.board.find((b) => b.title === boardName)
  );
  return board ? board : {};
};
