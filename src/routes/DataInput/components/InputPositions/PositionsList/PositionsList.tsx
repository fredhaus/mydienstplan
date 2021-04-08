import { useContext } from "react";
import { Store } from "../../../../../utils/Store";
import PositionsListLogic from "./PositionsListLogic";

function PositionsList() {
  const { state, dispatch } = useContext(Store);
  const { deletePosition } = PositionsListLogic();

  return (
    <div>
      <h4>Positions List</h4>
      <ul>
        {state.positions.map((elem: string, index: number) => (
          <span key={elem}>
            <li>
              <button onClick={() => deletePosition(index)}>X</button>
              {elem}
            </li>
          </span>
        ))}
      </ul>
    </div>
  );
}

export default PositionsList;
