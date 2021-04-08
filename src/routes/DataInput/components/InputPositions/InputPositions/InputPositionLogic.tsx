import { useState, useContext } from "react";
import { Store } from "../../../../../utils/Store";

function InputPositionLogic() {
  const { state, dispatch } = useContext(Store);
  const [position, setPosition] = useState<string>("");

  const addPosition = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!state.positions.includes(position)) {
      setPosition("");
      return dispatch({
        type: "ADD_POSITION",
        payload: position,
      });
    } else {
      console.log(`Positons "${position}" already in Position-List`);
    }
  };

  return { addPosition, position, setPosition };
}

export default InputPositionLogic;
