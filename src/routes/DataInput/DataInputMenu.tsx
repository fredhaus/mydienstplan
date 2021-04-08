import React from "react";
import DataInputLogic from "./DataInputLogic";

function DataInputNavigation() {
  const { changeTab } = DataInputLogic();
  const navMenuItems = ["Positions", "Shifts", "Employees","Availability", "Month"];

  return (
    <div>
      <ul>
        {navMenuItems.map((elem) => (
          <div key={elem} onClick={() => changeTab(elem)}>{elem}</div>
        ))}
      </ul>
    </div>
  );
}

export default DataInputNavigation;
