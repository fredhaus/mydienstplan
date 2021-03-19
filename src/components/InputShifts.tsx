import React, { useState } from "react";
import { IShift, IAppProps } from "../utils/interfaces";
import { Store } from "../utils/Store";

const InputShifts: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  const [shiftName, setShiftName] = useState<string>("");
  const [necesarry, setNecesarry] = useState<boolean>(false);
  const [weekend, setWeekend] = useState<boolean>(false);
  const [shifts, setShifts] = useState<IShift[]>([]);

  const handleClick = (name: string) => {
    switch (name) {
      case "necesarry":
        return setNecesarry(!necesarry);
      case "weekend":
        return setWeekend(!weekend);
    }
  };

  const addShift = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShifts((prev) => [...prev, { shiftName, necesarry }]);
    setShiftName("");
    setNecesarry(false);
    setWeekend(false);

    return dispatch({
      type: "ADD_SHIFT",
      payload: { shiftName, necesarry, weekend },
    });
  };

  const deleteShift = (index: number) => {
    state.shifts.splice(index, 1);
    setShifts([...state.shifts]);
    return dispatch({
      action: "DELETE_SHIFT",
      payload: [...shifts],
    });
  };

  const showCLG = () => {
    console.log("STATE: ____", state);
  };

  return (
    <div>
      <h2>Input all Shifts that need to be staffed</h2>
      <form onSubmit={(e) => addShift(e)}>
        <span>Shift Name</span>
        <input
          type="text"
          placeholder="Shift Name"
          value={shiftName}
          onChange={(e) => setShiftName(e.target.value)}
        />
        <br />
        <span>Absolutely Necesarry</span>
        <input
          type="checkbox"
          name="necesarry"
          checked={necesarry}
          onChange={(e) => handleClick(e.target.name)}
        />
        <br />
        <span>Weekend / Holiday</span>
        <input
          type="checkbox"
          name="weekend"
          checked={weekend}
          onChange={(e) => handleClick(e.target.name)}
        />
        <br />
        <br />
        <button type="submit">Add Shift</button>
      </form>
      <h3>Shifts</h3>
      <ul>
        {state.shifts.map((shift: any, i: number) => (
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
