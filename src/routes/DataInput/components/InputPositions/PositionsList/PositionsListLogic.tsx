import { useContext } from "react";
import { Store } from "../../../../../utils/Store";

function PositionsListLogic() {
  const { state, dispatch } = useContext(Store);

  const deletePosition = (index: number): void => {
    state.positions.splice(index, 1);
    return dispatch({
      type: "DELETE_POSITION",
      payload: [...state.positions],
    });
  };

  return { deletePosition };
}

export default PositionsListLogic;
