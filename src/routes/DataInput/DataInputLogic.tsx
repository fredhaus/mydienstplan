import React, { useState, useContext } from "react";
import InputCalendarMonth from "./components/InputCalendarMonth/InputCalendarMonth";
import InputEmployees from "./components/InputEmployees/InputEmployees/InputEmployees";
import InputPositions from "./components/InputPositions/InputPositions/InputPositions";
import InputShifts from "./components/InputShifts/InputShifts";
import UploadAvalability from "./components/InputEmployees/UploadAvailability/UploadAvalability";
import UploadEmployees from "./components/InputEmployees/UploadEmployees/UploadEmployees";
import EmployeeList from "./components/InputEmployees/EmployeeList/EmployeeList";
import PositionsList from "./components/InputPositions/PositionsList/PositionsList";
import DataInputMenuLeft from "./DataInputMenuLeft";
import { DataInputWrapper, DataInputFields } from "../../App.styles";


import { Store } from "../../utils/Store";

function DataInputLogic() {
  const { state, dispatch } = useContext(Store);

  const changeTab = (tab: string) => {
    return dispatch({
      type: "CHANGE_DATAINPUT_TAB",
      payload: tab
    })
  }


  const renderSwitch = (tab: string) => {
    switch (state.dataInputTab) {
      case "Positions":
        return (
          <div>
            <h2>Input Positions</h2>
            <InputPositions />
            <PositionsList />
          </div>
        );
      case "Shifts":
        return (
          <div>
            <h2>Input Shifts</h2>
            <InputShifts />
          </div>
        );
      case "Employees":
        return (
          <div>
            <UploadEmployees />
            <InputEmployees />
            <EmployeeList />
          </div>
        );
      case "Availability":
        return (
          <div>
            <UploadAvalability />
          </div>
        );
      case "Month":
        return (
          <div>
            <h2>Input Calendar Month</h2>
  
            <InputCalendarMonth />
          </div>
        );
      default:
        return (
          <div>
            <h2>Input Positions</h2>
            <InputPositions />
            <PositionsList />
          </div>
        );
    }
  };

  return { changeTab, renderSwitch };
}

export default DataInputLogic;
