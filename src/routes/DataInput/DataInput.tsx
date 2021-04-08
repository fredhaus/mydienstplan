import React from "react";
import { Store } from "../../utils/Store";
import DataInputLogic from "./DataInputLogic";

import InputCalendarMonth from "./components/InputCalendarMonth/InputCalendarMonth";
import InputEmployees from "./components/InputEmployees/InputEmployees/InputEmployees";
import InputPositions from "./components/InputPositions/InputPositions/InputPositions";
import InputShifts from "./components/InputShifts/InputShifts";
import UploadAvalability from "./components/InputEmployees/UploadAvailability/UploadAvalability";
import UploadEmployees from "./components/InputEmployees/UploadEmployees/UploadEmployees";
import EmployeeList from "./components/InputEmployees/EmployeeList/EmployeeList";
import PositionsList from "./components/InputPositions/PositionsList/PositionsList";
import DataInputMenu from "./DataInputMenu";
import {
  DataInputNav,
  DataInputWrapper,
  DataInputFields,
} from "../../App.styles";
function DataInput() {
  const { state, dispatch } = React.useContext(Store);
  const { changeTab } = DataInputLogic();

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
            <UploadEmployees/>
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

  return (
    
    <DataInputWrapper>
      <DataInputNav>
        <DataInputMenu />
      </DataInputNav>
      <DataInputFields>{renderSwitch(state.dataInputTab)}</DataInputFields>
    </DataInputWrapper>
    
  );
}

export default DataInput;
