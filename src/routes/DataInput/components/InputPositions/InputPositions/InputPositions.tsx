import React from "react";
import InputPositionLogic from "./InputPositionLogic";

function InputPositions() {
  const { addPosition, position, setPosition } = InputPositionLogic();

  return (
    <div>
      <h4>Input all possible employee Positions for this Dienstplan</h4>
      <form onSubmit={(e) => addPosition(e)}>
        <input
          type="text"
          placeholder="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="submit">Add Position</button>
      </form>
    </div>
  );
}

export default InputPositions;
