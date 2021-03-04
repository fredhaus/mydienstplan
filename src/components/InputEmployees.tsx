import { type } from "os";
import React, { FC, useState } from "react";

interface IEmployee {
  fName: string;
  lName: string;
  workingDays: number;
  beingEdited: boolean;
  positions: Array<string>;
}

const initalEmployees = [
  {
    fName: "Fred",
    lName: "Haus",
    workingDays: 12,
    beingEdited: false,
    positions: ["vr", "beamy"],
  },
  {
    fName: "Phil",
    lName: "Hill",
    workingDays: 10,
    beingEdited: false,
    positions: [],
  },
];

const InputEmployees: FC = (props:Object) => {
  const [fName, setFname] = useState<string>("");
  const [lName, setLname] = useState<string>("");
  const [workingDays, setWorkingDays] = useState<number>(0);
  const [beingEdited, setBeingEdited] = useState<boolean>(false);
  const [employees, setEmployees] = useState<IEmployee[]>(initalEmployees);
  const [positions, setPositions] = useState<Array<string>>([]);

  console.log(typeof employees);

  const addEmployee = () => {
    setEmployees((prev) => [
      ...prev,
      { fName, lName, workingDays, beingEdited, positions },
    ]);
    setFname("");
    setLname("");
    setWorkingDays(0);
    setPositions([]);
  };

  const editEmployee = (position: number) => {
    employees[position].beingEdited = !employees[position].beingEdited;
    setEmployees([...employees]);
  };

  const deleteEmployee = (position: number) => {
    employees.splice(position, 1);
    setEmployees([...employees]);
  };

  const clg = () => {
    console.log(employees);
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
        <input
          onChange={(e) => setPositions([...positions, e.target.value])}
          type="text"
          placeholder="i.e. com operator"
          value={positions}
        />
      </div>
      <br />

      <button
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            addEmployee();
          }
        }}
        onClick={addEmployee}
      >
        Add Employee
      </button>

      <h3>Employees</h3>

      <div>
        <ul>
          {employees.map((employee, i) => (
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
              {employee.beingEdited
                ? "Edit here"
                : employee.fName +
                  " " +
                  employee.lName +
                  "- " +
                  employee.workingDays +
                  " days - " +
              employee.positions.map(elem => " " +elem)
                  
                  }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputEmployees;
