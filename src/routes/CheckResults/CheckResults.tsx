import React, { useState, useContext } from "react";
import { Store } from "../../utils/Store";

const ShiftTranslator: any = {
  "Kann Früh": "early",
  "Kann Spät": "late",
};

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
        ? shift.ELW === "weekend"
          ? necesarryWeekendShifts.push(shift)
          : necesarryShifts.push(shift)
        : shift.ELW === "weekend"
        ? unnecesarryWeekendShifts.push(shift)
        : unnecesarryShifts.push(shift);
    }

    return {
      necesarryShifts,
      unnecesarryShifts,
      necesarryWeekendShifts,
      unnecesarryWeekendShifts,
    };
  };

  // Get all possible employees for shift.position
  const getPositionWorkers = (position: string) => {
    const possibleWorkers: any = [];
    for (let index = 0; index < state.employees.length; index++) {
      const employee = state.employees[index];
      if (employee.positionsArr.includes(position)) {
        possibleWorkers.push(employee);
      }
    }
    return possibleWorkers;
  };

  const getShiftStaffing = (day: any, shifts: any, Roster: any) => {
    let shiftStaffing: any = [];
    let dayDateString = day.date;
    for (let index = 0; index < shifts.length; index++) {
      const shift = shifts[index];

      const possibleWorkers = getPositionWorkers(shift.position);
      const possibleWorkersAvailable = [];

      console.log("dayDateString", dayDateString);
      
      for (let index = 0; index < possibleWorkers.length; index++) {
        const possibleWorkerName = possibleWorkers[index].name;
        const availabilityStatus = state.availability[dayDateString].find((x:any) => x.name === possibleWorkerName)

        const workerAvailableString =
          state.availability[dayDateString][index].availability;

        if (
          availabilityStatus.availability !== "Kann nicht"
          
          ) {
            
            if (
              ShiftTranslator.availabilityStatus === shift.ELW ||
              shift.ELW === "weekend"
            ) {
              console.log("possibleWorkerName", possibleWorkerName);
              console.log("availabilityStatus", availabilityStatus);
              console.log("__________");
            }
        }
      }

      shiftStaffing.push({ possibleWorkers, shift });
      console.log("______________________________");
    }
    return shiftStaffing;
  };

  const createRoster = () => {
    const Roster: Array<any> = [];
    const {
      necesarryShifts,
      unnecesarryShifts,
      necesarryWeekendShifts,
      unnecesarryWeekendShifts,
    } = sortShifts();

    for (let index = 0; index < state.calendarMonth.length; index++) {
      const day = state.calendarMonth[index];
      getShiftStaffing(day, necesarryWeekendShifts, Roster);

      // Roster.push(
      //   day.isWeekendHoliday
      //     ? {
      //         date: day.date,
      //         necesarryShiftStaffing: getShiftStaffing(
      //           day,
      //           necesarryWeekendShifts,
      //           Roster
      //         ),

      //         unnecesarryShiftStaffing: getShiftStaffing(
      //           day,
      //           unnecesarryWeekendShifts,
      //           Roster
      //         ),
      //       }
      //     : {
      //         date: day.date,
      //         necesarryShiftStaffing: getShiftStaffing(
      //           day,
      //           necesarryShifts,
      //           Roster
      //         ),
      //         unnecesarryShiftStaffing: getShiftStaffing(
      //           day,
      //           unnecesarryShifts,
      //           Roster
      //         ),
      //       }
      // );
    }

    console.log("Roster", Roster);
    return Roster;
  };

  return (
    <div>
      <h1>CheckResultsComponent</h1>
      <button onClick={createRoster}>createRoster</button>
      <br />
      <button onClick={sortShifts}>getNecesarryShifts</button>
      <ul>
        {createRoster().map((elem: any, i: number) => (
          <li key={i}>
            <b>DATE:</b>
            {elem.date}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckResults;
