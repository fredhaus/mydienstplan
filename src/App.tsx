import React, { FC} from "react";
import CalendarInterface from "./components/CalendarInterface";
import InputEmployees from "./components/InputEmployees";
import InputPositions from "./components/InputPositions";
import InputShifts from "./components/InputShifts";
import ManualCalendar from "./components/ManualCalendar";

const App: FC = () => {
  const test = { test: "moin" };

  return (
    <div className="App">
      <h1>MyDienstplan</h1>
      {/* <CalendarInterface/> */}
      <ManualCalendar/>
      <InputPositions/>
      <InputShifts {...test} />
      <InputEmployees />
    </div>
  );
};

export default App;
