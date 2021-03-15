import React, { FC, useState } from "react";
import { IEmployee } from "../utils/interfaces";
import { Store } from "../utils/Store";

import "react-dropdown/style.css";

const InputEmployees: FC = (props: Object) => {
  // Global State
  const { state, dispatch } = React.useContext(Store);
  // Local State
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [workingDays, setWorkingDays] = useState<number>(0);
  const [beingEdited, setBeingEdited] = useState<boolean>(false);
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [positions, setPositions] = useState<string>("");
  const [allJobPositions, setallJobPositions] = useState<Array<string>>([]);

  // Actions
  const addEmployee = () => {
    setFname("");
    setLname("");
    setWorkingDays(0);
    setPositions("");
    setallJobPositions([]);

    return dispatch({
      type: "ADD_EMPLOYEE",
      payload: { fName, lName, workingDays, beingEdited, allJobPositions },
    });
  };

  const addJobPosition = (JobPosition: string) => {
    const newJobPositions = [...allJobPositions, JobPosition];
    setallJobPositions(newJobPositions);
    setPositions("");
  };

  const editEmployee = (position: number) => {
    console.log("editing");
  };

  const deleteEmployee = (position: number) => {
    state.employees.splice(position, 1);
    setEmployees([]);
    return dispatch({
      action: "DELETE_EMPLOYEE",
      payload: [...state.employees],
    });
  };

  return (
    <div>
      <h2>Input Employees</h2>
      <div>
        <span>First Name </span>
        <input
          onChange={(e) => setFname(e.target.value)}
          type="text"
          placeholder="John"
          value={fName}
        />
      </div>
      <div>
        <span>Last Name </span>
        <input
          onChange={(e) => setLname(e.target.value)}
          type="text"
          placeholder="Doe"
          value={lName}
        />
      </div>
      <div>
        <span>Working Days </span>
        <input
          onChange={(e) => setWorkingDays(parseInt(e.target.value))}
          type="number"
          placeholder="i.e. 12 days(/months)"
          value={workingDays}
        />
      </div>
      <div>
        <span>Positions </span>

        <span>
          {allJobPositions.map((pos, i) => (
            <div key={i}>{pos}</div>
          ))}
          <select
            onChange={(e) => {
              setPositions(e.target.value);
            }}
            value={positions}
          >
            <option label=" "></option>
            {state.positions.map((pos: string, i: number) => (
              <option key={i} value={pos}>
                {pos}
              </option>
            ))}
          </select>

          <button onClick={() => addJobPosition(positions)}> + </button>
        </span>
      </div>

      <br />

      <button
        onClick={() => {
          addEmployee();
        }}
      >
        Add Employee
      </button>

      <h3>Employees</h3>

      <div>
        <ul>
          {state.employees.map((employee: any, i: number) => (
            <li key={i}>
              <button
                onClick={() => {
                  deleteEmployee(i);
                }}
              >
                {" "}
                X{" "}
              </button>{" "}
              <button onClick={() => editEmployee(i)}> Edit </button>{" "}
              {employee.fName +
                " " +
                employee.lName +
                " - " +
                employee.workingDays +
                " days - " +
                employee.allJobPositions.map((elem: string) => " " + elem)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputEmployees;
