import React, { useState } from "react";
import { IShift, IAppProps } from "../interfaces";
import {Store} from "../Store"

const InputShifts: React.FC<IAppProps> = (props) => {
  const { state, dispatch } = React.useContext(Store);


  const [shiftName, setShiftName] = useState<string>("");
  const [necesarry, setNecesarry] = useState<boolean>(false);
  const [shifts, setShifts] = useState<IShift[]>([]);

  const handleClick = () => {
    setNecesarry(!necesarry);
  };

  const addShift = () => {
    setShifts((prev) => [...prev, { shiftName, necesarry }]);
    setShiftName("");
    setNecesarry(false);

    return dispatch({
      type: "ADD_SHIFT",
      payload: {shiftName, necesarry}
    })

  };

  const deleteShift = (position: number) => {
    shifts.splice(position, 1);
    setShifts([...shifts]);
  };



const showCLG = () => {
  console.log(state)
}

  return (
    <div>
      <h2>Input Shifts</h2>
      <span>Shift Name</span>
      <input
        type="text"
        placeholder="Shift Name"
        value={shiftName}
        onChange={(e) => setShiftName(e.target.value)}
      />
      <br />
      <span>Absolutely Necesarry</span>
      <input type="checkbox" checked={necesarry} onChange={handleClick} />
      <br />
      <br />
      <button onClick={addShift}>Add Shift</button>
      <h3>Shifts</h3>
      <ul>
        {shifts.map((shift, i) => (
          <li key={i}>
            <button onClick={() => deleteShift(i)}> X </button>{" "}
            {shift.shiftName} - {shift.necesarry ? "YES" : "no"}
          </li>
        ))}
      </ul>
      <button onClick={showCLG}>CLG_____</button>
    </div>
  );
};

export default InputShifts;
