import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const useColumn = () => {
  const { columnName } = useParams();
  const column = useSelector((state) =>
    state.column.find((b) => b.title === columnName)
  );
  return column ? column : {};
};
