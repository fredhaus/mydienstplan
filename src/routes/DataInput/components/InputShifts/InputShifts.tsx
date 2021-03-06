import React, { useState } from "react";
import { IShift, IAppProps } from "../../../../utils/interfaces";
import { Store } from "../../../../utils/Store";

const InputShifts: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);

  const [shiftName, setShiftName] = useState<string>("");
  const [necesarry, setNecesarry] = useState<boolean>(false);
  const [shifts, setShifts] = useState<IShift[]>([]);
  const [position, setPosition] = useState("");
  const [ELW, setELW] = useState("");

  const handleClick = (name: string) => {
    switch (name) {
      case "necesarry":
        return setNecesarry(!necesarry);
    }
  };

  const addShift = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({
      type: "ADD_SHIFT",
      payload: { shiftName, necesarry, position, ELW },
    });
    setShifts((prev) => [...prev, { shiftName, necesarry }]);
    setShiftName("");
    setNecesarry(false);

    setPosition("");
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
      <h5>Input all Shifts that need to be staffed</h5>

      <form onSubmit={(e) => addShift(e)}>
        <span>Position</span>
        <select
          onChange={(e) => {
            setPosition(e.target.value);
          }}
          value={position}
        >
          <option label=" "></option>
          {state.positions.map((pos: string, i: number) => (
            <option key={i} value={pos}>
              {pos}
            </option>
          ))}
        </select>
        <br />
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
        <div>
          <span>Early</span>
          <input
            type="radio"
            name="early"
            checked={ELW === "early"}
            onChange={(e) => setELW("early")}
          />

          <span>Late</span>
          <input
            type="radio"
            name="late"
            checked={ELW === "late"}
            onChange={(e) => setELW("late")}
          />

          <span>Weekend / Holiday</span>
          <input
            type="radio"
            name="weekend"
            checked={ELW === "weekend"}
            onChange={(e) => setELW("weekend")}
          />
        </div>
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
