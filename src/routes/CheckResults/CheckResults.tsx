import React, { useState, useContext } from "react";
import { Store } from "../../utils/Store";

function CheckResults() {
  const { state, dispatch } = useContext(Store);

  // Get necesarry shifts
  const sortShifts = () => {
    const necesarryShifts = [];
    const unnecesarryShifts = [];
    const necesarryWeekendShifts = [];
    const unnecesarryWeekendShifts = [];

    for (let index = 0; index < state.shifts.length; index++) {
      const shift = state.shifts[index];
      shift.necesarry
        ? shift.weekend
          ? necesarryWeekendShifts.push(shift)
          : necesarryShifts.push(shift)
        : shift.weekend
        ? unnecesarryWeekendShifts.push(shift)
        : unnecesarryShifts.push(shift);
    }

console.log("necesarryShifts", necesarryShifts)

    return {
      necesarryShifts,
      unnecesarryShifts,
      necesarryWeekendShifts,
      unnecesarryWeekendShifts,
    };
  };

  // Get all possible employees for shift.position
  const getWorkers = (position: string) => {
    const possibleWorkers: any = [];
    for (let index = 0; index < state.employees.length; index++) {
      const employee = state.employees[index];
      if (employee.positionsArr.includes(position)) {
        possibleWorkers.push(employee);
      }
    }
    return possibleWorkers;
  };

  // Create Roster
  const createRoster = () => {
    const Roster = [];
    const {
      necesarryShifts,
      unnecesarryShifts,
      necesarryWeekendShifts,
      unnecesarryWeekendShifts,
    } = sortShifts();
    
    for (let index = 0; index < state.calendarMonth.length; index++) {
      const day = state.calendarMonth[index];
      let shiftStaffing: any = [];
      for (let index = 0; index < necesarryShifts.length; index++) {
        const shift = necesarryShifts[index];
        const possibleWorkers = getWorkers(shift.position);
        shiftStaffing = { possibleWorkers, shift };
      }
      Roster.push({ day, shiftStaffing });
    }
    console.log(Roster);
    return Roster;
  };

  return (
    <div>
      <h1>CheckResultsComponent</h1>
      <button onClick={createRoster}>createRoster</button>
      <br />
      <button onClick={sortShifts}>getNecesarryShifts</button>
      <ul>
        {createRoster().map((elem: any) => (
          <li>
            <b>DATE:</b>
            {elem.day.day} . {elem.day.month} . {elem.day.year}
            <br />
            <b>SHIFT NAME:</b>
            {elem.shiftStaffing.shift.shiftName}
            <br />
            <b>POSSIBLE WORKERS</b>
            <br />
            {elem.shiftStaffing.possibleWorkers.map((element: any) => (
              <div>{element.name}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckResults;
