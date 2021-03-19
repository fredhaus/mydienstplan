import React, { useState } from "react";
import { Store } from "../utils/Store";

function InputPositions() {
  const { state, dispatch } = React.useContext(Store);

  const [position, setPosition] = useState<string>("");

  const addPosition = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setPosition("");
    return dispatch({
      type: "ADD_POSITION",
      payload: position,
    });
  };

  const deletePosition = (index: number): void => {
    state.positions.splice(index, 1);
    return dispatch({
      type: "DELETE_POSITION",
      payload: [...state.positions],
    });
  };

  return (
    <div>
      <h2>Input all possible employee Positions for this Dienstplan</h2>
      <form onSubmit={(e) => addPosition(e)}>
        <input
          type="text"
          placeholder="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit">Add Position</button>
      </form>
      <h4>
        <ul>
          {state.positions
            ? state.positions.map((pos: Array<string>, i: number) => (
                <li key={i}>
                  <button type="button" onClick={() => deletePosition(i)}> X </button> {pos}
                </li>
              ))
            : ""}
        </ul>
      </h4>
    </div>
  );
}

export default InputPositions;
