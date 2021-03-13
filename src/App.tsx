import React, { FC} from "react";
import CalendarInterface from "./components/CalendarInterface";
import InputEmployees from "./components/InputEmployees";
import InputPositions from "./components/InputPositions";
import InputShifts from "./components/InputShifts";
import CalenderMonth from "./components/CalendarMonth";


const App: FC = () => {
  const test = { test: "moin" };

  return (
    <div className="App">
      <h1>MyDienstplan</h1>
      {/* <CalendarInterface/> */}
      <CalenderMonth/>
      {/* <InputPositions/> */}
      <InputShifts {...test} />
      {/* <InputEmployees /> */}
    </div>
  );
};

export default App;
